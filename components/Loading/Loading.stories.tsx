import { ComponentMeta, ComponentStory } from "@storybook/react";
import Loading from "./Loading";

export default {
  title: "Pages/Loading page",
  component: Loading,
} as ComponentMeta<typeof Loading>;

const Template: ComponentStory<typeof Loading> = (args) => (
  <Loading {...args} />
);

export const primary = Template.bind({});
primary.args = {
  status: "Getting Started",
  text: "Over 50 million people (20%) in the United States suffer from chronic pain - that is 1 in 5 Americans",
};
