import Button from "./Button";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Atoms/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>ADD TO CART</Button>
);

export const Primary = Template.bind({});
Primary.args = {
  type: "default",
};
