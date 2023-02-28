import classNames from "classnames";
import Image from "next/image";
import React, { FC } from "react";

import Button from "../Button";

// Assets
import Icon from "./images/Formula";
import ClockIcon from "./images/Clock";
import GreenClockIcon from "./images/Happening";

interface AppointmentCardProps {
  imgUrl: string;
  isHappening?: boolean;
  doctorName: string;
  formulaName: string;
  time: string;
  qualification: string;
  btnAction?: () => {} | void;
}

const AppointmentCard: FC<AppointmentCardProps> = ({
  doctorName,
  formulaName,
  qualification,
  imgUrl,
  time,
  isHappening,
  btnAction,
}: AppointmentCardProps) => {
  const commonClassNames = "flex flex-col";
  const commonTitleClassNames = "text-sm font-normal text-black";
  const commonTextClassNames = "text-xs font-normal text-gray";

  return (
    <div
      className={classNames(
        isHappening
          ? "grid xs:grid-cols-1 md:grid-cols-2 gap-4 divide-light-gray xs:divide-x-0 md:divide-x"
          : commonClassNames,
        "w-full bg-off-white rounded-lg p-4"
      )}
    >
      <div className="flex">
        <Icon />
        <div className={classNames(commonClassNames, "ml-2")}>
          <p className="text-xl text-black font-bold">{formulaName}</p>
          <div className="flex items-center">
            {isHappening ? <GreenClockIcon /> : <ClockIcon />}
            {isHappening ? (
              <p className="text-green text-xs font-semibold ml-2">
                Happening Now
              </p>
            ) : (
              <p className={classNames(commonTextClassNames, "ml-2")}>{time}</p>
            )}
          </div>
        </div>
      </div>
      {!isHappening ? (
        <div className="flex mt-2">
          <div className="relative h-6 w-6">
            <Image
              loader={() => imgUrl} //For detail visit: https://nextjs.org/docs/api-reference/next/image#loader
              className="rounded"
              src={imgUrl}
              fill
              alt="Doctor avatar"
            />
          </div>
          <div className="ml-2 flex items-center">
            <p className={classNames(commonTitleClassNames)}>{doctorName}</p>
            <p className={classNames(commonTextClassNames, "ml-2")}>
              {qualification}
            </p>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-between w-full xs:pl-0 md:pl-5">
          <div className="flex">
            <Image
              loader={() => imgUrl}
              className="rounded"
              src={imgUrl}
              width={40}
              height={40}
              alt="Doctor avatar"
            />
            <div className={classNames(commonClassNames, "ml-2")}>
              <p className={classNames(commonTitleClassNames)}>{doctorName}</p>
              <p className={classNames(commonTextClassNames)}>
                {qualification}
              </p>
            </div>
          </div>
          <div className="w-32">
            <Button onClick={btnAction}>Join Session</Button>
          </div>
        </div>
      )}
    </div>
  );
};

AppointmentCard.defaultProps = {};
export default AppointmentCard;
