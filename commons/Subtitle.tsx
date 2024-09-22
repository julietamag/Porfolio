import React from "react";
import { motion } from "framer-motion";

interface Props  { text: string};

const Subtitle = ({text}: Props) : JSX.Element => {
  return (
    <div className="flex mx-4 justify-center items-center" >
      <motion.h2
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          duration: 1,
        }}
        viewport={{ once: true }}
        className="mr-4 font-bold text-4xl text-left "
        style={{fontSize: '2.25rem', fontFamily: 'Syne'}}
      >
        {text}
      </motion.h2>
      <motion.span
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          duration: 1,
        }}
        viewport={{ once: true }}
        style={{ borderBottomWidth: 2, width: "40%", borderColor: "#CBD5E0" }}
      ></motion.span>
    </div>
  );
};

export default Subtitle;
