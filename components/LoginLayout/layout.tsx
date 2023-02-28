import Image from "next/image";
import React, { FC, ReactNode } from "react";

import SideImage from "../../public/assets/login/sideImage.png";

interface LayoutProps {
  children: ReactNode;
  heading: string;
}

const Layout: FC<LayoutProps> = ({ children, heading }: LayoutProps) => {
  return (
    <div className="flex h-screen w-full bg-white">
      <div className="grid xs:grid-cols-1 md:grid-cols-2 gap-1">
        <div className="xs:pt-32 xs:px-4 md:py-44 md:px-[120px]  ">
          <h4>{heading}</h4>
          {children}
        </div>
        <div className="hidden md:flex">
          <div className="relative h-full w-[864px]">
            <Image src={SideImage} alt="side image" fill />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
