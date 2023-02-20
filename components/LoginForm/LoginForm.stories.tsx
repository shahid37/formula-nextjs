import LoginForm from "./LoginForm";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Atoms/LoginForm",
  component: LoginForm,
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm />;

export const primary = Template.bind({});
primary.args = {};
