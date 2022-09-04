const fs = require("fs");
module.exports.getRandom = (req, res) => {
  fs.readFile("feckUser.json", (err, data) => {
    if (err) {
      res.write(err);
      res.end();
    } else {
      const newData = JSON.parse(data);
      let random = Math.floor(Math.random() * newData.length - 1);
      // console.log(random);
      if (random === -1) {
        random = newData.length - 1;
      }
      res.status(200).send(newData[random]);
      res.end();
    }
  });
};
