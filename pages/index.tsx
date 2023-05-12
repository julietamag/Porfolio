import About from "@/components/About";
import Canvas from "@/components/Header/Canvas";
import React from "react";
import Projects from "@/components/Projects";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="">
      <section className="h-screen  bg-contain">
      <Canvas />
      </section>
      <motion.section
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="lg:h-screen mb-20  md:mb-40 lg:mb-10  xl:mb-40 scroll-smooth scroll-my-28 "
      viewport={{ once: true }}
    >
      <About />
      </motion.section>
      <motion.section
      id="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className=" max-w-screen mt-96 md:mt-62 lg:mt-0 scroll-smooth scroll-my-28"
      viewport={{ once: true }}
    >
      <Projects />
      </motion.section>
    </div>
  );
};

export default Home;

