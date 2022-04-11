import { useLocation, Link } from '@remix-run/react'
import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

export function Navbar() {
  const { pathname } = useLocation()

  const isActive = (path: string) => pathname === path

  const browserLinkClassNames = (path: string) => {
    if (isActive(path)) {
      return 'border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium font-mBold'
    }
    return 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium font-mRegular'
  }

  const mobileLinkClassNames = (path: string) => {
    if (isActive(path)) {
      return 'bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
    }
    return 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
  }

  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  <Link to="/" className={browserLinkClassNames('/')}>
                    Home
                  </Link>
                  <Link to="/about" className={browserLinkClassNames('/about')}>
                    About
                  </Link>
                  <Link to="/credits" className={browserLinkClassNames('/credits')}>
                    Credits
                  </Link>
                </div>
              </div>

              <div className="-mr-2 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <Disclosure.Button as={Link} to="/" className={mobileLinkClassNames('/')}>
                Home
              </Disclosure.Button>
              <Disclosure.Button as={Link} to="/about" className={mobileLinkClassNames('/about')}>
                About
              </Disclosure.Button>
              <Disclosure.Button
                as={Link}
                to="/credits"
                className={mobileLinkClassNames('/credits')}
              >
                Credits
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
