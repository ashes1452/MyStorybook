/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: [
    "../src/components/**/*.stories.@(js|jsx|ts|tsx)", // 只看这个，不看 mdx
  ],
  addons: [
    "@storybook/addon-essentials",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
};
export default config;