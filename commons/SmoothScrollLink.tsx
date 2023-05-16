import React, { ReactNode, useEffect, useState } from "react";
import { Link } from "react-scroll";

type Props = { to: string; children: ReactNode; onClick: () => void };

const SmoothScrollLink = (props: Props) => {
  const { to, children, onClick } = props;
  const [offset, setOfsset] = useState<number>(-150);

  useEffect(() => {
    if (window.innerWidth <= 600) {
      // Adjust the offset value for smaller screens
      setOfsset(-350);
    } else {
      // Default offset value for larger screens
      setOfsset(-150);
    }
  }, []);

  return (
    <Link
      to={to}
      smooth={true}
      duration={500}
      className="cursor-pointer link link--elara "
      offset={offset}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default SmoothScrollLink;
