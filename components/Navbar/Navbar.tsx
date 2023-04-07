import classNames from "classnames";
import React, { FC, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

import Button from "../Button";

import Logo from "./images/Logo";

interface NavbarProps {
  showLink?: boolean;
  linkAction?: () => {} | void;
}

const Navbar: FC<NavbarProps> = ({ showLink, linkAction }: NavbarProps) => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  const commonClassNames =
    "flex justify-between items-center bg-off-white py-4 xs:px-2 md:px-[120px]";
  return (
    <div className="w-full">
      <nav className={classNames(commonClassNames)}>
        <Logo />
        <div className="hidden md:flex">
          {showLink && (
            <Button onClick={linkAction} type="link">
              Create my formula
            </Button>
          )}
        </div>
        {/* Hamburger Icon */}
        <div onClick={handleNav} className="md:hidden">
          <AiOutlineMenu size={25} />
        </div>
      </nav>

      {/* Mobile Menu */}

      {/* Overlay */}
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={classNames(
            nav
              ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          )}
        >
          <div>
            <div className={classNames(commonClassNames, "w-full")}>
              <Logo />
              <div
                onClick={handleNav}
                className="rounded ml-4 shadow-lg px-3 pt-1 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <Button onClick={linkAction} type="link">Create my formula</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

Navbar.defaultProps = {
  showLink: true,
};
export default Navbar;
