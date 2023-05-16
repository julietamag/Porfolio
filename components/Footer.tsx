import Link from "next/link";
import React from "react";
import Social from "./Contact/Social";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="flex justify-center items-center lg:my-20 my-10 pb-5 ">
      <Link
        href={"https://www.linkedin.com/in/julieta-magnago/"}
        target="blank"
        className="link link--leda  leading-5"
        style={{fontSize: '0.75rem'}}
      >
        Designed and built by Julieta Magnago
      </Link>
    </footer>
  );
};

export default Footer;
