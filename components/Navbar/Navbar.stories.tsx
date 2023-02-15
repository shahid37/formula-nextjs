import Navbar from "./Navbar";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Components/Navbar",
  component: Navbar,
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const primary = Template.bind({});
primary.args = {
  links: [
    {
      title: "SHOP",
      onClick: () => {},
    },
    {
      title: "BLOG",
      onClick: () => {},
    },
    {
      title: "SEARCH",
      onClick: () => {},
    },
    {
      title: "CART",
      onClick: () => {},
    },
  ],
};
