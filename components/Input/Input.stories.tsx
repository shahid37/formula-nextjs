import Input from "./Input";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Atoms/Input",
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Text = Template.bind({});
Text.args = {
  placeholder: "Text Here",
  type: "text",
};
export const Password = Template.bind({});
Password.args = {
  placeholder: "Password Here",
  type: "password",
};
