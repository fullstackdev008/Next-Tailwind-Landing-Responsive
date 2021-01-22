import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { GA_TRACKING_ID } from '../lib/gtag'
import { FB_PIXEL_ID } from '../lib/fbp'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)

    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="es-ES">
        <Head>
          {/* Global Site Code Pixel - Facebook Pixel */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', ${FB_PIXEL_ID});
              `,
            }}
          />
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: 'none' }}
              src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
            />
          </noscript>

          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.fbAsyncInit = function() {
            FB.init({
              appId      : '1373304456343801',
              cookie     : true,
              xfbml      : true,
              version    : 'v9.0'
            });

            FB.AppEvents.logPageView();

          };

            (function(d, s, id){
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {return;}
            js = d.createElement(s); js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
          }(document, 'script', 'facebook-jssdk'));
              `,
            }}
          />

          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
          {/* Global Site Code Pixel - hotjar Pixel */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:2199496,hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
              `,
            }}
          />
          {/* Global Site Iubenda */}

          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `
                var _iub = _iub || [];
            _iub.csConfiguration = {"enableCcpa":true,"countryDetection":true,"consentOnContinuedBrowsing":false,"ccpaAcknowledgeOnDisplay":true,"lang":"es","siteId":2125617,"cookiePolicyId":98811979, "banner":{"brandBackgroundColor":"#ffffff","brandTextColor":"#ff0000","logo":"https://playbak.io/images/logo.png","acceptButtonDisplay":true,"customizeButtonDisplay":true,"acceptButtonColor":"#f0f0f0","acceptButtonCaptionColor":"#b53c39","customizeButtonColor":"#f0f0f0","customizeButtonCaptionColor":"#b53c39","rejectButtonColor":"#f0f0f0","rejectButtonCaptionColor":"#b53c39","position":"float-top-center","textColor":"black","backgroundColor":"white"}};
              `,
            }}
          />
          <script type="text/javascript" src="//cdn.iubenda.com/cs/ccpa/stub.js" />
          <script type="text/javascript" src="//cdn.iubenda.com/cs/iubenda_cs.js" charSet="UTF-8" async />

          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `
                var _iub = _iub || {}; _iub.cons_instructions = _iub.cons_instructions || []; _iub.cons_instructions.push(["init", {api_key: "UpRj4szPAxSvhg6xJV6KGBaIHcCSS6L5"}]);
              `,
            }}
          />

          <script type="text/javascript" src="https://cdn.iubenda.com/cons/iubenda_cons.js" async />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
