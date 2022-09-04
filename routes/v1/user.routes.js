const express = require("express");
const randomUser = require("../../controllers/user-random.controllers");
const routes = express.Router();

routes
  .route("/")
  /**
   * @api {get} /api/v1/user/random
   * @apiDescription random user
   *
   * @apiSuccess {Object[]} all the random user.
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
   */
  .get(randomUser.getRandom);

module.exports = routes;
