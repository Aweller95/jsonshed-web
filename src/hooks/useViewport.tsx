import { useEffect, useState } from 'react'

export default function useViewport() {
  const [width, setWidth] = useState(window.innerWidth)

  const mobileBreakpoint = 640
  const desktopBreakpoint = 832

  const isMobile = width < mobileBreakpoint
  const isDesktop = width > desktopBreakpoint

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleWindowResize)
    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])

  return { width, isMobile, isDesktop }
}