import classNames from "classnames";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { styles } from "./selectionStyle";

import React, { FC, useEffect, useState } from "react";
import Input from "../Input";

interface SelectorProps {
  type: "single" | "multi" | "input" | "range";
  options?: string[];
  getValues?: (values: string | string[] | null | undefined) => void;
}

const Selector: FC<SelectorProps> = ({
  type,
  options,
  getValues,
}: SelectorProps) => {
  // This holds the selected values
  const [multiValue, setMultiValue] = useState<string[]>([]);
  const [singleValue, setSingleValue] = useState<string | null>("");
  const [inputValue, setInputValue] = useState("");
  const [sliderValue, setSliderValue] = useState("0");

  // Handle the single Selection case
  const singleSelectionHandler = (value: string) => {
    setSingleValue(value);
  };

  // Handle the multi Selection case
  const multiSelectionHandler = (value: string) => {
    if (multiValue.includes(value)) {
      setMultiValue(multiValue.filter((item) => item !== value));
    } else {
      setMultiValue((prev) => [...prev, value]);
    }
  };

  useEffect(() => {
    if (getValues) {
      if (type === "single") {
        return getValues(singleValue);
      } else if (type === "multi") {
        return getValues(multiValue);
      } else if (type === "range") {
        return getValues(sliderValue);
      } else {
        return getValues(inputValue);
      }
    }
  }, [getValues, sliderValue, inputValue, multiValue, singleValue, type]);

  return (
    <div>
      {type === "range" && (
        <div className="flex flex-col w-full">
          <Slider
            trackStyle={styles.track}
            railStyle={styles.rail}
            handleStyle={styles.handle}
            dotStyle={styles.dot}
            activeDotStyle={styles.activeDot}
            step={25}
            dots
            defaultValue={0}
            onChange={(e) => setSliderValue(e.toString())}
          />
          <div className="flex mt-4 w-full items-center justify-between">
            <p className="text-sm font-normal text-black -ml-4">Mild</p>
            <p className="text-sm font-normal text-black -mr-4">Extreme</p>
          </div>
        </div>
      )}
      {type === "input" ? (
        <Input
          type="text"
          placeholder="Write your answer here"
          name="answer"
          onChange={(e: any) => setInputValue(e.target.value)}
        />
      ) : (
        <div className="grid grid-cols-6 gap-4">
          {options?.map((item) => (
            <button
              onClick={() => {
                type === "single"
                  ? singleSelectionHandler(item)
                  : multiSelectionHandler(item);
              }}
              key={item}
              className={classNames(
                singleValue === item || multiValue.includes(item)
                  ? "bg-teal"
                  : "bg-off-white",
                "cursor-pointer rounded-lg flex items-center justify-center p-4 border border-light-gray text-sm font-medium"
              )}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

Selector.defaultProps = {};

export default Selector;
