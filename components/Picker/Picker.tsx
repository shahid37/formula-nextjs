import classNames from "classnames";
import React, { FC, useEffect, useState } from "react";

import { getWeeksDays } from "./helpers";

interface TimeProps {
  startTime: string;
  endTime: string;
}

interface PickerProps {
  type?: "date" | "time";
  direction?: "horizontal" | "vertical";
  options?: TimeProps[];
  getValues?: (values: string | {} | null | undefined) => void;
}

const Picker: FC<PickerProps> = ({
  type,
  options,
  getValues,
  direction,
}: PickerProps) => {
  const [selectedDate, setSelectedDate] = useState({
    date: 0,
    day: "",
  });
  const [selectedTime, setSelectedTime] = useState({
    startTime: "",
    endTime: "",
  });

  useEffect(() => {
    if (getValues) {
      if (type === "date") {
        return getValues(selectedDate);
      } else {
        return getValues(selectedTime);
      }
    }
  }, [getValues, selectedDate, selectedTime, type]);

  const dates = getWeeksDays();

  const commonClassNames =
    "cursor-pointer flex items-center justify-center text-sm font-medium";
  const commonTextClassNames = "text-sm text-gray";
  const commonTimeTextClassNames = "text-sm font-bold text-black";

  return (
    <div>
      <p className={classNames(commonTextClassNames, "font-semibold mb-4")}>
        Select {type === "date" ? "date" : "time"}
      </p>
      {type === "time" ? (
        <div className="grid xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {options?.map((item) => (
            <button
              onClick={() => {
                setSelectedTime({
                  startTime: item.startTime,
                  endTime: item.endTime,
                });
              }}
              key={item.startTime}
              className={classNames(
                commonClassNames,
                selectedTime.startTime === item.startTime && "bg-teal",
                "rounded-lg border-teal border p-2"
              )}
            >
              <p className={classNames(commonTimeTextClassNames)}>
                {" "}
                {item.startTime}
              </p>
              <p className={classNames(commonTextClassNames, "ml-1")}>pm</p>
              <p className={classNames(commonTextClassNames, "mx-1")}>-</p>
              <p className={classNames(commonTimeTextClassNames)}>
                {" "}
                {item.endTime}
              </p>
              <p className={classNames(commonTextClassNames, "ml-1")}>pm</p>
            </button>
          ))}
        </div>
      ) : (
        <div
          className={classNames(
            direction === "vertical" && "divide-x divide-light-gray",
            "flex flex-wrap gap-3"
          )}
        >
          {dates?.map((item) => (
            <button
              onClick={() => {
                setSelectedDate({
                  date: item.date.date,
                  day: item.date.day,
                });
              }}
              key={item.date.date}
              className={classNames(
                commonClassNames,
                selectedDate?.day === item.date.day && "bg-teal rounded-lg",
                direction === "vertical" ? "flex-col" : "flex-row ",
                "w-20  py-2"
              )}
            >
              {item.date.date}
              <p className={classNames(commonTextClassNames, "ml-1")}>
                {item.date.day}
              </p>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

Picker.defaultProps = {
  type: "date",
  direction: "horizontal",
};

export default Picker;
