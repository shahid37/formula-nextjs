import ResetPasswordForm from "./ResetPasswordForm";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Atoms/ResetPasswordForm",
  component: ResetPasswordForm,
} as ComponentMeta<typeof ResetPasswordForm>;

const Template: ComponentStory<typeof ResetPasswordForm> = (args) => (
  <ResetPasswordForm />
);

export const primary = Template.bind({});
primary.args = {};
