import Main from "./Main";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Pages/Main",
  component: Main,
} as ComponentMeta<typeof Main>;

const Template: ComponentStory<typeof Main> = (args) => <Main />;

export const primary = Template.bind({});
primary.args = {};
