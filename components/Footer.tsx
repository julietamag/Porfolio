import Link from "next/link";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="flex justify-center items-center my-20 pb-5 ">
      <Link
        href={"https://www.linkedin.com/in/julieta-magnago/"}
        target="blank"
        className="link link--leda text-xs leading-5"
      >
        Designed and built by Julieta Magnago
      </Link>
    </footer>
  );
};

export default Footer;
