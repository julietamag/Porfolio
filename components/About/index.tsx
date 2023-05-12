import React from "react";
import TechStack from "./TechStack";
import { motion } from "framer-motion";
import ProfileImage from "./ProfileImage";
import Subtitle from "@/commons/Subtitle";

type Props = {};

const About = (props: Props) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="h-screen mb-96 md:mb-40 lg:mb-20 xl:mb-0 "
      viewport={{ once: true }}
    >
      <Subtitle text="About" />
      <div className="lg:flex lg:flex-row flex-col mx-4 justify-center  ">
        <motion.article
          initial={{ y: 12, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 1,
          }}
          viewport={{ once: true }}
          className=" xl:w-1/4  lg:m-9 m-4"
        >
          <p className="text-lg">
            Hi! My name is Julieta and I enjoy to create though code.
            <br></br> My journey into the world of coding began when I was just
            a child playing around with Scratch. It was a fun way to pass the
            time, seeing something I wrote come to life in my screen, but little
            did I know it would lead me down a path that would become my
            passion. <br></br> At 16, I started my career as a fashion model,
            where I developed a fierce perseverance and independence - two key
            traits that have helped me thrive as a developer. <br></br> Today,
            I`m a skilled full-stack developer who`s constantly motivated to
            improve my abilities and seek out opportunities to learn and grow.{" "}
            <br></br> Little fun fact, when I`m not knee-deep in code, you can
            find me painting watercolor portraits and listening to music.
          </p>
        </motion.article>
        <span className="hidden lg:block">
          <ProfileImage />
        </span>
      </div>

      <TechStack />
      <span className="block lg:hidden">
        <ProfileImage />
      </span>
    </motion.section>
  );
};

export default About;
