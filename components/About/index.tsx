import Image from "next/image";
import React from "react";



type Props = {};

const About = (props: Props) => {
  return (
    <section className="flex h-screen w-screen justify-center align-center" >
      <article className="flex  flex-col w-1/4">
        <h3 className="font-bold text-3xl">About</h3>
        <p className="text-lg">
          Hi! My name is Julieta and I enjoy to create though code.
          <br></br> My journey into the world of
          coding began when I was just a child playing around with Scratch. It
          was a fun way to pass the time, seeing something I wrote come to life
          in my screen, but little did I know it would lead me down a path that
          would become my passion. <br></br> At 16, I started my career as a fashion
          model, where I developed excellent problem-solving skills and
          independence - two key traits that have helped me thrive as a
          developer. <br></br> Today, I`m a skilled full-stack developer who`s constantly
          motivated to improve my abilities and seek out opportunities to learn
          and grow. When I`m not knee-deep in code, you can find me painting
          watercolor portraits and listening to music.
        </p>
      </article>
      <div className="w-80 h-80 ">
      {/* <Image src={portrait}  alt="Portrait of myself" className=""></Image> */}
      </div>
    </section>
  );
};

export default About;
