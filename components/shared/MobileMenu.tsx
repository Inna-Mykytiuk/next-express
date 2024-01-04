"use client"

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaFacebookSquare } from "react-icons/fa";
import { CgMenuGridO, CgClose } from "react-icons/cg";
import {
  FaSquareXTwitter,
  FaSquareInstagram,
  FaSquareSnapchat,
} from "react-icons/fa6";
import Button from "../ui/Button";
import Route from "../ui/Route";
import { navLinks } from "@/constants";
import useMenuActive from "@/hooks/useMenuActive";




const MobileMenu = () => {

  const [isOpen, setIsOpen] = useState(false);

  const menuHandler = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <div
        className="md:hidden"
        onClick={menuHandler}>
        {isOpen ? (<CgClose size={25} />) : (<CgMenuGridO size={25} />)}
      </div>

      {isOpen ? (
        <div onClick={() => setIsOpen(false)}
          className="fixed w-full h-screen top-0 left-0 bg-black/25 z-50">
          <div className="absolute h-screen left-0 top-0 w-60 bg-white z-[999] px-5 border-r overflow-y-hidden flex flex-col gap-10"
            onClick={(e) => e.stopPropagation()}>
            <div className="border-b py-5">
              <Link href={'/'}>
                <h1 className="text-3xl font-extrabold text-secondary">
                  Explore
                  <span className="text-primary">X</span>
                </h1>
              </Link>

              <div className="flex gap-5 text-secondary justify-center text-xl mt-5 flex-1">
                <FaFacebookSquare />
                <FaSquareInstagram />
                <FaSquareXTwitter />
                <FaSquareSnapchat />
              </div>
            </div>

            <ul className="flex items-center justify-center gap-5 flex-col mt-5 py-10 border-b flex-1">
              {navLinks.map((link, index) => {
                const isActive = useMenuActive(link.route);

                return (
                  <li key={index}>
                    <Route
                      route={link.route}
                      label={link.label}
                      isActive={isActive}
                      onClick={() =>
                        setIsOpen(false)
                      }
                    />
                  </li>
                );
              })}
            </ul>

            <div className="flex gap-5 flex-1 flex-col py-5">
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

          </div>
        </div>
      ) : null}
    </>
  )
}

export default MobileMenu
