const express = require('express');
const userAll = require('../../controllers/user-all.controllers');
const routes = express.Router();

routes
  .route("/")
  /**
   * @api {get} /api/v1/user/all
   * @apiDescription random all user
   *
   * @apiSuccess {Object[]} all the all user.
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
   */
  .get(userAll.allUser);

module.exports = routes;