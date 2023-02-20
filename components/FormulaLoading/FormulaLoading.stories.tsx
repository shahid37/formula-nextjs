import FormulaLoading from "./FormulaLoading";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Atoms/Formula Loading",
  component: FormulaLoading,
} as ComponentMeta<typeof FormulaLoading>;

const Template: ComponentStory<typeof FormulaLoading> = (args) => (
  <FormulaLoading {...args} />
);

export const status1 = Template.bind({});
status1.args = {
  status: "Getting Started",
  text: "Over 50 million people (20%) in the United States suffer from chronic pain - that is 1 in 5 Americans",
};

export const status2 = Template.bind({});
status2.args = {
  status: "You are doing good",
  text: "Chronic pain causes $80 billion in lost wages every year",
};
