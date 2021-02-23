const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.jsx"],
  addons: ["@storybook/addon-actions", "@storybook/addon-links"],
  webpackFinal: (config) => {
    config.resolve.alias["~"] = path.join(__dirname, "../src/");
    return config;
  },
};
// Storybook上でonClickなどのUIアクションに対してのログを確認することができる
// Storybook上でstory間の遷移をできる
