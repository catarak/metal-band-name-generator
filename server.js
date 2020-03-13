const express = require("express");
const app = express();

app.use(express.static("public"));


const getBandName = require("./bandNameGenerator.js");

app.get("/bandName", (req, res) => {
  res.json({ bandName: getBandName() });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Express app listening on port 3000");
});
