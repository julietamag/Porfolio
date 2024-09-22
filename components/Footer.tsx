import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="flex justify-center items-center lg:my-20 my-10 pb-5 ">
      <a
        href={"https://www.linkedin.com/in/julieta-magnago/"}
        target="blank"
        className="link link--leda  leading-5"
        style={{fontSize: '0.75rem'}}
      >
        Designed and built by Julieta Magnago
      </a>
    </footer>
  );
};

export default Footer;
