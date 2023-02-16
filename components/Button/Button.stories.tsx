import Button from "./Button";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Atoms/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>CREATE MY FORMULA</Button>
);

export const Default = Template.bind({});
Default.args = {
  type: "default",
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: "secondary",
};

export const Link = Template.bind({});
Link.args = {
  type: "link",
};
