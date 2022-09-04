const express = require("express");
const users = require("../../controllers/user-save.controllers");
const routesSave = express.Router();
/**
 * @api {post} /api/v1/user/save
 * @apiDescription random user
 *
 * @apiSuccess {Object[]} add user.
 *
 * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
 * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
 */
routesSave.route("/").post(users.saveUser);

module.exports = routesSave;
