import type { MetaFunction } from '@remix-run/node'
import { Link, Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import styles from './styles/app.css'

export function links() {
  return [
    {
      rel: 'preload',
      as: 'font',
      href: '/assets/NeueMachina-Light.otf',
      type: 'font/otf',
      crossOrigin: 'anonymous'
    },
    {
      rel: 'preload',
      as: 'font',
      href: '/assets/NeueMachina-Regular.otf',
      type: 'font/otf',
      crossOrigin: 'anonymous'
    },
    {
      rel: 'preload',
      as: 'font',
      href: '/assets/NeueMachina-Ultrabold.otf',
      type: 'font/otf',
      crossOrigin: 'anonymous'
    },
    { rel: 'stylesheet', href: styles }
  ]
}

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Diurivj',
  viewport: 'width=device-width,initial-scale=1'
})

export default function App() {
  return (
    <html lang="en" className="h-full">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="h-full">
        <Navbar />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
        <Footer />
      </body>
    </html>
  )
}

export function CatchBoundary() {
  return (
    <html className="h-full">
      <head>
        <title>Whoops!</title>
        <Meta />
        <Links />
      </head>
      <body className="h-full">
        <div className="min-h-full pt-16 pb-12 flex flex-col bg-white">
          <main className="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div className="py-16">
              <div className="text-center">
                <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">
                  404 error
                </p>
                <h1 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
                  Page not found.
                </h1>
                <p className="mt-2 text-base text-gray-500">
                  Sorry, we couldn't find the page you're looking for.
                </p>
                <div className="mt-6">
                  <Link
                    to="/"
                    className="text-base font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Go back home<span aria-hidden="true"> &rarr;</span>
                  </Link>
                </div>
              </div>
            </div>
          </main>
          <footer className="flex-shrink-0 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex justify-center space-x-4">
              <Link to="/" className="text-sm font-medium text-gray-500 hover:text-gray-600">
                Home
              </Link>
              <span className="inline-block border-l border-gray-300" aria-hidden="true" />
              <Link to="/about" className="text-sm font-medium text-gray-500 hover:text-gray-600">
                About
              </Link>
              <span className="inline-block border-l border-gray-300" aria-hidden="true" />
              <Link to="/credits" className="text-sm font-medium text-gray-500 hover:text-gray-600">
                Credits
              </Link>
            </nav>
          </footer>
        </div>
        <Scripts />
      </body>
    </html>
  )
}
