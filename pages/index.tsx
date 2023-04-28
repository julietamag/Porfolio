import About from "@/components/About";
import Canvas from "@/components/Header/Canvas";
import React from "react";

const Home = () => {
  return (
    <div>
      <section className="h-screen">
      <Canvas />
      </section>
      <About />
    </div>
  );
};

export default Home;
