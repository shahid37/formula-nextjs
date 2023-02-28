import Ratings from "./Ratings";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Atoms/Rating",
  component: Ratings,
} as ComponentMeta<typeof Ratings>;

const Template: ComponentStory<typeof Ratings> = (args) => (
  <Ratings {...args} />
);

export const stars = Template.bind({});
stars.args = {
  rating: 1,
};
