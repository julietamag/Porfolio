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
    >
      <div className="flex items-center justify-end  gap-x-9 m-9  h-12">
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
          <Trash />
        </button>
      </div>
    </motion.div>
  );
};

export default Tools;
