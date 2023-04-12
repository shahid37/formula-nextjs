import React, { FC, ReactNode, useEffect, useState } from "react";
import classNames from "classnames";

import Navbar from "../Navbar";

interface AppLayoutProps {
  showNaveLink?: boolean;
  notApplyBackgroundColor?: boolean;
  navLinkAction?: () => {} | void;
  children: ReactNode;
}

const AppLayout: FC<AppLayoutProps> = ({
  showNaveLink,
  notApplyBackgroundColor,
  navLinkAction,
  children,
}: AppLayoutProps) => {
  const [bottomBorder, setBottomBorder] = useState(false);

  useEffect(() => {
    const handleBorder = () => {
      if (window.scrollY >= 90) {
        setBottomBorder(true);
      } else {
        setBottomBorder(false);
      }
    };
    window.addEventListener("scroll", handleBorder);
  }, []);

  return (
    <div className={classNames(notApplyBackgroundColor ? "" :  "bg-[#FDF9F4]","w-full h-screen")}>
      <div
        className={classNames(
          bottomBorder
            ? "fixed border-b border-black z-[100] w-full flex justify-between items-center bg-off-white"
            : "fixed z-[100] w-full flex justify-between items-center bg-off-white"
        )}
      >
        <Navbar showLink={showNaveLink} linkAction={navLinkAction} />
      </div>
      {children}
    </div>
  );
};

export default AppLayout;
