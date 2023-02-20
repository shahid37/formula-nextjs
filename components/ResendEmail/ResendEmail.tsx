import React, { FC } from "react";
import Button from "../Button";

import ChatEmail from "./images/ChatEmail";

interface ResendEmailProps {
  text?: string;
  action?: () => {} | void;
}

const ResendEmail: FC<ResendEmailProps> = ({
  text,
  action,
}: ResendEmailProps) => {
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="flex flex-col items-center text-center w-80">
        <ChatEmail />
        <h5 className="block text-black">Check your email</h5>
        <p className="text-gray text-sm font-normal mt-2">{text}</p>
        <div className="w-full mt-24">
          <Button onClick={action}>Resend Email</Button>
        </div>
      </div>
    </div>
  );
};

ResendEmail.defaultProps = {
  text: "We have sent an email at a***@***.com. That email will automatically redirect you to a password reset page.",
};
export default ResendEmail;
