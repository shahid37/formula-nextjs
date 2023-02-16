import CheckBox from "./CheckBox";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useState } from "react";

export default {
  title: "Atoms/CheckBox",
  component: CheckBox,
} as ComponentMeta<typeof CheckBox>;

const Template: ComponentStory<typeof CheckBox> = (...args) => {
  const [isChecked, setIsChecked] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };
  return (
    <CheckBox
      handleChange={handleChange}
      isChecked={isChecked}
      label={"Remember this device"}
    />
  );
};
export const Default = Template.bind({});
Default.args = {};
