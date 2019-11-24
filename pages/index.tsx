import Body from '../components/Body'
import Head from '../components/Head'
import { ExplodingLogo } from '../components/ExplodingLogo'
import { useScrollAndHeight } from '../components/useScrollAndHeight'
import { isMobile } from '../components/isMobile'
import { ReactNode } from 'react'

export default () => (
  <Body>
    <Head>
      <title>Lee Byron</title>
      <meta property="og:title" content="Lee Byron" />
      <meta property="og:url" content="https://leebyron.com/" />
      <meta property="og:image" content={require('../assets/me.jpg')} />
      <meta property="og:image:width" content="745" />
      <meta property="og:image:height" content="765" />
      <meta property="og:type" content="profile" />
      <meta property="og:profile:first_name" content="Lee" />
      <meta property="og:profile:last_name" content="Byron" />
      <meta property="og:profile:username" content="leebyron" />
      <meta property="og:profile:gender" content="male" />
    </Head>
    <Header />
    <Page>
      <style jsx>{`
        .talk {
          display: block;
          margin-bottom: 2em;
        }

        .talk img {
          width: 100%;
          display: block;
          margin-bottom: 0.5em;
        }

        @media (min-width: 800px) and (min-height: 500px) {
          p {
            max-width: 55ch;
          }

          .talk {
            min-width: 24px;
            width: calc(33.3% - 2ch);
            margin-left: 2ch;
          }

          .talks {
            display: flex;
            flex-wrap: wrap;
            margin-left: -2ch;
          }
        }

        @media (max-width: 799px) or (max-height: 499px) {
          .logo {
            display: none;
          }
        }

        h2 {
          font-size: inherit;
          font-weight: normal;
          font-style: italic;
          margin: 4em 0 1em;
        }

        a {
          color: #505050;
          text-decoration: underline;
        }

        a:hover {
          text-decoration: none;
        }
      `}</style>
      <img className="logo" src={require('../assets/logo.svg')} width="200" />
      <p>
        Lee is the co-creator of GraphQL and Executive Director of the GraphQL
        Foundation. He works at Robinhood as an Engineering Manager and
        previously worked at Facebook. Lee has had a hand in open source
        libraries used by millions of developers worldwide including GraphQL,
        React, Immutable.js, Flow, Relay, Dataloader, and more.
      </p>
      <h2>Speaking</h2>
      <div className="talks">
        <a className="talk" href="https://youtu.be/vG8WpLr6y_U" target="_blank">
          <img src={require('../assets/talks/1999.jpg')} />
          Program like it's 1999
        </a>
        <a className="talk" href="https://youtu.be/VjHWkBr3tjI" target="_blank">
          <img src={require('../assets/talks/graphql-history.jpg')} />
          Brief history of GraphQL
        </a>
        <a className="talk" href="https://youtu.be/oTcDmnAXZ4E" target="_blank">
          <img src={require('../assets/talks/idea-architecture.jpg')} />
          The IDEA Architecture
        </a>
        <a className="talk" href="https://youtu.be/Oh5oC98ztvI" target="_blank">
          <img src={require('../assets/talks/data-language.jpg')} />
          Designing a data language
        </a>
        <a className="talk" href="https://youtu.be/I7IdS-PbEgI" target="_blank">
          <img src={require('../assets/talks/immutable-data.jpg')} />
          Immutable data in React
        </a>
      </div>
    </Page>
    <script
      dangerouslySetInnerHTML={{
        __html: `
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
      ga('create', 'UA-61714711-1', 'auto');
      ga('send', 'pageview');
    `
      }}
    />
  </Body>
)

function Page({ children }: { children: ReactNode }) {
  return (
    <div className="page">
      <style jsx>{`
        @media (min-width: 800px) and (min-height: 500px) {
          .page {
            background: white;
            box-shadow: 0 1px 8px 1px rgba(0, 0, 0, 0.2);
            padding: 6em 4em;
            margin: 0 auto 12em;
            width: 70vw;
            max-width: 850px;
          }
        }

        @media (max-width: 799px) or (max-height: 499px) {
          .page {
            padding: 0 3ch;
            max-width: 500px;
            margin: 6em auto;
          }
        }
      `}</style>
      {children}
    </div>
  )
}

