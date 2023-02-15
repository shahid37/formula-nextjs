import RelatedProduct from "./RelatedProduct";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Atoms/RelatedProduct",
  component: RelatedProduct,
} as ComponentMeta<typeof RelatedProduct>;

const Template: ComponentStory<typeof RelatedProduct> = (args) => (
  <RelatedProduct {...args} />
);

export const primary = Template.bind({});
primary.args = {
  imgUrl:
    "https://static.wixstatic.com/media/2cd43b_008fa97babc04c609e6cdd2159f7baf6~mv2.png/v1/fill/w_256,h_256,q_90/2cd43b_008fa97babc04c609e6cdd2159f7baf6~mv2.png",
  name: "TUNDER BOARD",
  rating: 2,
};
