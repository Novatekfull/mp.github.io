import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar =()=>{
  return (
    <header className="bg-white py-4 shadow-md w-full z-2 ">
      <div className="container mx-[8%] flex   justify-between items-center w-full">
        <img
          src="assets/images/logo-3-2 rognage.png"
          alt="Logo société"
          className="w-[8%] ml-[10px]"
        />
        <h1 className="text-lime-600 text-3xl font-light">
          Création et entretien de vos jardins
        </h1>
        <nav>
          <ul className="flex">
            <li className="mr-6">
              <NavLink
                to="/"
                className="text-gray-500 hover:text-lime-600 transition duration-200 font-bold"
              >
                Accueil
              </NavLink>
            </li>
            <li className="mr-6">
              <NavLink
                to="/services"
                className="text-gray-500 hover:text-lime-600 transition duration-200 font-bold"
              >
                Services
              </NavLink>
            </li>
            <li className="mr-6">
              <NavLink
                to="/portfolio"
                className="text-gray-500 hover:text-lime-600 transition duration-200 font-bold"
              >
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="text-gray-500 hover:text-lime-600 transition duration-200 font-bold"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
