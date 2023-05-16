import React from "react";
import { motion } from "framer-motion";
import { containerVariantsList, itemVariantsList } from "@/lib/motion";

type Props = {};

export default function TechStack({}: Props) {
  

  return (
    <>
      <motion.ul
        variants={containerVariantsList}
        initial="initial"
        whileInView="animate"
        viewport={{once: true}}
        className="md:flex md:justify-center md:items-center md:gap-3  md:my-2 md:text-base inline-flex text-center flex-wrap gap-3 max-w-screen  mt-2 mb-6 mx-8  text-sm"
      >
        <motion.li
          variants={itemVariantsList}
          className="hover:text-indigo-500 hover:animate-bounce md:min-w-fit"
        > 
          HTML
        </motion.li>
        <motion.li
          variants={itemVariantsList}
          className="hover:text-indigo-500 hover:animate-bounce md:min-w-fit"
        > 
          CSS
        </motion.li>
        <motion.li
          variants={itemVariantsList}
          className="hover:text-indigo-500 hover:animate-bounce md:min-w-fit"
        > 
          JavaScript
        </motion.li>
        <motion.li
          variants={itemVariantsList}
          className="hover:text-indigo-500 hover:animate-bounce md:min-w-fit"
        > 
          React
        </motion.li>
        <motion.li
          variants={itemVariantsList}
          className="hover:text-indigo-500 hover:animate-bounce md:min-w-fit"
        > 
          Redux
        </motion.li>
        <motion.li
          variants={itemVariantsList}
          className="hover:text-indigo-500 hover:animate-bounce md:min-w-fit"
        > 
          Node.js
        </motion.li>
        <motion.li
          variants={itemVariantsList}
          className="hover:text-indigo-500 hover:animate-bounce md:min-w-fit"
        > 
          SQL
        </motion.li>
        <motion.li
          variants={itemVariantsList}
          className="hover:text-indigo-500 hover:animate-bounce md:min-w-fit"
        > 
          Express
        </motion.li>
        <motion.li
          variants={itemVariantsList}
          className="hover:text-indigo-500 hover:animate-bounce md:min-w-fit"
        > 
          TypeScript
        </motion.li>
        <motion.li
          variants={itemVariantsList}
          className="hover:text-indigo-500 hover:animate-bounce md:min-w-fit"
        > 
          Next.js
        </motion.li>
        <motion.li
          variants={itemVariantsList}
          className="hover:text-indigo-500 hover:animate-bounce md:min-w-fit"
        > 
          Bootstrap
        </motion.li>
        <motion.li
          variants={itemVariantsList}
          className="hover:text-indigo-500 hover:animate-bounce md:min-w-fit"
        > 
          Tailwind
        </motion.li>
        <motion.li
          variants={itemVariantsList}
          className="hover:text-indigo-500 hover:animate-bounce md:min-w-fit"
        > 
          MaterialUI
        </motion.li>
      </motion.ul>
    </>
  );
}
