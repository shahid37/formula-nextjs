import LandingPage from "./LandingPage";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Questionnaire/Landing Page",
  component: LandingPage,
} as ComponentMeta<typeof LandingPage>;

const Template: ComponentStory<typeof LandingPage> = (args) => (
  <LandingPage {...args} />
);

export const main = Template.bind({});
main.args = {
  text: "Creation of your customized pain formula is almost complete!",
};
