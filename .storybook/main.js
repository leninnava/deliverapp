module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx", /// To remove
    "../stories/**/*.stories.@(js|jsx|ts|tsx)", /// To remove
    "../components/**/*.stories.mdx",
    "../components/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    'storybook-addon-next',
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  }
}