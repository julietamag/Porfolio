import Image from "next/image";
import React from "react";
import portrait from "../../public/assets/Profile/profile4.jpg";
import TechStack from "./TechStack";
import { motion } from "framer-motion";

type Props = {};

const About = (props: Props) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="h-screen bg-no-repeat"
    >
      <div className="flex mx-4 justify-center items-center">
        <motion.h3
          initial={{ x: -500, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            duration: 1,
          }}
          className="mr-4 font-bold text-3xl text-left"
        >
          About
        </motion.h3>
        <motion.div
          initial={{ x: 500, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            duration: 1,
          }}
          className=" border-b-2 w-2/5 border-slate-300"
        ></motion.div>
      </div>
      <div className="md:flex md:flex-row flex-col mx-4 justify-center  ">
        <motion.article
          initial={{ y: 12, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 1,
          }}
          className=" md:w-1/4  md:m-9"
        >
          <p className="text-md">
            Hi! My name is Julieta and I enjoy to create though code.
            <br></br> My journey into the world of coding began when I was just
            a child playing around with Scratch. It was a fun way to pass the
            time, seeing something I wrote come to life in my screen, but little
            did I know it would lead me down a path that would become my
            passion. <br></br> At 16, I started my career as a fashion model,
            where I developed excellent problem-solving skills and independence
            - two key traits that have helped me thrive as a developer.{" "}
            <br></br> Today, I`m a skilled full-stack developer who`s constantly
            motivated to improve my abilities and seek out opportunities to
            learn and grow. When I`m not knee-deep in code, you can find me
            painting watercolor portraits and listening to music.
          </p>
        </motion.article>
        <div className="md:w-80 md:h-80 w-60 h-60 bg-clip-border md:m-9 my-0 mx-auto">
          <motion.div
            initial={{ y: 500, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1,
            }}
            className="absolute m-3 md:w-80 md:h-80 w-60 h-60 outline outline-offset-2 outline-indigo-400"
          ></motion.div>
          <motion.div
            initial={{ x: 500, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              duration: 1,
            }}
            className="object-cover w-full h-full"
          >
            <Image
              src={portrait}
              alt="Portrait of myself"
              className="object-cover w-full h-full"
            />
          </motion.div>
        </div>
      </div>

      <TechStack />
    </motion.section>
  );
};

export default About;
