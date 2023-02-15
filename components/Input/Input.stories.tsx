import Input from "./Input";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Atoms/Input",
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const SearchBar = Template.bind({});
SearchBar.args = {
  label: "Search",
  placeholder: "Search for a product",
};
