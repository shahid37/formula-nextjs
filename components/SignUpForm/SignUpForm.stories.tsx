import SignUpForm from "./SignUpForm";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Atoms/SignUpForm",
  component: SignUpForm,
} as ComponentMeta<typeof SignUpForm>;

const Template: ComponentStory<typeof SignUpForm> = (args) => <SignUpForm />;

export const primary = Template.bind({});
primary.args = {};
