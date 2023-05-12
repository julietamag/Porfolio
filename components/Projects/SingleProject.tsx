import Image from "next/image";
import React, { useEffect, useState } from "react";
import imageTlgb from "../../public/assets/Projects/tlgb.png";
import { motion } from "framer-motion";
import { projectData } from "./data";
import Link from "next/link";

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
                  initial={{ x: 350, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
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
              <span className="inline-flex gap-5 py-3">
                {data.demo !== "" && (
                  <button>
                    <Link
                      href={data.demo}
                      target="blank"
                      className="hover:underline p-1 hover:text-indigo-500 "
                    >
                      LIVE
                    </Link>
                  </button>
                )}
                <Link
                  href={data.gitHub}
                  target="blank"
                  className="hover:underline p-1 hover:text-indigo-500 "
                >
                  <p>CODE</p>
                </Link>
              </span>
              <h4 className="text-3xl font-semibold lg:mb-6">{data.title}</h4>
              <p>{data.description}</p>

              <ul className="inline-flex flex-wrap gap-3 mt-10">
                {data.techStack.map((stack) => (
                  <li
                    key={stack}
                    className="rounded-2xl border p-1 hover:bg-indigo-500 hover:text-slate-100"
                  >
                    {stack}
                  </li>
                ))}
              </ul>
            </span>

            {/* RIGHT */}
            {windowSize > 900 && index % 2 !== 0 && (
              <div
                id="singleProjectImgContainer"
                className="lg:border-l-2  lg:p-10 p-2 my-6 lg:my-0"
              >
                <motion.div
                  initial={{ x: 350, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
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
                  initial={{ x: 100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
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
