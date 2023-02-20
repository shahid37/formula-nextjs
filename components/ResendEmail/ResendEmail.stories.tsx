import ResendEmail from "./ResendEmail";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Atoms/resend email",
  component: ResendEmail,
} as ComponentMeta<typeof ResendEmail>;

const Template: ComponentStory<typeof ResendEmail> = (args) => (
  <ResendEmail {...args} />
);

export const primary = Template.bind({});
primary.args = {
  text: "We have sent an email at a***@***.com. That email will automatically redirect you to a password reset page.",
};
