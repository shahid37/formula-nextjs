import Loader from "./Loader";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Atoms/Loader",
  component: Loader,
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader />;

export const Loading = Template.bind({});
Loading.args = {};
