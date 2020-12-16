'use strict';

const jwt = require('jsonwebtoken');
const util = require('../util/util');

/**
 * The Token Handler middleware.
 *
 * This middleware will decode the access token if present and establish known req/res properties for later middleware.
 *
 * @param router {Object}
 *   The formio router.
 *
 * @returns {Function}
 *   The middleware for an Express endpoint.
 */
module.exports = function(router) {
  // Load the form.io hooks.
  const hook = require('../util/hook')(router.formio);
  const formioCache = require('../cache/cache')(router);
  /**
   * Handle the user.
   *
   * @param req
   * @param res
   * @param decoded
   * @param user
   * @param next
   */

  return function keycloakHandle(req, res, next) {
    /* eslint-disable max-statements */
    // If someone else provided then skip.
    // const token = req.headers.authorization
    // console.log("Authorization:",token);
    return next();
  };
};
