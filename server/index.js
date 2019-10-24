const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.redirect("/products/8");
});

app.use("/products/:productid", express.static("dist"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
