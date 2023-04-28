import React, { PropsWithChildren } from "react";
import Navbar from "./Navbar";
import Head from "next/head";
const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Head>
        <title>Julieta Magnago | Web Developer</title>
        <meta name="description" content="Your description goes here"></meta>
        <meta name="author" content="Julieta Magnago"></meta>
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript, Web Developer, portfolio, developer, Software Developer, React, Node.js, Full-Stack, Frontend, Backend, TypeScript, Next.js, Redux"
        ></meta>
        <link rel="icon" href="../Logo/png/IMG_5285.PNG" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>
      <Navbar />
      {children}
    </>
  );
};
export default Layout;
