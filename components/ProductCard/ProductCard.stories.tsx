import ProductCard from "./ProductCard";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Components/ProductCard",
  component: ProductCard,
} as ComponentMeta<typeof ProductCard>;

const Template: ComponentStory<typeof ProductCard> = (args) => (
  <ProductCard {...args} />
);

export const primary = Template.bind({});
primary.args = {
  productImage: "",
  isSaleItem: true,
  name: "LIGTTWAVE BOARD",
  description: "Equipment, Board",
  totalPrice: "$100.00",
  discountPrice: "$150.00",
};

export const secondary = Template.bind({});
secondary.args = {
  productImage: "",
  isSaleItem: false,
  name: "SCUBA DIVING WETSUIT",
  description: "Equipment, Board",
  totalPrice: "$150.00",
};
