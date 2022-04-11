import * as React from 'react'
import { useLocation } from '@remix-run/react'

interface SimpleHeaderProps {
  title: string
  text: string
}

export function SimpleHeader({ title, text }: SimpleHeaderProps) {
  const { pathname } = useLocation()

  const header = React.useMemo(() => {
    switch (pathname) {
      case '/':
        return 'Home'
      case '/about':
        return 'About'
      case '/credits':
        return 'Credits'
      default:
        return 'Not found'
    }
  }, [pathname])

  return (
    <div className="text-center">
      <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase font-mLight">
        {header}
      </h2>
      <h1 className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl font-mBold">
        {title}
      </h1>
      <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500 font-mRegular">{text}</p>
    </div>
  )
}
