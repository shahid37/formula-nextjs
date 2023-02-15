import Hero from "./Hero";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Atoms/Hero",
  component: Hero,
} as ComponentMeta<typeof Hero>;

const Template: ComponentStory<typeof Hero> = (args) => <Hero {...args} />;

export const primary = Template.bind({});
primary.args = {
  text: "Title Here",
};
