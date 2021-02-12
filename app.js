const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Hello World! Gaurav");
});

app.listen(port, () => {
  console.log(`Examplee app listening at http://localhost:${port}`);
});
