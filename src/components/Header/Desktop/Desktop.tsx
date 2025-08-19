import { PopoverGroup } from "@headlessui/react"
import { Bars3Icon } from "@heroicons/react/24/outline"
import type { HeaderProps } from "../Header"
import { NavLink } from "react-router-dom"

export const Desktop = ({setMobileMenuOpen}:HeaderProps)=> {
  return (
    <>
    <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              alt=""
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
              className="h-8 w-auto"
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          
            <NavLink to="/home" className="text-sm/6 font-semibold text-gray-900">
            Home
          </NavLink>
          <NavLink to="/about" className="text-sm/6 font-semibold text-gray-900">
            Sobre mi
          </NavLink>
          <NavLink to="/Projects" className="text-sm/6 font-semibold text-gray-900">
            Proyectos
          </NavLink>
          <NavLink to="/Skills" className="text-sm/6 font-semibold text-gray-900">
            Habilidades
          </NavLink>
          <NavLink to="/Contact" className="text-sm/6 font-semibold text-gray-900">
            Contacto
          </NavLink>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <NavLink to="/login" className="text-sm/6 font-semibold text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </NavLink>
        </div>
      </nav>
    </>
  )
}
