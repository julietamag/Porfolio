import React from 'react'
import portrait from "../../public/assets/Profile/profile4.jpg";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {}

const ProfileImage = (props: Props) => {
  return (
    <div className="lg:w-80 lg:h-80 w-60 h-60 bg-clip-border lg:m-9 my-0 mx-auto">
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{once: true}}
            transition={{
              duration: 1,
            }}
            className="absolute m-3 lg:w-80 lg:h-80 w-60 h-60 outline outline-offset-2 outline-indigo-400"
          ></motion.div>
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{once: true}}
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
  )
}

export default ProfileImage