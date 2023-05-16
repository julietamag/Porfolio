import Pencil from "@/public/assets/svg/Pencil";

import React, { useState } from "react";
import { CompactPicker } from "react-color";
import { motion } from "framer-motion";
import Trash from "@/public/assets/svg/Trash";

type Props = {
  color: string;
  setColor: React.Dispatch<React.SetStateAction<string>>;
  clear: () => void;
};

const Tools = (props: Props) => {
  const { color, setColor, clear } = props;
  const [open, setOpen] = useState<boolean>(false);
  return (
    <motion.div
      initial={{ x: 15, opacity: 0 }}
      animate={{ x: 0, opacity: 1, scale: 1 }}
      transition={{
        delay: 2,
        duration: 1,
      }}
      className="invisible md:visible"
    >
      <div className="flex items-center justify-end  gap-x-9 m-9 h-12">
        {open && (
          <CompactPicker
            color={color}
            onChange={(e: { hex: React.SetStateAction<string> }) =>
              setColor(e.hex)
            }
          />
        )}
        <button
          className="rounded-full w-10 h-10 flex justify-center items-center hover:outline hover:outline-offset-2 hover:outline-slate-200 "
          style={{ backgroundColor: `${color}` }}
          onClick={() => setOpen(open ? false : true)}
          title="Choose color"
        >
          <Pencil />
        </button>
        <button
          type="button"
          className="p-2 rounded-lg border border-slate-950 flex items-center justify-center text-slate-950 hover:text-red-500 hover:border-red-500"
          onClick={clear}
          aria-label="Clear canvas"
          title="Clear canvas"
        >
          <svg
            xmlns="http://www.w3.org/2000/svghttp://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </motion.div>
  );
};

export default Tools;
