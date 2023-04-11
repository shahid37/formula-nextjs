import { ComponentMeta, ComponentStory } from '@storybook/react';
import Divider from './Divider';

export default {
  title: 'Atoms/Divider',
  component: Divider,
} as ComponentMeta<typeof Divider>;

const Template: ComponentStory<typeof Divider> = (args) => (
  <Divider {...args} />
);

const VerticalTemplate: ComponentStory<typeof Divider> = (args) => (
  <div className="flex h-80 items-center text-center">
    <div className="p-6">My First piece of content</div>
    <Divider {...args} />
    <div className="p-6">My second piece of content</div>
  </div>
);

export const horizontal = Template.bind({});
horizontal.args = {
  dashed: false,
  type: 'horizontal',
};

export const dashed = Template.bind({});
dashed.args = {
  dashed: true,
};

export const vertical = VerticalTemplate.bind({});
vertical.args = {
  type: 'vertical',
};
