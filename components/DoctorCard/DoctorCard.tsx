import classNames from "classnames";
import Image from "next/image";
import React, { FC } from "react";

interface DoctorCardProps {
  imgUrl: string;
  name: string;
  designation: string;
  qualification: string;
  about: string;
  reviews: number | string;
  rating: number | string;
  experience: number | string;
}

const DoctorCard: FC<DoctorCardProps> = ({
  name,
  designation,
  qualification,
  about,
  imgUrl,
  reviews,
  rating,
  experience,
}: DoctorCardProps) => {
  const commonClassNames = "flex flex-col";
  const commonTitleClassNames = "text-sm font-normal text-black";
  const commonTextClassNames = "text-xs font-normal text-gray";

  return (
    <div
      className={classNames(
        commonClassNames,
        "w-full bg-off-white rounded-lg p-4"
      )}
    >
      <div className="flex">
        <Image
          loader={() => imgUrl} //For detail visit: https://nextjs.org/docs/api-reference/next/image#loader
          className="rounded"
          src={imgUrl}
          width={50}
          height={40}
          alt="Doctor avatar"
        />
        <div className={classNames(commonClassNames, "ml-4")}>
          <p className={classNames(commonTitleClassNames)}>{name}</p>
          <p className={classNames(commonTextClassNames)}>{designation}</p>
          <p className={classNames(commonTextClassNames)}>{qualification}</p>
        </div>
      </div>
      <div className="divide-y divide-light-gray">
        <p className="my-4 text-sm font-normal text-gray">{about}</p>
        <div className="pt-4 grid grid-cols-3 gap-4 ">
          {[
            {
              title: "Reviews",
              value: reviews,
            },
            {
              title: "Avg. Rating",
              value: rating,
            },
            {
              title: "Experience",
              value: experience,
            },
          ].map((item) => (
            <div className="flex" key={item.title}>
              <div className={classNames(commonClassNames, "text-center")}>
                <p className={classNames(commonTitleClassNames)}>
                  {item.title}
                </p>
                <p className={classNames(commonTextClassNames)}>{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

DoctorCard.defaultProps = {};
export default DoctorCard;
