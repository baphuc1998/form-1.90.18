'use strict';

/**
 * Middleware function to filter _id on create.
 *
 * @param router
 *
 * @returns {Function}
 */
module.exports = router => {
  return function(req, res, next) {
    // Only run on create requests.
    if (req.method !== 'POST') {
      console.log("test2");
      return next();
    }

    // Don't allow setting _id on create.
    console.log("test3");
    delete req.body._id;
    return next();
  };
};
