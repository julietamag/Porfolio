import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { projectData } from "./data";
import Link from "next/link";
import {
  containerVariantsList,
  itemVariantsList,
  projectContainerVariants,
  projectItemVariants,
} from "@/lib/motion";

type Props = {};
type WindowSize = number;

const SingleProject = (props: Props) => {
  const [windowSize, setWindowSize] = useState<WindowSize>(0);

  useEffect(() => {
    if (window) {
      setWindowSize(window.innerWidth);
    }
  }, []);

  return (
    <section className="  mx-4  lg:m-9 m-4 flex flex-col  items-center justify-between ">
      {projectData.map((data, index) => (
        <ul
          key={data.title}
          className={
            index === projectData.length - 1
              ? "lg:border-x-2 lg:rounded border-y-2 w-screen xl:w-2/3  flex items-center lg:justify-between justify-center "
              : "lg:border-x-2 lg:rounded border-t-2 w-screen xl:w-2/3  flex items-center lg:justify-between justify-center "
          }
        >
          <li className="lg:inline-flex lg:flex-row flex flex-col items-center lg:justify-between">
            {/* LEFT */}
            {windowSize > 900 && index % 2 === 0 && (
              <div
                id="singleProjectImgContainer"
                className="lg:border-r-2  lg:p-10 p-2 my-6 lg:my-0"
              >
                <motion.div
                  initial={{ y: 150, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1,
                  }}
                  className="object-cover w-full h-full mx-auto my-0 "
                >
                  <Image
                    src={data.image}
                    alt="Portrait of myself"
                    className="object-cover w-full h-full"
                  />
                </motion.div>
              </div>
            )}

            <span className="lg:w-2/4 flex-column lg:justify-between justify-center items-center  lg:p-6 p-4">
              <motion.span
                variants={projectContainerVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="inline-flex gap-5 py-3"
              >
                {data.demo !== "" && (
                  <motion.button variants={projectItemVariants}>
                    <Link
                      href={data.demo}
                      target="blank"
                      className=" p-1 hover:text-indigo-500 link link--leda "
                      aria-label="Go to live project demo"
                    >
                      LIVE
                    </Link>
                  </motion.button>
                )}
                <motion.button variants={itemVariantsList}>
                  <Link
                    href={data.gitHub}
                    target="blank"
                    className=" p-1 hover:text-indigo-500 link link--leda"
                    aria-label="Go to GitHub Repo"
                  >
                    CODE
                  </Link>
                </motion.button>
              </motion.span>
              <motion.h4
                initial={{ y: 12, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.8,
                }}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl font-semibold mb-2 lg:mb-6"
              >
                {data.title}
              </motion.h4>
              <motion.p
                initial={{ y: 12, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.8,
                }}
                viewport={{ once: true }}
              >
                {data.description}
              </motion.p>

              <motion.ul
                variants={containerVariantsList}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="inline-flex flex-wrap gap-3 mt-10"
              >
                {data.techStack.map((stack) => (
                  <motion.li
                    variants={itemVariantsList}
                    key={stack}
                    className="rounded-2xl border p-1 hover:bg-indigo-800 hover:text-slate-100"
                  >
                    {stack}
                  </motion.li>
                ))}
              </motion.ul>
            </span>

            {/* RIGHT */}
            {windowSize > 900 && index % 2 !== 0 && (
              <div
                id="singleProjectImgContainer"
                className="lg:border-l-2  lg:p-10 p-2 my-6 lg:my-0"
              >
                <motion.div
                  initial={{ y: 150, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1,
                  }}
                  className="object-cover w-full h-full mx-auto my-0  "
                >
                  <Image
                    src={data.image}
                    alt="Portrait of myself"
                    className="object-cover w-full h-full"
                  />
                </motion.div>
              </div>
            )}

            {/* SMALLER SCREENS */}
            {windowSize < 900 && (
              <div
                id="singleProjectImgContainer"
                className="lg:border-l-2  lg:p-10 p-2 my-6 lg:my-0"
              >
                <motion.div
                  initial={{ y: -50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1,
                  }}
                  className="object-cover w-full h-full mx-auto my-0  "
                >
                  <Image
                    src={data.image}
                    alt="Portrait of myself"
                    className="object-cover w-full h-full"
                  />
                </motion.div>
              </div>
            )}
          </li>
        </ul>
      ))}
    </section>
  );
};

export default SingleProject;
