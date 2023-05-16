import React, { PropsWithChildren } from "react";
import Navbar from "./Navbar";
import Head from "next/head";
import Social from "./Social";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Head>
        <title>Julieta Magnago | Web Developer</title>
        <meta
          name="description"
          content="Welcome to my Full Stack Developer Porfolio"
        ></meta>
        <meta name="author" content="Julieta Magnago"></meta>
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript, Web Developer, portfolio, developer, Software Developer, React, Node.js, Full-Stack, Frontend, Backend, TypeScript, Next.js, Redux"
        ></meta>

        <meta property="og:title" content="Julieta Magnago | Web Developer" />
        <meta
          property="og:description"
          content="Welcome to my Full Stack Developer Porfolio"
        />
        <meta
          property="og:image"
          content="https://julieta-magnago-dev-porfolio.vercel.app/assets/Meta/default.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta
          name="image"
          content="https://julieta-magnago-dev-porfolio.vercel.app/assets/Meta/default.png"
        />
        <meta
          name="twitter:card"
          content="https://julieta-magnago-dev-porfolio.vercel.app/assets/Meta/default.png"
        />

        <link rel="icon" href="../Logo/png/IMG_5285.PNG" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
        ></meta>
      </Head>
      <Navbar />
      <Social></Social>
      {children}
    </>
  );
};
export default Layout;
