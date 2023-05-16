import React, { useEffect, useState } from "react";
import { GitHub, Instagram, LinkedIn } from "./svg";
import Link from "next/link";

type Props = {};

const Social = (props: Props) => {
  const [windowSize, setWindowSize] = useState<number>(0);

  useEffect(() => {
    if (window) {
      setWindowSize(window.innerWidth);
    }
  }, []);

  return (
    <>
      {windowSize > 1000 && (
          <div className="xl:fixed xl:bottom-0 xl:ml-5 xl:z-20 ">
        <ul className="flex lg:flex-col gap-4 items-center justify-center  ">
          <li>
            <Link href={"https://github.com/julietamag"} target="blank">
              <GitHub />
            </Link>
          </li>
          <li>
            <Link
              href={"https://www.linkedin.com/in/julieta-magnago/"}
              target="blank"
            >
              <LinkedIn />
            </Link>
          </li>
          <li>
            <Link href={"https://www.instagram.com/julimag__/"} target="blank">
              <Instagram />
            </Link>
          </li>
          <li className="border border-indigo-900 h-16"></li>
        </ul>
        </div>
      )}
      </>
  );
};

export default Social;
