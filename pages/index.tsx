import About from "@/components/About";
import Canvas from "@/components/Header/Canvas";
import React from "react";
import Projects from "@/components/Projects";
import { motion } from "framer-motion";
import Contact from "@/components/Contact";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer";
import Experience from "@/components/Work";

const Home = () => {
  return (
    <div className="">
      <Toaster position="top-center" reverseOrder={false} />
      <section className="h-screen bg-contain ">
        <Canvas />
      </section>
      <motion.section
        id="about"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className=" scroll-smooth scroll-my-28"
        viewport={{ once: true }}
      >
        <About />
      </motion.section>
      <motion.section
        id="experience"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className=" max-w-screen mt-44 md:mt-62 lg:mt-48 scroll-smooth scroll-my-28"
        viewport={{ once: true }}
      >
        <Experience />
      </motion.section>
      <motion.section
        id="projects"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className=" max-w-screen mt-44 md:mt-62 lg:mt-48 scroll-smooth scroll-my-28"
        viewport={{ once: true }}
      >
        <Projects />
      </motion.section>

      <motion.section
        id="contact"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="w-screen mt-44 md:mt-62 lg:mt-48 scroll-smooth scroll-my-28"
        viewport={{ once: true }}
      >
        <Contact />
      </motion.section>

      <motion.div>
        <Footer />
      </motion.div>
    </div>
  );
};

export default Home;
