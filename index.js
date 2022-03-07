const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.htm");
});

app.post("/", (req, res) => {
  console.log(req.body)
  let body;
  body = req.body;
  if (Object.keys(body).length >= 1) {
    var tt = req.body.tt;
    let ud = JSON.parse(tt);
    res.json(ud);
  }
  else {
      res.send('Error').status(400)
  }
});

app.listen(5000, () => {
  console.log("Application started and Listening on port 5000");
});