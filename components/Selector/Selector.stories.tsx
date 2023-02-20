import Selector from "./Selector";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Atoms/Selector",
  component: Selector,
} as ComponentMeta<typeof Selector>;

const Template: ComponentStory<typeof Selector> = (args) => (
  <Selector {...args} />
);

export const Single = Template.bind({});

Single.args = {
  options: ["Sharp", "Dull", "Twisting"],
  type: "single",
  getValues: (values) => {
    console.log("values", values);
  },
};

export const Multi = Template.bind({});

Multi.args = {
  options: ["Sharp", "Dull", "Twisting"],
  type: "multi",
  getValues: (values) => {
    console.log("values", values);
  },
};

export const Input = Template.bind({});

Input.args = {
  type: "input",
  getValues: (values) => {
    console.log("Given answer: ", values);
  },
};

export const Range = Template.bind({});

Range.args = {
  type: "range",
  getValues: (values) => {
    console.log(" range value: ", values);
  },
};
