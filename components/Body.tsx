import { ReactNode } from 'react'

export default ({ children }: { children: ReactNode }) => {
  return (
    <>
      <style global jsx>{`
        @import url('https://use.typekit.net/xpu4mdb.css');

        html, body {
          margin: 0;
        }

        body, h1, h2, p, a {
          -webkit-text-size-adjust: 100%;
          font: 17px/22px 'courier-prime', courier, monospace;
          color: #505050;
        }

        @media (min-width: 800px) and (min-height: 500px) {
          body {
            background: #794c35;
            background-image:
              url(${require('../assets/walnut.jpg')}),
              url(${require('../assets/walnut-lofi.jpg')});
            background-size: cover;
            background-position: center center;
            background-attachment: fixed;
          }
        }

        @media (max-width: 799px) or (max-height: 499px) {
          body {
            background: #fff;
          }
        }

        * {
          user-select: none;
        }

        a {
          -webkit-tap-highlight-color: rgba(109, 169, 182, 0.2);
          pointer-events: auto !important;
        }

        h1, h2, p, p > * {
          user-select: text;
        }
      `}</style>
      {children}
    </>
  )
}
