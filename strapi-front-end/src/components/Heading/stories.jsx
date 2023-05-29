import { Heading } from './index';

export default {
  component: Heading,
  title: 'Heading',
  args: {
    children: 'O texto está escuro',
    light: false,
  },
  argTypes: {
    children: { type: 'string' },
    light: { type: 'boolean' },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export const Light = (args) => <Heading {...args} />;
export const Dark = (args) => <Heading {...args} />;

Light.parameters = {
  backgrounds: {
    default: 'light',
  },
};
