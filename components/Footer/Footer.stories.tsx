import Footer from "./Footer";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Components/Footer",
  component: Footer,
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

export const primary = Template.bind({});
primary.args = {
  headingText: "Why choose a compounded formula for your pain?",
};
