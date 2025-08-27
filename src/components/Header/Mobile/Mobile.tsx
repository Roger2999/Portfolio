import { XMarkIcon } from "@heroicons/react/24/outline"
import { NavLink } from "react-router-dom"
import type { HeaderProps } from "../types"
import { AuthStore } from "../../../store"

export const Mobile = ({ mobileMenuOpen, onMenuClose }: Pick<HeaderProps, "mobileMenuOpen" | "onMenuClose">) => {
  const isAutenticated = AuthStore((state) => state.isAutenticated)
  const logout = AuthStore((state) => state.logout)

  return (
    <>
      {/* Fondo oscuro */}
      <div
        className={`fixed inset-0 z-40 bg-black/30 transition-opacity duration-300 
        ${mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      />

      {/* Panel deslizante */}
      <aside
        className={`fixed inset-y-0 right-0 z-50 w-full sm:max-w-sm bg-white p-6 sm:ring-1 sm:ring-gray-900/10 
        transform transition-transform transition-opacity duration-300 ease-in-out
        ${mobileMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 pointer-events-none"}`}
      >
        <div className="flex items-center justify-between">
          <NavLink to="/home" className="-m-1.5 p-1.5">
            <span className="sr-only">Portfolio</span>
            <img
              alt="Portfolio Icon"
              src="src/assets/portfolio-icon.svg"
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

        {/* Links */}
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              <NavLink to="/home" onClick={onMenuClose} className="-mx-3 block rounded-lg px-3 py-2 font-semibold text-gray-900 hover:bg-gray-50">Home</NavLink>
              <NavLink to="/about" onClick={onMenuClose} className="-mx-3 block rounded-lg px-3 py-2 font-semibold text-gray-900 hover:bg-gray-50">Sobre mi</NavLink>
              <NavLink to="/projects" onClick={onMenuClose} className="-mx-3 block rounded-lg px-3 py-2 font-semibold text-gray-900 hover:bg-gray-50">Proyectos</NavLink>
              <NavLink to="/skills" onClick={onMenuClose} className="-mx-3 block rounded-lg px-3 py-2 font-semibold text-gray-900 hover:bg-gray-50">Habilidades</NavLink>
              <NavLink to="/contact" onClick={onMenuClose} className="-mx-3 block rounded-lg px-3 py-2 font-semibold text-gray-900 hover:bg-gray-50">Contacto</NavLink>
            </div>

            {/* Botones de Auth */}
            <div className="flex flex-col items-center py-10 space-y-5">
              <NavLink to="/register" onClick={onMenuClose} className="w-40 font-semibold btn btn-outline btn-primary">Register</NavLink>
              {!isAutenticated ? (
                <NavLink to="/login" onClick={onMenuClose} className="w-40 font-semibold btn btn-outline btn-success">
                  Log in <span aria-hidden="true">&rarr;</span>
                </NavLink>
              ) : (
                <button onClick={() => { logout(); onMenuClose(); }} className="w-40 font-semibold cursor-pointer btn btn-outline btn-secondary">
                  Log out <span aria-hidden="true">&rarr;</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}
