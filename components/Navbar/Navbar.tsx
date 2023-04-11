import classNames from "classnames";
import React, { FC } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

import Button from "../Button";
import Link from "next/link";

interface NavbarProps {
  showLink?: boolean;
  linkAction?: () => {} | void;
}

const Container = ({ children, className }: any) => (
  <div
    className={`max-w-[1512px] xs:w-[91%] md:w-[84%] mx-auto ${
      className ?? ""
    }`}
  >
    {children}
  </div>
);

const Navbar: FC<NavbarProps> = ({ showLink, linkAction }: NavbarProps) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = () => {
    router.push("/");
  };
  return (
    <nav className="w-full h-[60px] flex justify-between items-center">
      <Container className="w-full h-[100%] flex flex-row justify-between items-center">
        <Image
          onClick={handleClick}
          src="/assets/icons/formul-icon.svg"
          alt="logo"
          height={36}
          width={136}
          className="cursor-pointer"
        />

        {pathname === "/" && (
          <Link
            href="/questionnaries/home"
            className="text-[#4E4B48] text-[14px] leading-[16.94px] uppercase tracking-[0.25px]"
          >
            Create my formula
          </Link>
        )}
      </Container>
    </nav>
  );
};

Navbar.defaultProps = {
  showLink: true,
};
export default Navbar;
