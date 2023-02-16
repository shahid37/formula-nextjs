import Navbar from "./Navbar";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Components/Navbar",
  component: Navbar,
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Default = Template.bind({});
Default.args = {
  showLink: true,
};
