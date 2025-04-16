'use client'

import { useState, useEffect } from 'react'

// Breakpoints aligned with Tailwind's default breakpoints
export const breakpoints = {
  sm: 640,   // Small screens
  md: 768,   // Medium screens
  lg: 1024,  // Large screens
  xl: 1280,  // Extra large screens
  '2xl': 1536 // 2x Extra large screens
}

export type Breakpoint = keyof typeof breakpoints

export function useResponsive() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0
  })

  useEffect(() => {
    // 클라이언트 사이드에서만 실행되도록 확인
    if (typeof window === 'undefined') return;

    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    // Add event listener
    window.addEventListener('resize', handleResize)

    // Call handler right away so state gets updated with initial window size
    handleResize()

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize)
  }, []) // Empty array ensures that effect is only run on mount and unmount

  // Helper functions to check current breakpoint
  const isAbove = (breakpoint: Breakpoint) => windowSize.width >= breakpoints[breakpoint]
  const isBelow = (breakpoint: Breakpoint) => windowSize.width < breakpoints[breakpoint]

  return {
    width: windowSize.width,
    height: windowSize.height,
    isAbove,
    isBelow,
    isMobile: isBelow('md'),
    isTablet: isAbove('md') && isBelow('lg'),
    isDesktop: isAbove('lg')
  }
}
