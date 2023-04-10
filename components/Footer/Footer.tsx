import React, { FC } from "react";

import Plant from "./images/Plant";
import Teeth from "./images/Teeth";
import Injection from "./images/Injection";
import Leafs from "./images/Leafs";

interface FooterProps {
  headingText?: string;
}

const Footer: FC<FooterProps> = (props: FooterProps) => {
  return (
    <div className="xs:p-4 md:p-6 rounded-lg border border-light-gray ">
      <h4>{props.headingText}</h4>
      <div className="grid xs:grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        {[
          {
            text: "Provides high levels of active ingredient directly to the site of injury minimizing loss in the blood stream",
            icon: <Plant />,
          },
          {
            text: "Lower doses necessary compared to oral pain medications",
            icon: <Teeth />,
          },
          {
            text: "Less side effects and potential for dependency",
            icon: <Injection />,
          },
          {
            text: "Cleaner products - hypoallergenic, paraben, dye and fragrance free.",
            icon: <Leafs />,
          },
        ].map((item) => (
          <div className="flex flex-col" key={item.text}>
            {item.icon}
            <h6 className="mt-1 text-gray">{item.text}</h6>
          </div>
        ))}
      </div>
    </div>
  );
};

Footer.defaultProps = {
  headingText: "Why choose a compounded formula for your pain?",
};
export default Footer;
