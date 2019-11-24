import { useState, useEffect } from 'react'

type Callback = (props: { scroll: number; height: number }) => void

let eventPending = false
const callbacks: Array<Callback> = []

function addListener(callback: Callback) {
  if (callbacks.length === 0) {
    window.addEventListener('scroll', handleEvent)
    window.addEventListener('resize', handleEvent)
  }
  callbacks.push(callback)
}

function removeListener(callback: Callback) {
  const idx = callbacks.indexOf(callback)
  if (idx === -1) {
    return
  } else if (idx === callbacks.length - 1) {
    callbacks.pop()
  } else {
    callbacks[idx] = callbacks.pop() as any
  }
  if (callbacks.length === 0) {
    window.removeEventListener('scroll', handleEvent)
    window.removeEventListener('resize', handleEvent)
  }
}

function handleEvent() {
  if (!eventPending) {
    eventPending = true
    window.requestAnimationFrame(updateCallbacks)
  }
}

function updateCallbacks() {
  eventPending = false
  const scroll = window.scrollY
  const height = window.innerHeight
  if (scroll < height * 2) {
    for (let i = 0; i < callbacks.length; i++) {
      callbacks[i].call(null, { scroll, height })
    }
  }
}

export function useScrollAndHeight(): { scroll: number; height: number } {
  const [state, setState] = useState({ scroll: 0, height: 800 })
  useEffect(() => {
    addListener(setState)
    setState({ scroll: window.scrollY, height: window.innerHeight })
    return () => removeListener(setState)
  }, [])
  return state
}
