const express = require("express");
const compression = require("compression");
const app = express();
const port = 3000;

app.use(compression());

app.use("/products/:productid", express.static("dist"));
app.get("/", (req, res) => {
  res.redirect("/products/8");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
