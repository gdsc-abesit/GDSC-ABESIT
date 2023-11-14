import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gdsclogo from "../assets/GDSC Logo Long.png";
import ThemeButton from "./ThemeButton";

const Navbar = () => {
  // useState hook to toggle the menu button
  const [isOpen, setIsOpen] = useState(false);

  // function to toggle the menu button
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>      <nav className="sticky bg-white dark:bg-neutral-900 top-0 w-full left-0 z-40 backdrop-blur-md bg-opacity-80 text-gray-600 dark:text-gray-100">
        <div className="container max-w-full px-4 md:px-8">
          <div className="flex items-center py-1 h-14 sm:h-20">
            <Link href="/" class="transform scale-75 ">
              <div className="flex items-center">
                <Image
                  src={gdsclogo}
                  alt="logo"
                  width={630}
                  className="left-0"
                />
              </div>
            </Link>

            {/* Menu button for mobile devices */}
            <div className="md:hidden">
              <button
                className="mobile-menu-button transform hover:scale-105 focus:outline-none"
                onClick={toggleMenu}
                aria-label="Toggle Menu"
              >
                {isOpen ? (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>

            {/* Menu items */}
            <ul className="md:flex md:items-center md:gap-8 mx-2 font-light text-sm md:text-xl md:ml-4 hidden">
              <li className="button hover:scale-105 transition hover:border hover:border-red-400 rounded-full py-1 px-2 font-normal">
                <Link href="/events/">Events</Link>
              </li>
              <li className="button hover:scale-105 transition hover:border hover:border-red-400 rounded-full py-1 px-2 font-normal">
                <Link href="/mentors">Our Mentors</Link>
              </li>
              <li className="button hover:scale-105 transition hover:border hover:border-red-400 rounded-full py-1 px-2 font-normal">
                <Link href="/team">Team</Link>
              </li>
              <li className="button hover:scale-105 transition hover:border hover:border-red-400 rounded-full py-1 px-2 font-normal">
                <Link href="/Contributors">Contributors</Link>
              </li>
             
            </ul>

            {/* mobile menu items */}
            <ul
              className={`${isOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
                } absolute top-full text-left left-0 right-0 md:hidden transition-all duration-300 transform origin-top ease-in-out bg-white bg-opacity-90`}
            >
              <li className="border-y-2 pl-10 py-2">
                <Link href="/">Mentors</Link>
              </li>
              <li className="border-b-2 pl-10 py-2">
                <Link href="/events/">Event</Link>
              </li>
              <li className="border-b-2 pl-10 py-2">
                <Link href="/mentors">Mentors</Link>
              </li>
              <li className="border-b-2 pl-10 py-2">
                <Link href="/team">Team</Link>
              </li>
              <li className="border-b-2 pl-10 py-2">
                <Link href="/Contributors">Contributors</Link>
              </li>
            </ul>
            <ThemeButton />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;