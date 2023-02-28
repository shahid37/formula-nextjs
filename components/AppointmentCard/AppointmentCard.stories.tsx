import AppointmentCard from "./AppointmentCard";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Atoms/AppointmentCard",
  component: AppointmentCard,
} as ComponentMeta<typeof AppointmentCard>;

const Template: ComponentStory<typeof AppointmentCard> = (args) => (
  <AppointmentCard {...args} />
);

export const Done = Template.bind({});
Done.args = {
  isHappening: false,
  imgUrl: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
  doctorName: "William Ward",
  time: "11:00 - 12:00 AM",
  qualification: "MBBS • BUMS",
  formulaName: "Formula Name",
};

export const Happening = Template.bind({});
Happening.args = {
  isHappening: true,
  imgUrl: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
  doctorName: "William Ward",
  time: "11:00 - 12:00 AM",
  qualification: "MBBS • BUMS",
  formulaName: "Formula Name",
};
