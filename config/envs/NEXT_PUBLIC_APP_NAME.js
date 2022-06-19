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
