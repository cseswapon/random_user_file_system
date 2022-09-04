const express = require("express");
const deleteRoutes = express.Router();
const fs = require("fs");
const createReadStream = fs.createReadStream("feckUser.json", "utf8");
/**
 * @api {delete} /api/v1/user/delete
 * @apiDescription random user
 *
 * @apiSuccess {Object[]} delete user.
 *
 * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
 * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
 */

deleteRoutes.route("/").delete((req, res) => {
  const { id } = req.query;
  createReadStream.on("data", (data) => {
    const allUser = JSON.parse(data);
    const deleteData = allUser.filter((users) => users.id != id);
      fs.writeFile('feckUser.json', JSON.stringify(deleteData), (err) => {
        if (!err) {
            res.send({message:'Delete Successful'})
        }
    })
  });
});

module.exports = deleteRoutes;
