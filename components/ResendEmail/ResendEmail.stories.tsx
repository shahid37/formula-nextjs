import { ComponentMeta, ComponentStory } from "@storybook/react";
import ResendEmail from "./ResendEmail";

export default {
  title: "Pages/ResendEmail",
  component: ResendEmail,
} as ComponentMeta<typeof ResendEmail>;

const Template: ComponentStory<typeof ResendEmail> = (args) => (
  <ResendEmail {...args} />
);

export const primary = Template.bind({});
primary.args = {};
