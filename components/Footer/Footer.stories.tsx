import Footer from "./Footer";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Components/Footer",
  component: Footer,
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

export const primary = Template.bind({});
primary.args = {
  useFullLinks: [
    {
      title: "About us",
      onClick: () => {},
    },
    {
      title: "History",
      onClick: () => {},
    },
    {
      title: "Contact us",
      onClick: () => {},
    },
  ],
  about:
    "Bloowatch is specialized software for watersports schools (surfing, kitesurfing, sailing, and diving) and outdoor activity providers (skiing, climbing)",
  contactInfo: {
    city: "Spain",
    email: " wave@bloowatch.com",
    number: "156-677-124-442-2887",
  },
};
