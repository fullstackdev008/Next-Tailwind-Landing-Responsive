const { configureSitemap } = require('@sergeymyssak/nextjs-sitemap')

async function getDynamicPaths() {
  const data = ['/legal/privacy-policy', '/legal/cookie-policy', '/legal/condiciones-de-uso']
  return data
}

getDynamicPaths().then(paths => {
  const Sitemap = configureSitemap({
    baseUrl: 'https://playbak.io',
    exclude: ['/404', '/blog/[blogId]', '/legal/[slug]'],
    include: paths,
    excludeIndex: true,
    pagesConfig: {
      '/legal/*': {
        priority: '0.5',
        changefreq: 'monthly',
      },
    },
    isTrailingSlashRequired: true,
    targetDirectory: __dirname + '/public',
    pagesDirectory: __dirname + '/pages',
  })
  Sitemap.generateSitemap()
})
