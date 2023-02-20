import ChangePasswordForm from "./ChangePasswordForm";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Atoms/ChangePasswordForm",
  component: ChangePasswordForm,
} as ComponentMeta<typeof ChangePasswordForm>;

const Template: ComponentStory<typeof ChangePasswordForm> = (args) => (
  <ChangePasswordForm />
);

export const primary = Template.bind({});
primary.args = {};
