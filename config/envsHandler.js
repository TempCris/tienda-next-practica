/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const lessToJS = require('less-vars-to-js');
const fs = require('fs');

/**
 * Set the name of the application based on the current environment.
 * @returns {String}
 */
exports.NEXT_PUBLIC_APP_NAME = function NEXT_PUBLIC_APP_NAME() {
  if (process?.env?.NEXT_PUBLIC_APP_NAME) {
    return process?.env?.NEXT_PUBLIC_APP_NAME;
  }
  if (process?.env?.NODE_ENV === 'production') {
    return 'Production react app';
  }
  return 'Development react app';
};

/**
 * Set the name of the application based on the current environment.
 * @returns {String}
 */
exports.NEXT_PUBLIC_LESS_COLORS = function NEXT_PUBLIC_LESS_COLORS() {
  try {
    const colorsFile = fs.readFileSync(path.join(__dirname, './public/styles/colors.less'), 'utf8');
    const themeVariables = JSON.stringify(lessToJS(colorsFile));
    return themeVariables;
  } catch (error) {
    const message = error?.message;
    return `{
      error: ${message || error}
    }`;
  }
};
