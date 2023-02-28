import DetailCard from "./DetailCard";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Atoms/Formula Detail",
  component: DetailCard,
} as ComponentMeta<typeof DetailCard>;

const Template: ComponentStory<typeof DetailCard> = (args) => (
  <DetailCard {...args} />
);

export const Card = Template.bind({});
Card.args = {
  rating: 1,
  reviews: 10,
  text: "Our Muscle Cream 1 targets your muscles to create a relaxing effect with potent muscle relaxers.",
  formulaName: "Edward’s Muscle Formula",
};
