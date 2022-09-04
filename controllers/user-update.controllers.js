const fs = require("fs");
const createReadStream = fs.createReadStream("feckUser.json", "utf-8");

module.exports.updateUser = (req, res) => {
  const { id } = req.query;
  createReadStream.on("data", (data) => {
    const allUser = JSON.parse(data);
    const singleUser = allUser.find((user) => user.id == id);
    // update user info
    (singleUser.name = "swapon"),
      (singleUser.gender = "male"),
      (singleUser.address = "Tangail");
    fs.writeFile("feckUser.json", JSON.stringify(allUser), (err) => {
      if (!err) {
        res.send({ message: "Update Successfully" });
      }
    });
  });
};
