import React, { useEffect } from "react";
import { motion } from "framer-motion";

type Props = {};

const Title = (props: Props) => {
  return (
    <>
      <div className="absolute lg:top-1/4 lg:left-1/4 z-10 top-12 left-12 select-none">
        <motion.h4
          initial={{ y: -15, opacity: 0 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{
            delay: 1,
            duration: 1,
          }}
          className="lg:text-2xl ml-4 font-bold text-slate-900  text-1xl "
        >
          Hi, I am
        </motion.h4>

        <motion.h1
          initial={{ y: -15, opacity: 0 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{
            delay: 1.2,
            duration: 1,
          }}
          className=" lg:text-7xl my-4 font-bold text-slate-950 text-5xl "
        >
          Julieta Magnago,
        </motion.h1>
        <motion.h2
          initial={{ y: -15, opacity: 0 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{
            delay: 1.4,
            duration: 1,
          }}
          className=" lg:text-5xl  font-bold text-slate-600 text-3xl"
        >
          Web Developer
        </motion.h2>
        <motion.h4
          initial={{ y: -15, opacity: 0 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{
            delay: 1.6,
            duration: 1,
          }}
          className="lg:text-1xl ml-1 my-4 font-bold text-slate-600  text-1xl "
        >
          with passion to create through code.
        </motion.h4>
      </div>
      <div className="absolute lg:top-3/4 lg:left-3/4 z-10 top-2/3 left-2/4  p-2  select-none invisible md:visible">
        <motion.h3
          initial={{ y: -15, opacity: 0 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{
            delay: 1.8,
            duration: 1,
          }}
          className="font-bold text-1xl  text-slate-900 "
        >
          psss you can draw here...
        </motion.h3>
      </div>
    </>
  );
};

export default Title;
