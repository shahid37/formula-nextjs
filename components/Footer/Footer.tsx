import classNames from "classnames";
import Image from "next/image";
import React, { FC } from "react";
import Button from "../Button";
import { Link } from "../Navbar/Navbar";

interface FooterProps {
  useFullLinks: Link[];
  about: string;
  contactInfo: {
    city: string;
    email: string;
    number: string | number;
  };
}

const Footer: FC<FooterProps> = (props: FooterProps) => {
  const commonClassNames = "flex flex-col text-left justify-between";
  const commonFontStyleClassNames = "text-white font-normal	";
  return (
    <div className="w-full  xs:h-full lg:h-[464px] bg-black pt-20 xs:px-4 md:px-24">
      <div className="flex xs:flex-col md:flex-row md:flex-wrap lg:flex-nowrap">
        {/* About section */}
        <div className={classNames(commonClassNames, " xs:w-full lg:w-80")}>
          <h4 className="text-white">ABOUT</h4>
          <h6
            className={classNames(
              commonFontStyleClassNames,
              "xs:mt-4 lg:mt-14"
            )}
          >
            {props.about}
          </h6>
        </div>
        {/* Contact Section */}
        <div
          className={classNames(
            commonClassNames,
            "xs:mt-8 lg:mt-0 lg:ml-16 xs:w-full lg:w-40"
          )}
        >
          <h4 className="text-white">CONTACT</h4>
          {[
            props.contactInfo.number,
            props.contactInfo.email,
            props.contactInfo.city,
          ].map((item) => (
            <h6
              key={item}
              className={classNames(
                commonFontStyleClassNames,
                "xs:mt-2 lg:mt-6"
              )}
            >
              {item}
            </h6>
          ))}
        </div>
        {/* useFull Links Section */}
        <div
          className={classNames(
            commonClassNames,
            "xs:mt-8 lg:mt-0 lg:ml-32 xs:w-full lg:w-36 "
          )}
        >
          <h4 className="text-white">USEFULL LINKS</h4>
          {props.useFullLinks.map((item) => (
            <div key={item.title} className="text-white	xs:mt-2 lg:mt-6">
              <Button onClick={item.onClick} type="link" fontSize={13}>
                {item.title}
              </Button>
            </div>
          ))}
        </div>

        {/* Social media Section */}
        <div
          className={classNames(commonClassNames, "xs:mt-8 lg:mt-0  lg:ml-32")}
        >
          <h4 className="text-white">INSTAGRAM</h4>
          <div className="grid grid-cols-4 gap-1 mb-20">
            {[
              "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0b/fa/f9/84.jpg",
              "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0b/fa/f9/77.jpg",
              "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0b/fa/f9/84.jpg",
              "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0b/fa/f9/84.jpg",
            ].map((url) => (
              <img
                key={url}
                src={`${url}`}
                alt="pictures"
                width="64px"
                height="64px"
                className="p-1 cursor-pointer"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

Footer.defaultProps = {};
export default Footer;
