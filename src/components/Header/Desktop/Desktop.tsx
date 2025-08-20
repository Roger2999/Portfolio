import { PopoverGroup } from "@headlessui/react"
import { Bars3Icon } from "@heroicons/react/24/outline"
import type { HeaderProps } from "../types"
import { NavLink } from "react-router-dom"
import { AuthStore } from "../../../store"

export const Desktop = ({ onMenuOpen }: Pick<HeaderProps, "onMenuOpen">) => {
  const isAutenticated = AuthStore((state) => state.isAutenticated);
  const logout = AuthStore((state) => state.logout);
  return (
    <>
    <nav aria-label="Global" className=" flex items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <NavLink to="/home" className="-m-1.5 p-1.5">
            <span className="sr-only">Portfolio</span>
            <img
              alt="Portfolio Icon"
              src="src\assets\portfolio-icon.svg"
              className="h-8 w-auto"
            />
          </NavLink>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={onMenuOpen}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <NavLink to="/home" className="text-sm/6 font-semibold text-gray-900">
            Home
          </NavLink>
          <NavLink to="/about" className="text-sm/6 font-semibold text-gray-900">
            Sobre mi
          </NavLink>
          <NavLink to="/projects" className="text-sm/6 font-semibold text-gray-900">
            Proyectos
          </NavLink>
          <NavLink to="/skills" className="text-sm/6 font-semibold text-gray-900">
            Habilidades
          </NavLink>
          <NavLink to="/contact" className="text-sm/6 font-semibold text-gray-900">
            Contacto
          </NavLink>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          
          <NavLink to="/register" className=" font-semibold  mx-7 btn btn-outline btn-primary">
            Register <span aria-hidden="true">&rarr;</span>
          </NavLink>
          {!isAutenticated ? (
            <NavLink to="/login" className="text-sm/6 font-semibold  btn btn-outline btn-success">
            Log in <span aria-hidden="true">&rarr;</span>
          </NavLink>
          ) :<button onClick={logout} className="font-semibold cursor-pointer btn btn-outline btn-secondary">
              Log out <span aria-hidden="true">&rarr;</span>
            </button> }
        </div>
      </nav>
    </>
  )
}
