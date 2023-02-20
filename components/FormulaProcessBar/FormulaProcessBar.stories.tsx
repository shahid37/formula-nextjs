import { ComponentMeta, ComponentStory } from "@storybook/react";
import FormulaProcessBar from "./FormulaProcessBar";

export default {
  title: "Atoms/Formula Process Bar",
  component: FormulaProcessBar,
} as ComponentMeta<typeof FormulaProcessBar>;

const Template: ComponentStory<typeof FormulaProcessBar> = (args) => (
  <FormulaProcessBar {...args} />
);

export const Bar = Template.bind({});

Bar.args = {
  totalQuestions: 10,
  currentQuestionNumber: 1,
};
