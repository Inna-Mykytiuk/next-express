"use client"

import { useState, useEffect } from "react";
import Link from "next/link";
import Button from "../ui/Button";
import Route from "../ui/Route";
import MobileMenu from "./MobileMenu";
import { navLinks } from "@/constants";
import clsx from "clsx";
import useMenuActive from "@/hooks/useMenuActive";


const Navbar = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    };
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, []);

  return (
    <nav className={clsx(
      "py-4 w-full",
      isScrolling
        ? "fixed top-0 bg-white shadow-lg z-10"
        : "relative"
    )}>
      <div
        className={clsx(
          "w-[95%] mx-auto max-w-[1450px] flex  items-center justify-between  border-b border-gray-100",
          isScrolling && "pb-0 border-none",
          !isScrolling && "pb-5"
        )}>
        <div className="flex-1">
          <Link href={"/"}>
            <h1 className="text-3xl font-extrabold text-secondary">
              Explore
              <span className="text-primary">X</span>
            </h1>
          </Link>
        </div>

        <ul className="flex items-center justify-center gap-14 flex-2 max-md:hidden">
          {navLinks.map((link, index) => {
            const isActive = useMenuActive(link.route);

            return (
              <li key={index}>
                <Route
                  route={link.route}
                  label={link.label}
                  isActive={isActive}
                />
              </li>
            );
          })}
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


