import Subtitle from "@/commons/Subtitle";
import React from "react";
import Form from "./Form";
import Social from "./Social";

type Props = {};

const Contact = (props: Props) => {
  return (
    <>
      <Subtitle text="Contact" />

      <Form />
      <Social />
    </>
  );
};

export default Contact;
