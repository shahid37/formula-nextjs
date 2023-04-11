import classNames from "classnames";
import React, { FC } from "react";

import Button from "../Button";

import Logo from "./images/Logo";

interface NavbarProps {
  showLink?: boolean;
  linkAction?: () => {} | void;
}

const Navbar: FC<NavbarProps> = ({ showLink, linkAction }: NavbarProps) => {
  const commonClassNames =
    "flex justify-between items-center bg-off-white py-4 xs:px-4 md:px-[120px]";
  return (
    <div className="w-full">
      <nav className={classNames(commonClassNames)}>
        <Logo />
        <div className="flex">
          {showLink && (
            <Button onClick={linkAction} type="link">
              Create my formula
            </Button>
          )}
        </div>
      </nav>
    </div>
  );
};

Navbar.defaultProps = {
  showLink: true,
};
export default Navbar;
