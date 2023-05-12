import React from "react";
import { motion } from "framer-motion";

type Props = { text: string};

const Subtitle = (props: Props) => {
  const { text } = props;
  return (
    <div className="flex mx-4 justify-center items-center my-5 " >
      <motion.h2
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          duration: 1,
        }}
        viewport={{ once: true }}
        className="mr-4 font-bold  lg:text-5xl text-4xl text-left"
      >
        {text}
      </motion.h2>
      <motion.span
        initial={{ x: 100, opacity: 0 }}
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
