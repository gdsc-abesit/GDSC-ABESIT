import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaGithub,
} from "react-icons/fa";
import Link from "next/link";
import React from "react";


export default function Footer() {
  return (
    <div className="relative bottom-0 mt-16 bg-white dark:bg-neutral-900">
      <svg
        className="absolute top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16 text-white dark:text-neutral-900"
        preserveAspectRatio="none"
        viewBox="0 0 1440 54"
      >
        <path
          fill="currentColor"
          d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
        />
      </svg>
      <div className="px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 text-gray-700 dark:text-gray-100">
        <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
          <div className="md:max-w-md lg:col-span-2">
            <Link
              href="/"
              aria-label="Go home"
              title="GDSC Logo"
              className="inline-flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 130 60"
                fill="transparent"
                strokeWidth="1"
                className="flex content-center justify-center pb-0 h-4"
              >
                <path
                  d="M29.3999 29.9L49.0999 18.5C53.6999 15.8 55.2999 9.89999 52.5999 5.29999C49.8999 0.699987 43.9999 -0.900013 39.3999 1.79999L5.3999 21.4L29.3999 29.9Z"
                  fill="#EA4335"
                />
                <path
                  d="M44.1999 59.1C47.4999 59.1 50.7999 57.4 52.5999 54.3C55.2999 49.7 53.6999 43.8 49.0999 41.1L15.0999 21.5C10.4999 18.8 4.59987 20.4 1.89987 25C-0.800129 29.6 0.799871 35.5 5.39987 38.2L39.3999 57.8C40.8999 58.7 42.5999 59.1 44.1999 59.1Z"
                  fill="#4285F4"
                />
                <path
                  d="M78.0001 59.1C79.6001 59.1 81.3001 58.7 82.8001 57.8L116.8 38.2L93.1001 29.5L73.1001 41C68.5001 43.7 66.9001 49.6 69.6001 54.2C71.4001 57.4 74.7001 59.1 78.0001 59.1Z"
                  fill="#FBBC04"
                />
                <path
                  d="M112 39.5C115.3 39.5 118.6 37.8 120.4 34.7C123.1 30.1 121.5 24.2 116.9 21.5L82.9002 1.89999C78.3002 -0.800014 72.4002 0.800016 69.7002 5.40002C67.0002 10 68.6002 15.9 73.2002 18.6L107.2 38.2C108.7 39.1 110.4 39.5 112 39.5Z"
                  fill="#34A853"
                />
              </svg>
              <span className="ml-2 text-xl font-bold tracking-wide dark:text-gray-100 uppercase">
                GDSC ABESIT
              </span>
            </Link>
            <div className="mt-4 lg:max-w-sm">
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Student driven community to learn and explore everything Google... and beyond!
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
          <div>
            <p className="font-semibold tracking-wide text-red-400 relative group max-w-fit"><span>About Us</span>
            <span className="absolute -bottom-1 left-0 w-0 h-1 bg-red-500 transition-all group-hover:w-full"></span>
            </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <Link
                    href="/"
                    className="transition-colors duration-300 hover:text-red-300"
                  >
                    Meet the Team
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="transition-colors duration-300 hover:text-red-300"
                  >
                   Contributors
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="transition-colors duration-300 hover:text-red-300"
                  >
                    Our Sponsers
                  </Link>
                </li>
              </ul>
            </div>
            <div>
            <p className="font-semibold tracking-wide text-red-400 relative group max-w-fit"><span>Useful Links</span>
            <span className="absolute -bottom-1 left-0 w-0 h-1 bg-red-500 transition-all group-hover:w-full"></span></p>
              <ul className="mt-2 space-y-2">
                <li>
                  <Link
                    href="/"
                    className="transition-colors duration-300 hover:text-red-300"
                  >
                    Past Events
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="transition-colors duration-300 hover:text-red-300"
                  >
                    Upcoming Events
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="transition-colors duration-300 hover:text-red-300"
                  >
                   Sitemap
                  </Link>
                </li>
              </ul>
            </div>
            

            <div>
            <p className="font-semibold tracking-wide text-red-400 relative group max-w-fit"><span>Extras</span>
            <span className="absolute -bottom-1 left-0 w-0 h-1 bg-red-500 transition-all group-hover:w-full"></span></p>
              <ul className="mt-2 space-y-2">
                <li>
                  <Link
                    href="/"
                    className="transition-colors duration-300 hover:text-red-300"
                  >
                   GDG Noida
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="transition-colors duration-300 hover:text-red-300"
                  >
                    Community Guidelines
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="transition-colors duration-300 hover:text-red-300"
                  >
                    Mail Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between pt-5 pb-10 border-t border-red-400 sm:flex-row">
          <p className="text-sm text-gray-700 dark:text-gray-100">
            © Copyright 2023 GDSC ABES Institute of Technology
          </p>
          <div className="flex items-center mt-4 space-x-4 sm:mt-0">
            <Link
              href="#"
              className="transition hover:scale-105 hover:text-blue-500"
            >
              <FaFacebook />
            </Link>
            <Link
              href="https://instagram.com/gdscabesit"
              className="transition hover:scale-105 hover:text-purple-500"
            >
              <FaInstagram />
            </Link>
            <Link
              href="https://x.com/gdscabesit"
              className="transition hover:scale-105 hover:text-blue-400"
            >
              <FaTwitter />
            </Link>
            <Link
              href="https://www.linkedin.com/company/dscabesit/mycompany/"
              className="transition hover:scale-105 hover:text-blue-700"
            >
              <FaLinkedinIn />
            </Link>
            <Link
              href="#"
              className="transition hover:scale-105 hover:text-red-500"
            >
              <FaYoutube />
            </Link>
            <Link
              href="https://github.com/gdsc-abesit"
              className="transition hover:scale-105 hover:text-gray-500"
            >
              <FaGithub />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
