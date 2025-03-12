"use client"
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/react'
import { MagnifyingGlassIcon, BellIcon } from '@heroicons/react/24/outline'
import { useAuthStore } from '@/store/authStore'
import { useRouter } from "next/navigation";

const userNavigation = [
  { name: 'Sign out', href: '#' }
]

const Header = () => {
  const { logout } = useAuthStore();
  const router = useRouter();

  return (
    <div>
      <header className="relative">
        <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center">

            {/* Logo */}
            <div className="ml-4 flex lg:ml-0">
              <a href="#">
                <span className="sr-only">Your Company</span>
                <img
                  alt=""
                  src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=white"
                  className="h-8 w-auto"
                />
              </a>
            </div>

            <form className="mt-2 ml-3 flex sm:max-w-md">
              <input
                id="search"
                type="text"
                required
                placeholder="Search"
                className="block w-full rounded-md bg-white px-4 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-red-600"
              />
              <div className="ml-4 shrink-0">
                <button
                  type="submit"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                >
                  <MagnifyingGlassIcon className='h-6 w-6'/>
                </button>
              </div>
            </form>

            <div className="ml-auto flex items-center">
              <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                <a className="text-sm font-bold text-white hover:text-gray-200 cursor-pointer">
                  Property
                </a>
                <span aria-hidden="true" className="h-6 w-px bg-gray-200" />
                <a onClick={() => router.push('/profile')} className="text-sm font-medium text-white hover:text-gray-200 cursor-pointer">
                  Profile
                </a>
                <span aria-hidden="true" className="h-6 w-px bg-gray-200" />
                <button
                  type="button"
                  className="relative shrink-0 rounded-full p-1 text-red-200 hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <BellIcon aria-hidden="true" className="size-6" />
                </button>

                <Menu as="div" className="relative shrink-0">
                  <div>
                    <MenuButton className="relative flex rounded-full bg-white text-sm ring-2 ring-white/20 focus:outline-none focus:ring-white">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img alt="" src={"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"} className="size-8 rounded-full" />
                    </MenuButton>
                  </div>
                  <MenuItems
                    transition
                    className="absolute -right-2 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none data-[closed]:data-[leave]:scale-95 data-[closed]:data-[leave]:transform data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-75 data-[leave]:ease-in"
                  >
                    {userNavigation.map((item) => (
                      <MenuItem key={item.name}>
                        <div
                          onClick={logout}
                          className="block px-4 py-2 text-sm text-black data-[focus]:bg-gray-100 data-[focus]:outline-none cursor-pointer"
                        >
                          {item.name}
                        </div>
                      </MenuItem>
                    ))}
                  </MenuItems>
                </Menu>
              </div>
            </div>

          </div>
        </nav>
      </header>
    </div>
  )
}

export default Header;