// next.config.js
const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css')
const tailwindCss = require('tailwindcss')
const path = require('path')
const withSourceMaps = require('@zeit/next-source-maps')()
const webpack = require('webpack')
const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')
const SentryWebpackPlugin = require('@sentry/webpack-plugin')

const {
  NEXT_PUBLIC_SENTRY_DSN: SENTRY_DSN,
  SENTRY_ORG,
  SENTRY_PROJECT,
  SENTRY_AUTH_TOKEN,
  NODE_ENV,
  VERCEL_GITHUB_COMMIT_SHA,
  VERCEL_GITLAB_COMMIT_SHA,
  VERCEL_BITBUCKET_COMMIT_SHA,
} = process.env

const COMMIT_SHA = VERCEL_GITHUB_COMMIT_SHA || VERCEL_GITLAB_COMMIT_SHA || VERCEL_BITBUCKET_COMMIT_SHA

process.env.SENTRY_DSN = SENTRY_DSN
const basePath = ''

module.exports = withSourceMaps(
  withPWA(
    withCSS(
      withSass({
        pwa: {
          dest: 'public',
          runtimeCaching,
          disable: process.env.NODE_ENV === 'development',
          register: true,
        },
        poweredByHeader: false,
        reactStrictMode: true,
        i18n: {
          locales: ['en', 'es'],
          defaultLocale: 'es',
          localeDetection: false,
        },
        images: {
          deviceSizes: [320, 420, 768, 1024, 1200],
          domains: ['cms.gosuac.com', 'cdn.gosuac.com', 'playbak.io'],
        },
        productionBrowserSourceMaps: true,
        env: {
          // Make the COMMIT_SHA available to the client so that Sentry events can be
          // marked for the release they belong to. It may be undefined if running
          // outside of Vercel
          NEXT_PUBLIC_COMMIT_SHA: COMMIT_SHA,
        },
        webpack(config, options) {
          if (options.isServer) {
            require('./generate-sitemap')
          }

          // In `pages/_app.js`, Sentry is imported from @sentry/browser. While
          // @sentry/node will run in a Node.js environment. @sentry/node will use
          // Node.js-only APIs to catch even more unhandled exceptions.
          //
          // This works well when Next.js is SSRing your page on a server with
          // Node.js, but it is not what we want when your client-side bundle is being
          // executed by a browser.
          //
          // Luckily, Next.js will call this webpack function twice, once for the
          // server and once for the client. Read more:
          // https://nextjs.org/docs/api-reference/next.config.js/custom-webpack-config
          //
          // So ask Webpack to replace @sentry/node imports with @sentry/browser when
          // building the browser's bundle
          if (!options.isServer) {
            config.resolve.alias['@sentry/node'] = '@sentry/browser'
          }
          const rules = [
            {
              test: /\.scss|svg$/,
              use: [
                {
                  loader: 'postcss-loader',
                  options: {
                    ident: 'postcss',
                    plugins: [tailwindCss('./tailwind.config.js')],
                  },
                },
                { loader: 'sass-loader' },
              ],
            },
          ]
          config.module.rules.push({
            test: /\.(eot|ttf|woff|woff2)$/,
            use: {
              loader: 'url-loader',
            },
          })
          config.plugins.push(
            new webpack.ProvidePlugin({
              $: 'jquery',
              jQuery: 'jquery',
              'window.jQuery': 'jquery',
            })
          )
          // Define an environment variable so source code can check whether or not
          // it's running on the server so we can correctly initialize Sentry
          config.plugins.push(
            new options.webpack.DefinePlugin({
              'process.env.NEXT_IS_SERVER': JSON.stringify(options.isServer.toString()),
            })
          )
          config.resolve.modules.push(path.resolve('./'))

          if (
            SENTRY_DSN &&
            SENTRY_ORG &&
            SENTRY_PROJECT &&
            SENTRY_AUTH_TOKEN &&
            COMMIT_SHA &&
            NODE_ENV === 'production'
          ) {
            config.plugins.push(
              new SentryWebpackPlugin({
                include: '.next',
                ignore: ['node_modules'],
                stripPrefix: ['webpack://_N_E/'],
                urlPrefix: `~${basePath}/_next`,
                release: COMMIT_SHA,
              })
            )
          }

          return {
            ...config,
            module: { ...config.module, rules: [...config.module.rules, ...rules] },
          }
        },
      })
    )
  )
)
