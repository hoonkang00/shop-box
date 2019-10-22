const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.use("/", express.static(path.join(__dirname, "../dist")));

app.get("/", (req, res) => {
  res.send("Please navigate to /products/:productid");
});

app.use("/products/:productid", express.static("dist"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
