/* eslint-disable */
const withPlugins = require("next-compose-plugins");
const withLess = require("next-with-less");
const lessToJS = require("less-vars-to-js");
const fs = require("fs");
const path = require("path");

// Where your antd-custom.less file lives
const lessColorsPath =path.resolve(__dirname, "./public/styles/colors.less")
const themeVariables = lessToJS(fs.readFileSync(lessColorsPath, "utf8"));

console.log(themeVariables);
const lessOptions = {
  lessLoaderOptions: {
    //additionalData: (content) => `${content}\n\n@import '${lessColorsPath}';`,
  }
};

module.exports = withPlugins( [withLess, lessOptions],{
  // webpack5: false,
})