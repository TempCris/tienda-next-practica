/* eslint-disable */
const withPlugins = require("next-compose-plugins");
const withLess = require("next-with-less");
const { NEXT_PUBLIC_LESS_COLORS, NEXT_PUBLIC_APP_NAME } = require("./config/envsHandler");

const lessOptions = {
  lessLoaderOptions: {
    //additionalData: (content) => `${content}\n\n@import '${lessColorsPath}';`,
  }
};

module.exports = withPlugins( [withLess, lessOptions],{
  env: {
    NEXT_PUBLIC_APP_NAME: NEXT_PUBLIC_APP_NAME(),
    NEXT_PUBLIC_LESS_COLORS: NEXT_PUBLIC_LESS_COLORS(),
  }
})