import PriceTag from "./PriceTag";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Atoms/PriceTag",
  component: PriceTag,
} as ComponentMeta<typeof PriceTag>;

const Template: ComponentStory<typeof PriceTag> = (args) => (
  <PriceTag {...args}>$150.00</PriceTag>
);

export const primary = Template.bind({});
primary.args = {
  lineThrough: false,
};