function Header() {
  const { scroll: ms, height: hei } = useScrollAndHeight()

  return (
    <div className="cardSurface">
      <style jsx>{`
        .cardBack em {
          display: block;
          margin: 1em 0;
        }

        .cardBack a {
          color: #505050;
          text-decoration: none;
          display: block;
        }

        .cardBack a:hover {
          text-decoration: underline;
        }

        :global(.explodinglogo) {
          overflow: visible;
          position: relative;
          width: 100%;
          height: 100%;
          padding: 50vh 50vw;
          margin: -50vh -50vw;
        }

        @media (min-width: 800px) and (min-height: 500px) {
          .cardSurface {
            padding-top: 200vh;
          }

          .card {
            pointer-events: none;
            position: fixed;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            margin: auto;

            -webkit-perspective: 1600px;
            perspective: 1600px;
            -webkit-transform-style: preserve-3d;
            transform-style: preserve-3d;

            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);

            width: 80vm;
            width: 80vmin;
            height: 44vm;
            height: 44vmin;
            max-width: 600px;
            max-height: 330px;
            min-width: 440px;
            min-height: 242px;
          }

          .cardFront {
            height: 100%;
            background: white;
            box-shadow: 0 1px 8px 1px rgba(0, 0, 0, 0.2);

            box-sizing: border-box;
            padding: 13%;

            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
            -webkit-transform: translate3d(0, 0, 3px);
            transform: translate3d(0, 0, 3px);
          }

          .cardBack {
            box-sizing: border-box;
            position: absolute;
            top: -40.90909%;
            left: 22.5%;
            right: 22.5%;
            bottom: -40.90909%;

            padding: 1.5em;

            background: white;
            box-shadow: 0 1px 8px 1px rgba(0, 0, 0, 0.2);

            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
            -webkit-transform: translate3d(0, 0, 0) rotateX(180deg)
              rotateZ(90deg);
            transform: translate3d(0, 0, 0) rotateX(180deg) rotateZ(90deg);
          }

          .cardBottomEdge {
            position: absolute;
            bottom: 0;
            top: 0;
            left: 0;
            right: 0;
            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
            -webkit-transform: translateY(-50%) rotateX(0.25turn);
            transform: translateY(-50%) rotateX(0.25turn);
          }

          .cardBottomEdge::after {
            display: block;
            content: '';
            position: absolute;
            bottom: 50%;
            width: 100%;
            height: 3px;
            background: #ff744c;
          }

          .body {
            width: 90vw;
            max-width: 900px;
            background: white;
            box-shadow: 0 1px 8px 2px rgba(0, 0, 0, 0.2);
            padding: 1em;
            margin: 20vh auto 30vh;
          }
        }

        @media (max-width: 799px) or (max-height: 499px) {
          /* MOBILE */

          .card {
            pointer-events: none;
            width: 100%;
            position: relative;
            overflow: hidden;
          }

          .cardFront {
            position: relative;
            margin: 0 auto;
            padding: 0 3ch;
            max-width: 500px;
            margin-top: 40vh;
          }

          .cardBack {
            padding: 0 3ch;
            max-width: 500px;
            margin: 0 auto;
          }

          .cardBottomEdge {
            display: none;
          }

          .spacer {
            display: none;
          }

          .body {
            padding: 1em;
            margin: 30vh auto;
          }
        }
      `}</style>

      <div className="card">
        <div className="cardFront" style={cardMove(ms, hei)}>
          <ExplodingLogo className="explodinglogo" />
        </div>

        <div className="cardBottomEdge" style={cardMoveEdge(ms, hei)} />

        <div className="cardBack" style={cardMoveBack(ms, hei)}>
          <em>Design Technologist</em>
          <a href="https://twitter.com/leeb" target="_blank">
            @leeb
          </a>
          <a href="mailto&#58;&#108;&#37;65e&#64;leebyron&#46;c&#111;&#109;">
            l&#101;e&#64;&#108;e&#101;&#98;&#121;&#114;on&#46;&#99;om
          </a>
          <a href="https://github.com/leebyron" target="_blank">
            github.com/leebyron
          </a>
          <a href="https://keybase.io/leeb" target="_blank">
            keybase.io/leeb
          </a>
        </div>
      </div>
    </div>
  )
}

