import { useEffect, useState } from 'react'

export const isBrowser = () => typeof window !== 'undefined'

export default function useViewport() {
  const isSSR = typeof window !== 'undefined'
  const [windowSize, setWindowSize] = useState({
    width: isSSR ? 1200 : window.innerWidth,
    height: isSSR ? 800 : window.innerHeight,
  })
  const [isMobile, setIsMobile] = useState(true)

  function changeWindowSize() {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight })
  }

  useEffect(() => {
    window.innerWidth > 640 ? setIsMobile(false) : setIsMobile(true)
  }, [windowSize])

  useEffect(() => {
    window.addEventListener('resize', changeWindowSize)

    return () => {
      window.removeEventListener('resize', changeWindowSize)
    }
  }, [])

  return { windowSize, isMobile }
}
