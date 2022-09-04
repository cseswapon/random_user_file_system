const fs = require("fs");
const createReadStream = fs.createReadStream("feckUser.json");

module.exports.saveUser = (req, res) => {
  const body = req.body;
  const { id, gender, name, contact, address, photoUrl } = body;
  const user = {
    id,
    gender,
    name,
    contact,
    address,
    photoUrl,
  };
  createReadStream.on("data", (chunk) => {
    const newUser = JSON.parse(chunk.toString());
    newUser.push(user);
    fs.writeFile("feckUser.json", JSON.stringify(newUser), (err) => {
      if (!err) {
        res.send({ message: "Successfully Data Save" });
      } else {
        res.send({ message: "Something is wrong" });
      }
    });
  });
};
