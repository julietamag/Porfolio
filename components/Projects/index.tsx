import React from "react";
import { motion } from "framer-motion";
import Subtitle from "@/commons/Subtitle";
import SingleProject from "./SingleProject";

const Projects = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className=" max-w-screen mt-96 md:mt-62 lg:mt-0"
      viewport={{ once: true }}
    >
     <Subtitle text="Projects"/>
      <SingleProject></SingleProject>
    </motion.section>
  );
};

export default Projects;
