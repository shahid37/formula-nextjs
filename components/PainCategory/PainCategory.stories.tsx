import PainCategory from "./PainCategory";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Atoms/PainCategory",
  component: PainCategory,
} as ComponentMeta<typeof PainCategory>;

const Template: ComponentStory<typeof PainCategory> = (args) => (
  <PainCategory {...args} />
);

export const MusclePain = Template.bind({});
MusclePain.args = {
  painType: "musclePain",
  name: "Muscle Pain",
};
