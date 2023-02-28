import Picker from "./Picker";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Atoms/Picker",
  component: Picker,
} as ComponentMeta<typeof Picker>;

const Template: ComponentStory<typeof Picker> = (args) => <Picker {...args} />;

export const date = Template.bind({});
date.args = {
  type: "date",
  direction: "horizontal",
  getValues: (values) => {
    console.log("values", values);
  },
};

export const verticalDate = Template.bind({});
verticalDate.args = {
  type: "date",
  direction: "vertical",
  getValues: (values) => {
    console.log("values", values);
  },
};

export const time = Template.bind({});
time.args = {
  type: "time",
  options: [
    {
      startTime: "2:00",
      endTime: "2:30",
    },
    {
      startTime: "2:45",
      endTime: "3:15",
    },
    {
      startTime: "3:30",
      endTime: "4:00",
    },
    {
      startTime: "4:15",
      endTime: "4:45",
    },
    {
      startTime: "5:00",
      endTime: "5:30",
    },
    {
      startTime: "5:45",
      endTime: "6:15",
    },
    {
      startTime: "6:30",
      endTime: "7:00",
    },
    {
      startTime: "7:15",
      endTime: "7:45",
    },
  ],
  getValues: (values) => {
    console.log("values", values);
  },
};
