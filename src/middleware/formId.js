'use strict';

/**
 * Middleware to set formId from params.
 *
 * @returns {Function}
 */
module.exports = () => (req, res, next) => {
  console.log("debug05");
  if (!req.formId && req.params.formId) {
    req.formId = req.params.formId;
  }
  next();
};
