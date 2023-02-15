import MultiRangeSlider from "./MultiRangeSlider";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Atoms/MultiRangeSlider",
  component: MultiRangeSlider,
} as ComponentMeta<typeof MultiRangeSlider>;

const Template: ComponentStory<typeof MultiRangeSlider> = (args) => (
  <MultiRangeSlider {...args} />
);

export const Slider = Template.bind({});
Slider.args = {
  label: "Price",
  min: 0,
  max: 1000,
  onChange: ({ min, max }: { min: number; max: number }) =>
    console.log(`min = ${min}, max = ${max}`),
};
