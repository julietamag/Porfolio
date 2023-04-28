import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import logo from "../public/Logo/svg/IMG_5285.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between flex-wrap py-6 px-10 sticky top-0 z-20 text-white bg-white shadow-lg">
      <motion.div
      initial={{ y: -200, opacity: 0, scale: 0.5 }}
      animate={{y: 0,  opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
        }}
        className="flex items-center flex-shrink-0 mr-6 lg:mr-72 "
      >
        <Link href="/">
          <h1 className="font-extrabold text-indigo-900 text-4xl">JM</h1>
        </Link>
        ;
      </motion.div>

      <div className="block lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Open menu"
          className="flex items-center px-3 py-2 rounded text-white-500 hover:text-white-300"
        >
          <svg
            className={`fill-white h-3 w-3 ${isOpen ? "hidden" : "block"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
          <svg
            className={`h-3 w-3 fill-white ${isOpen ? "block" : "hidden"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
          </svg>
        </button>
      </div>
      <div
        className={`w-full lg:flex lg:items-right lg:justify-center lg:items-center lg:w-auto  ${
          isOpen ? " bg-indigo-950 p-3" : "hidden"
        }`}
      >
        <div className="text-base ">
          <motion.a
          initial={{ y: -140, opacity: 0, scale: 0.5 }}
          animate={{y: 0,  opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
            }}
            href="#"
            className="block mt-4 lg:inline-block lg:mt-0 lg:mr-11 text-indigo-800 mr-4 hover:text-slate-950 "
          >
            About
          </motion.a>
          <motion.a
          initial={{ y: -160, opacity: 0, scale: 0.5 }}
          animate={{y: 0,  opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
            }}
            href="#"
            className="block mt-4 lg:inline-block lg:mt-0 lg:mr-11 text-indigo-800 mr-4 hover:text-slate-950 "
          >
            Projects
          </motion.a>
          <motion.a
          initial={{ y: -180, opacity: 0, scale: 0.5 }}
          animate={{y: 0,  opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
            }}
            href="#"
            className="block mt-4 lg:inline-block lg:mt-0 lg:mr-11 text-indigo-800 mr-4 hover:text-slate-950"
          >
            Contact
          </motion.a>
        </div>
        <motion.div initial={{ y: -200, opacity: 0, scale: 0.5 }}
          animate={{y: 0,  opacity: 1, scale: 1 }}
            transition={{
              duration: 1.2,
            }}>
          <button
            className={`bg-transparent hover:bg-indigo-800 text-indigo-800 font-semibold hover:text-white py-1 px-4 border border-indigo-800 hover:border-transparent rounded ${
              isOpen && "mt-12 px-11 py-4"
            }`}
          >
            Resume
          </button>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
