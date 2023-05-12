import React, { ReactNode } from 'react';
import { Link } from "react-scroll";

type Props = { to: string, children: ReactNode };

const SmoothScrollLink = (props: Props) => {
  const { to, children } = props;
  return (
    <Link
      to={to}
      smooth={true}
      duration={500}
      className="cursor-pointer "
      offset={-100}
  
    >
         {children}
    </Link>
  );
};

export default SmoothScrollLink;
