module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)', '../src/**/stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
  framework: {
    name: "@storybook/react-vite",
    options: {}
  },
  features: {
    storyStoreV7: true
  },
  docs: {
    autodocs: true
  }
};
