import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from '../components/Button';

export default {
  title: 'Example/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const MUICloneButton = Template.bind({});
MUICloneButton.args = {
  variant: 'primary',
  color: 'secondary',
  size: 'large',
  children: 'Button',
  disabled: false,
};

