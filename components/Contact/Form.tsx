import { sendContactForm } from "@/lib/api";
import React, { useRef } from "react";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";
import { formContainer, formItem } from "@/lib/motion";
import DOMPurify from "dompurify";
import * as z from "zod";

type Props = {};

const Form: React.FC<Props> = (props) => {
  const nameRef = useRef<HTMLInputElement>(null);
  const lastnameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const schema = z.object({
    name: z.string().min(1, "Name is required").max(50, "Too long"),
    lastname: z.string().min(1, "Last name is required").max(50, "Too long"),
    email: z.string().email("Invalid email format"),
    message: z.string().min(1, "Message is required").max(500, "Too long"),
  });

  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    let values = {
      name: DOMPurify.sanitize(nameRef.current?.value || ""),
      lastname: DOMPurify.sanitize(lastnameRef.current?.value || ""),
      email: DOMPurify.sanitize(emailRef.current?.value || ""),
      message: DOMPurify.sanitize(messageRef.current?.value || ""),
    };

    const validation = schema.safeParse(values);
    if (!validation.success) {
      toast.error(validation.error.errors[0].message);
      return;
    }

    try {
      await sendContactForm(values);
      toast.success("Message sent successfully!");
      if (nameRef.current) nameRef.current.value = "";
      if (lastnameRef.current) lastnameRef.current.value = "";
      if (emailRef.current) emailRef.current.value = "";
      if (messageRef.current) messageRef.current.value = "";
    } catch (error) {
      toast.error("Sorry, something went wrong!");
    }
  };

  return (
    <motion.form
      variants={formContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="h-full flex flex-col justify-start items-center gap-4 w-100 my-10"
    >
      <div className="inline-flex justify-start items-center  lg:w-6/12 md:w-8/12 w-9/12 mb-3">
        <motion.h5
          initial={{ y: -40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
          }}
          viewport={{ once: true }}
          className=" font-bold lg:text-3xl text-2xl  "
        >
          Don&apos;t be a stranger, reach out!
        </motion.h5>
      </div>

      <div className="inline-flex gap-2 lg:w-6/12 md:w-8/12 w-9/12 justify-center">
        <motion.input
          variants={formItem}
          ref={nameRef}
          type="text"
          placeholder="Name *"
          required
          className="border px-3 py-2 w-full focus:border-indigo-800"
        ></motion.input>
        <motion.input
          variants={formItem}
          ref={lastnameRef}
          type="text"
          placeholder="Last Name *"
          required
          className="border px-3 py-2 w-full focus:border-indigo-800"
        ></motion.input>
      </div>

      <motion.input
        variants={formItem}
        ref={emailRef}
        type="email"
        placeholder="Email *"
        required
        className="border px-3 py-2 lg:w-6/12 md:w-8/12 w-9/12 focus:border-indigo-800"
      ></motion.input>
      <motion.textarea
        variants={formItem}
        ref={messageRef}
        placeholder="Message *"
        required
        className="border px-2 pb-32 lg:w-6/12 md:w-8/12 w-9/12 break-words focus:border-indigo-800 "
      ></motion.textarea>

      <div className="lg:w-6/12 md:w-8/12 w-9/12 inline-flex justify-end">
        <motion.button
          variants={formItem}
          type="submit"
          onClick={(e) => {
            handleSubmit(e);
          }}
          className="border border-slate-500 px-12 py-5  hvr-sweep-to-right   active:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-300 "
        >
          Send!
        </motion.button>
      </div>
    </motion.form>
  );
};

export default Form;
