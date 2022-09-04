const express = require("express");
const { updateUser } = require("../../controllers/user-update.controllers");
const upDateRoutes = express.Router();

/**
 * @api {Patch} /api/v1/user/update
 * @apiDescription update user
 *
 * @apiSuccess {Object[]} update a single user.
 *
 * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
 * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
 */

upDateRoutes.route("/").patch(updateUser);

module.exports = upDateRoutes;