function t(s: string) {
  return {
    transform: s,
    WebkitTransform: s
  }
}

function cardMove(s: number, hh: number) {
  if (s === 0 || isMobile()) {
    return {}
  }
  if (s < 0) {
    return t('translate3d(0,' + -s + 'px,0)')
  }

  var notimes = Math.min(1, s / hh)

  // var times = 1-notimes;//Math.max(0, (hh - s)/hh);

  // var cosmo = (1 + Math.cos(Math.PI * notimes)) / 2;

  var notimes2 = Math.max(0, Math.min(1, (1.4 * s) / hh - 0.2))
  var cosmo2 = (1 + Math.cos(Math.PI * notimes2)) / 2

  var dz = 100 * ((1 - Math.cos(2 * Math.PI * notimes2)) / 2)

  var dy =
    Math.min(hh, s) - (1 - notimes) * s * Math.sin(2 * Math.PI * notimes) - s
  return t(
    `translate3d(0,${dy}px,${dz}px)` +
      `rotateZ(${0.25 - 0.25 * cosmo2}turn)` +
      `rotateX(${0.5 - 0.5 * cosmo2}turn)` +
      'translateZ(3px)'
  )
}

function cardMoveBack(s: number, hh: number) {
  if (s === 0 || isMobile()) {
    return {}
  }
  var notimes = Math.min(1, s / hh)
  // var times = 1-notimes;//Math.max(0, (hh - s)/hh);

  // var cosmo = (1 + Math.cos(Math.PI * notimes)) / 2;

  var notimes2 = Math.max(0, Math.min(1, (1.4 * s) / hh - 0.2))
  var cosmo2 = (1 + Math.cos(Math.PI * notimes2)) / 2

  var dz = 100 * ((1 - Math.cos(2 * Math.PI * notimes2)) / 2)

  var dy =
    Math.min(hh, s) - (1 - notimes) * s * Math.sin(2 * Math.PI * notimes) - s
  return t(
    `translate3d(0,${dy}px,${dz}px)` +
      `rotateZ(${-0.25 - 0.25 * cosmo2}turn)` +
      `rotateX(${1 + 0.5 * cosmo2}turn)` +
      'rotateZ(90deg)'
  )
}

function cardMoveEdge(s: number, hh: number) {
  if (s === 0 || isMobile()) {
    return {}
  }
  // return {};
  var notimes = Math.min(1, s / hh)
  // var times = 1-notimes;//Math.max(0, (hh - s)/hh);

  // var cosmo = (1 + Math.cos(Math.PI * notimes)) / 2;

  var notimes2 = Math.max(0, Math.min(1, (1.4 * s) / hh - 0.2))
  var cosmo2 = (1 + Math.cos(Math.PI * notimes2)) / 2

  var dz = 100 * ((1 - Math.cos(2 * Math.PI * notimes2)) / 2)

  var dy =
    Math.min(hh, s) - (1 - notimes) * s * Math.sin(2 * Math.PI * notimes) - s
  return t(
    `translate3d(0,${dy}px,${dz}px)` +
      `rotateZ(${0.25 - 0.25 * cosmo2}turn)` +
      `rotateX(${1 - 0.5 * cosmo2}turn)` +
      'translateY(-50%)' +
      'rotateX(0.25turn)'
  )
}
