import React from "react";
import { motion } from "framer-motion";
import { containerVariantsList, itemVariantsList } from "@/lib/motion";
import { techStack } from "./data";

type Props = {};

export default function TechStack({}: Props) {
  // Calculate the midpoint to split the array
  const midpoint = Math.ceil(techStack.length / 2);
  const firstColumn = techStack.slice(0, midpoint);
  const secondColumn = techStack.slice(midpoint);

  return (
    <div className="flex flex-wrap font-mono mx-4 text-xs lg:w-11/12 md:w-1/2 sm:w-11/12">
      <div className="w-1/2">
        <motion.ul
          variants={containerVariantsList}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className=" flex-wrap gap-3"
        >
          {firstColumn.map((tech, index) => (
            <motion.li
              key={index}
              variants={itemVariantsList}
              className="hover:text-indigo-500 my-1"
            >
              <span className="text-indigo-800">{`\u2023`}</span> {tech}
            </motion.li>
          ))}
        </motion.ul>
      </div>
      <div className="w-1/2 ">
        <motion.ul
          variants={containerVariantsList}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="flex-wrap gap-3 "
        >
          {secondColumn.map((tech, index) => (
            <motion.li
              key={index}
              variants={itemVariantsList}
              className="hover:text-indigo-500 my-1"
            >
              <span className="text-indigo-800">{`\u2023`}</span> {tech}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
}
