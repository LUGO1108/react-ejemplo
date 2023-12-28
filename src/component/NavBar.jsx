import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const ntnLink = "mr-5 hover:text-gray-900 text-1xl";
  const activeLink ='block inline-block text-amber-800 py-1 mr-4'
  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 hover:text-orange-400 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl uppercase text-white">
              didier lugo
            </span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center cursor-pointer font-bold">
            <NavLink to="/" className={({isActive}) => isActive?activeLink:ntnLink }>Inicio</NavLink>
            <NavLink to="/Tienda" className={({isActive}) => isActive?activeLink:ntnLink }>Tienda</NavLink>
            <NavLink to="/Nosotros" className={({isActive}) => isActive?activeLink:ntnLink }>Nosotros</NavLink>
            <NavLink to="/Contacto" className={({isActive}) => isActive?activeLink:ntnLink }>Contacto</NavLink>
          </nav>
        </div>
      </header>
    </>
  );
};

export default NavBar;
