import tsconfigPaths from "vite-tsconfig-paths";
import("vite").UserConfig;

module.exports = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {}
  },
  core: {
    builder: "@storybook/builder-vite"
  },
  features: {
    storyStoreV7: true,
  },

  viteFinal: async (config) => {
    config.plugins.push(
      tsconfigPaths()
    );
    
    return config;
  },
}