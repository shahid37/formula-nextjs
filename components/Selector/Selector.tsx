import Slider from "rc-slider";
import React, { FC, useEffect, useState } from "react";

import Button from "@/components/Button";

import { capitalizeFirstLetter } from "../../utils/utills";
import { Question } from "@/utils/constants";
import classNames from "classnames";
import "rc-slider/assets/index.css";
import { styles } from "./selectionStyle";
import Input from "../Input";

interface SelectorProps {
  type: "single" | "multi" | "input" | "range";
  options?: string[];
  getValues?: (values: string | string[] | null | undefined) => void;
  value?: number;
  data?: Array<Question>;
  id?: number;
}

const Selector: FC<SelectorProps> = ({
  type,
  options,
  getValues,
  value,
  data,
  id,
}: SelectorProps) => {
  // This holds the selected values
  const [multiValue, setMultiValue] = useState<string[]>([]);
  const [inputValuesCount, setInputValuesCount] = useState<number[]>([0]);
  const [singleValue, setSingleValue] = useState<string | null>("");
  const [inputValue, setInputValue] = useState<string | null>("");
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

  const handleMore = () => {
    setInputValuesCount([
      ...inputValuesCount,
      inputValuesCount[inputValuesCount.length - 1] + 1,
    ]);
  };

  useEffect(() => {
    // if(data && data?.length > 0 && id){
    // const _data = data?.find((item)=>item?.id === id);
    // console.log(data,id,"answersanswersanswersanswers",_data);

    // }

    // if (answers && answers?.length > 0) {
    // setMultiValue([...answers]);
    // }
    if (value) {
      setInputValue("");
      setSliderValue("0");
    }
  }, [data, value, id]);

  return (
    <div>
      {type === "range" && (
        <div className="justify-center flex">
          <div className="flex flex-col w-[500px]">
            <Slider
              trackStyle={styles.track}
              railStyle={styles.rail}
              handleStyle={styles.handle}
              dotStyle={styles.dot}
              activeDotStyle={styles.activeDot}
              step={25}
              dots
              value={parseInt(sliderValue)}
              defaultValue={0}
              onChange={(e) => setSliderValue(e.toString())}
            />
            <div className="flex mt-4 w-full items-center justify-between">
              <p className="text-sm font-normal text-black -ml-4">Mild</p>
              <p className="text-sm font-normal text-black -mr-4">Extreme</p>
            </div>
          </div>
        </div>
      )}
      {type === "input" ? (
        <>
          {inputValuesCount.map((item, index) => {
            return (
              <div key={index} className="justify-center flex">
                <Input
                  className="xs:w-[350px] md:w-[500px]"
                  type="text"
                  placeholder="Write your answer here"
                  name="answer"
                  value={inputValue || ""}
                  onChange={(e: any) => {
                    setInputValue(e.target.value);
                  }}
                />
                {/* {multiValue.length === inputValuesCount.length && (
                  <div className="w-[200px] text-center mr-[24px]">
                    <Button
                      onClick={handleMore}
                      backgroundColor="white"
                      type="secondary"
                    >
                      Add More Answer
                    </Button>
                  </div>
                )} */}
              </div>
            );
          })}
        </>
      ) : (
        <div className="flex-wrap gap-4 justify-center flex items-center">
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
                  : "bg-white",
                "w-48	 cursor-pointer text-black rounded-lg flex items-center justify-center p-4 border border-light-gray text-sm font-medium"
              )}
            >
              {capitalizeFirstLetter(item)}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

Selector.defaultProps = {};

export default Selector;
