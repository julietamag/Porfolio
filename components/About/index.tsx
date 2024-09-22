import React from "react";
import TechStack from "./TechStack";
import { motion } from "framer-motion";
import ProfileImage from "./ProfileImage";
import Subtitle from "@/commons/Subtitle";

type Props = {};

const About = ({}: Props) => {
  return (
    <>
      <Subtitle text="About" />

      <div className="md:flex md:flex-row flex-col mx-2 justify-center leading-relaxed">
        <motion.article
          initial={{ y: 12, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 1,
          }}
          viewport={{ once: true }}
          className=" xl:w-1/3 lg:m-9 m-4 gap-y-4 flex flex-col "
        >
          <p className="md:text-md text-base">
            Hello! My name is Julieta, and I love building things that come to
            life on the internet. My journey into web development started when I
            was a 9 year old kid tinkering with{" "}
            <a
              href={"https://scratch.mit.edu/"}
              target="blank"
              className="link link--leda  leading-5"
            >
              Scratch
            </a>{" "}
            — seeing the logic I had created come alive in the screen was like
            unlocking magic, and it sparked my love for code.{" "}
          </p>
          <p className="md:text-md text-base">
            Fast-forward to today, and I've had the pleasure of working in
            various roles, from beign a fashion modeling for great brands like
            Dior, Monclear and Diesel to becoming a skilled frontend engineer.
            Currently, I'm working at{" "}
            <a
              href="https://www.deliveryhero.com/"
              target="blank"
              className="link link--leda leading-5"
            >
              {" "}
              Delivery Hero
            </a>
            , where I help build modern, accesible and robust applications that
            thousands of curomer care agents use daily to assist our customers,
            riders, and vendors effortlessly.{" "}
          </p>
          <p className="md:text-md text-base">
            I'm passionate about creating seamless digital experiences and great
            products that make a difference.
          </p>
          <p className="md:text-md text-base">
            Here are some technologies I've been working with lately:
          </p>
          <TechStack />
        </motion.article>
        <div className="hidden sm:block">
          <ProfileImage />
        </div>
      </div>

      <span className="block sm:hidden">
        <ProfileImage />
      </span>
    </>
  );
};

export default About;
