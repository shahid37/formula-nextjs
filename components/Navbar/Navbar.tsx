import classNames from "classnames";
import React, { FC } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";


import Button from "../Button";


interface NavbarProps {
  showLink?: boolean;
  linkAction?: () => {} | void;
}

const Navbar: FC<NavbarProps> = ({ showLink, linkAction }: NavbarProps) => {
  const router = useRouter();
  const commonClassNames =
    "flex justify-between items-center bg-off-white py-4 xs:px-4 md:px-[120px]";

    const handleClick = ()=>{
      router.push('/');
    }
  return (
    <div className="w-full">
      <nav className={classNames(commonClassNames)}>

        <Image onClick={handleClick} src="/assets/icons/formul-icon.svg" alt="logo" height={36} width={136} />
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
