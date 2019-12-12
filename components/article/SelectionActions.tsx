import { useLayoutEffect, useRef } from 'react'
import { useCopyEffect } from './clipboardUtil'
import { getCurrentRange, isSameRange } from './selectionUtil'
import Toaster, { ToastRef } from './Toaster'
import { useWindowSize } from '../useWindowSize'
import CopySVG from '../svg/CopySVG'
import LinkSVG from '../svg/LinkSVG'
import TwitterSVG from '../svg/TwitterSVG'
import { isAlternateClick } from './isAlterateClick'
import {
  canNativeShare,
  nativeShare,
  shareURL,
  twitterShareURL,
  twitterQuoteTweet,
  selectedQuote,
  facebookShareURL
} from './shareUtil'
import { DecodedSelection } from './SelectionAnchor'
import FacebookSVG from '../svg/FacebookSVG'

export function SelectionActions({
  article,
  encoded,
  decoded
}: {
  article: string
  encoded: string
  decoded: DecodedSelection
}) {
  const popUnder = /iPad|iPhone|iOS|Android/.test(navigator.userAgent)
  const toaster = useRef<ToastRef>()
  const copyToClipboard = useCopyEffect<boolean>(copyLinkOnly => {
    if (isSameRange(getCurrentRange(), decoded.range)) {
      if (copyLinkOnly) {
        toaster.current && toaster.current.toast('Copied Link')
        return shareURL(article, encoded)
      } else {
        toaster.current && toaster.current.toast('Copied Quote')
        return `${selectedQuote(decoded.range.toString())} — Lee Byron`
      }
    }
  })

  const actionsRef = useRef<HTMLDivElement | null>(null)
  const { width, height } = useWindowSize()
  useLayoutEffect(() => {
    const elem = actionsRef.current
    if (elem) {
      const { top, bottom, left, right } = decoded.range.getBoundingClientRect()
      if (popUnder) {
        elem.style.top = `${window.scrollY + bottom}px`
      } else {
        elem.style.top = `${window.scrollY + top}px`
      }
      elem.style.left = `${window.scrollX + (left + right) / 2}px`
    }
  }, [encoded, width, height])

  return (
    <div
      ref={actionsRef}
      className={[
        'rangeActions',
        decoded.isOutdated && 'outdated',
        popUnder && 'popUnder'
      ]
        .filter(x => x)
        .join(' ')}
    >
      <style jsx>{`
        .rangeActions {
          animation: 0.25s ease-out 0.85s both actionsFadeIn;
          margin-top: -2.7em;
          position: absolute;
          transform: translateX(-50%);
        }
        .rangeActions.popUnder {
          margin-top: 1em;
        }
        .actions {
          background: black;
          border-radius: 3px;
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
          color: #666;
          display: flex;
          padding: 0.3em 0.6em 0.4em;
          position: relative;
        }
        .actions :global(svg) {
          width: 1.6em;
          display: block;
        }
        .actions a {
          margin: 0 0.25em;
          fill: white;
          color: white;
          line-height: 1;
          text-decoration: none;
        }
        .actions a:hover {
          text-decoration: underline;
        }
        .actions:after {
          background: black;
          bottom: -0.375em;
          content: '';
          display: block;
          height: 0.75em;
          left: 0;
          margin-left: 50%;
          position: absolute;
          transform: translateX(-50%) rotate(45deg);
          width: 0.75em;
        }
        .rangeActions.popUnder .actions:after {
          bottom: unset;
          top: -0.375em;
        }
        .outdated {
          background: red;
        }
        @keyframes actionsFadeIn {
          from {
            opacity: 0;
            transform: translate(-50%, 7px) scale(0.93);
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
      <Toaster ref={toaster} popUnder={popUnder} />
      <div className="actions">
        <a
          href={twitterShareURL(
            twitterQuoteTweet(article, encoded, decoded.range.toString())
          )}
          target="_blank"
        >
          <TwitterSVG />
        </a>
        <a href={facebookShareURL(article, encoded)} target="_blank">
          <FacebookSVG />
        </a>
        <a
          href="#"
          onClick={event => {
            copyToClipboard(false)
            event.preventDefault()
          }}
        >
          <CopySVG />
        </a>
        <a
          href={shareURL(article, encoded)}
          onClick={event => {
            // Allow right-click and command-click to behave as normal.
            if (isAlternateClick(event)) {
              return
            }
            event.preventDefault()
            if (canNativeShare()) {
              nativeShare({
                text: decoded.range.toString(),
                url: shareURL(article, encoded)
              }).then(
                () => {
                  toaster.current && toaster.current.toast('Shared')
                },
                (error: Error) => {
                  if (error.name !== 'AbortError') {
                    throw error
                  }
                }
              )
            } else {
              copyToClipboard(true)
            }
          }}
        >
          <LinkSVG />
        </a>
      </div>
    </div>
  )
}
