import React from "react";
import { motion } from "framer-motion";
import Subtitle from "@/commons/Subtitle";
import SingleProject from "./SingleProject";

const Projects = () => {
  return (
    <>
      <Subtitle text="Projects" />
      <SingleProject></SingleProject>
    </>
  );
};

export default Projects;
