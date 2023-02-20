import QuestionsLayout from "./QuestionsLayout";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Questionnaire/Questions Layout",
  component: QuestionsLayout,
} as ComponentMeta<typeof QuestionsLayout>;

const Template: ComponentStory<typeof QuestionsLayout> = (args) => (
  <QuestionsLayout {...args} />
);

export const layout = Template.bind({});
layout.args = {
  question: "Describe your pain ",
  totalQuestions: 15,
  questionNumber: 1,
  description: "(May choose more than one)",
};
