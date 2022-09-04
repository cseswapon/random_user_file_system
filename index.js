const express = require("express");
const deleteRoutes = require("./routes/v1/user-delete.route");
const routes = require("./routes/v1/user.routes");
const routesSave = require("./routes/v1/user.save");
const allUser = require("./routes/v1/userAll.route");
const upDateRoutes = require("./routes/v1/userUpdate.routes");
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/v1/user/random", routes);
app.use("/api/v1/user/all", allUser);
app.use("/api/v1/user/save", routesSave);
app.use("/api/v1/user/update", upDateRoutes);
app.use("/api/v1/user/delete", deleteRoutes);

app.get("/", (req, res) => {
  res.status(200).send({ message: "Random User" });
});

app.get("*", (req, res) => {
  res.status(404).send({ message: "Route Not Found" });
});

app.listen(port, () => {
  console.log("Server is running port", port);
});
