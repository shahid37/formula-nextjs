import DoctorCard from "./DoctorCard";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Atoms/DoctorCard",
  component: DoctorCard,
} as ComponentMeta<typeof DoctorCard>;

const Template: ComponentStory<typeof DoctorCard> = (args) => (
  <DoctorCard {...args} />
);

export const primary = Template.bind({});
primary.args = {
  imgUrl: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
  name: "William Ward",
  designation: "Family Medicine, General Physician",
  qualification: "MBBS , MRCGP (INT)",
  about:
    "Dr. Ward has over 10 years as a board certified pain management specialist with an interest in painful conditions of the spine, including chronic lower back and neck pain. In addition, he treats a wide variety of pain syndromes including headaches, extremity pain, and pelvic pain as well as painful medical conditions such as fibromyalgia and neuropathy.",
  reviews: "210+",
  rating: 4.5,
  experience: "20 years",
};
