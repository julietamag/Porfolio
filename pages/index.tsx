import About from "@/components/About";
import Canvas from "@/components/Header/Canvas";
import React from "react";
import svg from '../public/assets/svg/layered-waves-haikei (1).svg'
import Projects from "@/components/Projects";

const Home = () => {
  return (
    <div>
      <section className="h-screen  bg-contain">
      <Canvas />
      </section>
      <About />
      <Projects />
    </div>
  );
};

export default Home;

