import React from "react";

import Subtitle from "@/commons/Subtitle";
import Link from "next/link";
import { workExperience } from "./data";
import { motion } from "framer-motion";

type Props = {};

const Experience = ({}: Props) => {
  return (
    <>
      <Subtitle text="Experience" />
      <div className="lg:mx-34 xl:mx-56 my-10">
        {workExperience.map((exp) => (
          <div className="px-10 flex flex-col  m-4  leading-relaxed border-l-2 gap-4">
            <div className="flex flex-col px-2 py-2 gap-2">
              {/* TITLE */}
              <motion.h3
                initial={{ y: 12, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.8,
                }}
                viewport={{ once: true }}
                className="text-2xl font-semibold"
              >
                {exp.title}
                <Link
                  href="https://www.deliveryhero.com/"
                  target="blank"
                  className=" link link--leda  leading-5"
                >
                  {" "}
                  @{exp.company}
                </Link>
              </motion.h3>
              {/* SUBTITLE */}
              <motion.p
                initial={{ y: 12, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.8,
                }}
                viewport={{ once: true }}
                className="font-mono  text-sm"
              >
                {exp.date}
              </motion.p>
            </div>
            {/* DESCRIPTION */}
            <div className="flex flex-col text-sm gap-2 ">
              {exp.description.map((desc) => (
                <motion.div    initial={{ y: 12, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 1,
                }}
                viewport={{ once: true }} className="flex">
                  <span className="text-indigo-800 pr-4">{`\u2023`}</span>
                  <p>{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Experience;
