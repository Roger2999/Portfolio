import { Dialog, DialogPanel } from "@headlessui/react"
import { XMarkIcon } from "@heroicons/react/24/outline"
import { NavLink } from "react-router-dom"
import type { HeaderProps } from "../types"
import { AuthStore } from "../../../store"

export const Mobile = ({ mobileMenuOpen, onMenuClose }: Pick<HeaderProps, "mobileMenuOpen" | "onMenuClose">) => {
        const isAutenticated = AuthStore((state)=> state.isAutenticated)
        const logout = AuthStore((state)=> state.logout)
  return (
    <>
    <Dialog open={mobileMenuOpen} onClose={onMenuClose} className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <NavLink to="/home" className="-m-1.5 p-1.5">
              <span className="sr-only">Portfolio</span>
              <img
                alt="Portfolio Icon"
                src="src\assets\portfolio-icon.svg"
                className="h-8 w-auto"
              />
            </NavLink>
            <button
              type="button"
              onClick={onMenuClose}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
               <NavLink
                  to="/home"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                   onClick={onMenuClose}
                >
                  Home
                </NavLink>
                <NavLink
                  to="/about"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  
                  onClick={onMenuClose}
                >
                  Sobre mi
                </NavLink>
                <NavLink
                  to="/projects"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  onClick={onMenuClose}
                >
                  Proyectos
                </NavLink>
                <NavLink
                  to="/skills"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  onClick={onMenuClose}
                >
                  Habilidades
                </NavLink>
                <NavLink
                  to="/contact"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  onClick={onMenuClose}
                >
                  Contacto
                </NavLink>
              </div>
              <div className="flex py-10 space-y-5 flex-col items-center">
                <NavLink
                  to="/register"
                  className="w-40 text-base/7 font-semibold  btn btn-outline btn-primary"
                  onClick={onMenuClose}
                >
                  Register
                </NavLink>
                {!isAutenticated ? (
            <NavLink to="/login" className="w-40 text-base/7 font-semibold btn btn-outline btn-success" onClick={onMenuClose}>
            Log in <span aria-hidden="true">&rarr;</span>
          </NavLink>
          ) :<button onClick={() => { logout(); onMenuClose(); }} className="w-40 text-base/7 font-semibold cursor-pointer btn btn-outline btn-secondary">
              Log out <span aria-hidden="true">&rarr;</span>
            </button> }
                
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </>
  )
}
