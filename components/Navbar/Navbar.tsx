import classNames from "classnames";
import Image from "next/image";
import React, { FC, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

import Button from "../Button";

import Logo from "../../public/assets/logo.png";
import CartIcon from "./images/Cart";

export interface Link {
  title: string;
  onClick: () => {} | void;
}
interface NavbarProps {
  links: Link[];
}

const Navbar: FC<NavbarProps> = ({ links }: NavbarProps) => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  const commonClassNames = "flex justify-between items-center";
  return (
    <div className="w-full">
      <nav className={classNames(commonClassNames)}>
        <Image
          src={Logo}
          alt="logo"
          width={219}
          height={41}
          className="cursor-pointer"
        />
        <ul className="hidden md:flex">
          {links.map((item, i) => (
            <li
              key={item.title}
              className={classNames(i != links.length - 1 && "mr-20")}
            >
              {i === 3 ? (
                <div className="flex items-center">
                  <CartIcon />
                  <div className="ml-1">
                    <Button
                      onClick={item.onClick}
                      type="link"
                      textColor="black"
                      fontSize={18}
                    >
                      {item.title}
                    </Button>
                  </div>
                </div>
              ) : (
                <Button
                  onClick={item.onClick}
                  type="link"
                  textColor="black"
                  fontSize={18}
                >
                  {item.title}
                </Button>
              )}
            </li>
          ))}
        </ul>
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
              <Image
                src={Logo}
                alt="logo"
                width="219"
                height="41"
                className="cursor-pointer"
              />
              <div
                onClick={handleNav}
                className="rounded ml-4 shadow-lg px-3 pt-1 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              {links.map((item, i) => (
                <li key={item.title} className="py-4 text-sm">
                  {i === 3 ? (
                    <div className="flex items-center">
                      <CartIcon />
                      <div className="ml-1">
                        <Button
                          onClick={() => {
                            item.onClick, setNav(false);
                          }}
                          type="link"
                          textColor="black"
                          fontSize={18}
                        >
                          {item.title}
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <Button
                      onClick={() => {
                        item.onClick, setNav(false);
                      }}
                      type="link"
                      textColor="black"
                      fontSize={18}
                    >
                      {item.title}
                    </Button>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

Navbar.defaultProps = {};
export default Navbar;
