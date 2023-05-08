import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function TechStack({}: Props) {
  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.08,
        duration: 1,
      },
    },
  };

  const itemVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <>
      <motion.div
        variants={containerVariants}
        initial="initial"
        whileInView="animate"
        className="flex justify-center items-center gap-3"
      >
        <motion.p
          variants={itemVariants}
          className="hover:text-indigo-500 hover:animate-bounce"
        >
          HTML
        </motion.p>
        <motion.p
          variants={itemVariants}
          className="hover:text-indigo-500 hover:animate-bounce"
        >
          CSS
        </motion.p>
        <motion.p
          variants={itemVariants}
          className="hover:text-indigo-500 hover:animate-bounce"
        >
          JavaScript
        </motion.p>
        <motion.p
          variants={itemVariants}
          className="hover:text-indigo-500 hover:animate-bounce"
        >
          React
        </motion.p>
        <motion.p
          variants={itemVariants}
          className="hover:text-indigo-500 hover:animate-bounce"
        >
          Redux
        </motion.p>
        <motion.p
          variants={itemVariants}
          className="hover:text-indigo-500 hover:animate-bounce"
        >
          Node.js
        </motion.p>
        <motion.p
          variants={itemVariants}
          className="hover:text-indigo-500 hover:animate-bounce"
        >
          SQL
        </motion.p>
        <motion.p
          variants={itemVariants}
          className="hover:text-indigo-500 hover:animate-bounce"
        >
          Express
        </motion.p>
        <motion.p
          variants={itemVariants}
          className="hover:text-indigo-500 hover:animate-bounce"
        >
          TypeScript
        </motion.p>
        <motion.p
          variants={itemVariants}
          className="hover:text-indigo-500 hover:animate-bounce"
        >
          Next.js
        </motion.p>
        <motion.p
          variants={itemVariants}
          className="hover:text-indigo-500 hover:animate-bounce"
        >
          Bootstrap
        </motion.p>
        <motion.p
          variants={itemVariants}
          className="hover:text-indigo-500 hover:animate-bounce"
        >
          Tailwind
        </motion.p>
        <motion.p
          variants={itemVariants}
          className="hover:text-indigo-500 hover:animate-bounce"
        >
          MaterialUI
        </motion.p>
      </motion.div>
    </>
  );
}
