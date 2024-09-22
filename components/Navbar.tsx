import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import SmoothScrollLink from "@/commons/SmoothScrollLink";
import { randomUUID } from "crypto";

interface Sections {
  reference: string;
  title: string;
}

const sections: Sections[] = [
  { title: "About", reference: "about" },
  { title: "Experience", reference: "experience" },
  { title: "Projects", reference: "projects" },
  { title: "Contact", reference: "contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between flex-wrap py-4 md:py-6 px-10 sticky top-0 z-20 text-white bg-white shadow-lg">
      <motion.div
        initial={{ y: -200, opacity: 0, scale: 0.5 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
        }}
        className="flex items-center flex-shrink-0 mr-6 lg:mr-72 "
      >
        <Link href="/">
          <h1 className="font-extrabold text-indigo-800 text-3xl md:text-4xl">
            JM
          </h1>
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
            className={`fill-indigo-800 h-3 w-3 ${isOpen ? "hidden" : "block"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
          <svg
            className={`h-3 w-3 fill-indigo-800 ${isOpen ? "block" : "hidden"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
          </svg>
        </button>
      </div>
      <div
        className={`w-full lg:flex lg:items-right lg:justify-center lg:items-center lg:w-auto  ${
          isOpen ? " bg-white p-3" : "hidden"
        }`}
      >
        <div className="text-base ">
          {sections.map((section) => (
            <motion.p
              initial={{ y: -140, opacity: 0, scale: 0.5 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{
                duration: 1,
              }}
              key={randomUUID()}
              className="block mt-4 lg:inline-block lg:mt-0 lg:mr-11 text-indigo-800 mr-4 hover:text-slate-950 scroll-smooth"
            >
              <SmoothScrollLink
                to={section.reference}
                onClick={() => setIsOpen(false)}
              >
                {section.title}
              </SmoothScrollLink>
            </motion.p>
          ))}
        </div>
        <motion.a
          initial={{ y: -200, opacity: 0, scale: 0.5 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{
            duration: 1.2,
          }}
          href="/assets/cv/Julieta Magnago Resume.pdf"
          target="_blank"
          type="application/pdf"
          rel="alternate"
        >
          <button
            className={`bg-transparent  hvr-sweep-to-right text-indigo-800 font-semibold hover:text-white py-1 px-4 border border-indigo-800  active:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-300  ${
              isOpen && "mt-10 px-11 py-2"
            }`}
          >
            Resume
          </button>
        </motion.a>
      </div>
    </nav>
  );
};

export default Navbar;
