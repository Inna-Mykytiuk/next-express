"use client"

import { useState, useEffect } from "react";
import Link from "next/link";
import Button from "../ui/Button";
import Route from "../ui/Route";
import MobileMenu from "./MobileMenu";
import { navLinks } from "@/constants";
import clsx from "clsx";


const Navbar = () => {
  return (
    <nav className="py-4 w-full">
      <div
        className="flex items-center justify-between pb-5 w-[95%] mx-auto max-w-[1450px] border-b border-gray-100">
        <div className="flex-1">
          <Link href={"/"}>
            <h1 className="text-3xl font-extrabold text-secondary">
              Explore
              <span className="text-primary">X</span>
            </h1>
          </Link>
        </div>

        <ul className="flex items-center justify-center gap-14 flex-2 max-md:hidden">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Route
                route={link.route}
                label={link.label}
              />
            </li>
          ))}
        </ul>

        <div
          className="flex gap-5 text-white flex-1 max-md:hidden justify-end">
          <Button
            text="Log In"
            aria="Log in button"
            onClick={() => null}
          />
          <Button
            text="Sign Up"
            aria="Sign up button"
            onClick={() => null}
          />
        </div>

        <div>
          <MobileMenu />
        </div>


      </div>

    </nav>
  )
}

export default Navbar
