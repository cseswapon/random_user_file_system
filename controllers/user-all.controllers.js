const fs = require("fs");

module.exports.allUser = (req, res) => {
  const { limit } = req.query;
    if (limit) {
        fs.readFile("feckUser.json", (err, data) => {
            if (err) {
                res.send({ message: "Something Wrang" });
                res.end();
            }
            const newData = JSON.parse(data);
            res.status(200).send(newData.slice(0,limit));
            res.end();
        })
    } else {
        fs.readFile("feckUser.json", (err, data) => {
          if (err) {
            res.send({ message: "Something Wrang" });
            res.end();
          } else {
            res.status(200).send(JSON.parse(data));
            res.end();
          }
        });
    }
};
