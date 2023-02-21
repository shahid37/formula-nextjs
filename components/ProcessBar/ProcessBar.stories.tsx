import { ComponentMeta, ComponentStory } from "@storybook/react";
import ProcessBar from "./ProcessBar";

export default {
  title: "Atoms/Process Bar",
  component: ProcessBar,
} as ComponentMeta<typeof ProcessBar>;

const Template: ComponentStory<typeof ProcessBar> = (args) => (
  <ProcessBar {...args} />
);

export const Bar = Template.bind({});

Bar.args = {
  totalQuestions: 10,
  currentQuestionNumber: 1,
};
