import Link from "next/link";
import React, { ReactNode } from "react";

interface linkProps {
  children: ReactNode;
  to : string;
  styles ?: string;
}

const CustomLink: React.FC<linkProps> = ({ children , to , styles }) => {
  return (
    <Link href={to} className={`cursor-pointer ${styles}`}>
      {children}
    </Link>
  );
};

export default CustomLink;
