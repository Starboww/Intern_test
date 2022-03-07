const express = require("express");
const app = express();
const server = require("http");
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(express.text())
app.listen(5000);
server.createServer(app);
app.get("/", (req, res) => {
  res.sendFile(__dirname+"/index.html")
});
let body 
function su()
{ 
 return body
}
app.post("/jsonapi", (req, res) => {
   body = req.body;
  console.log(body)
  if (Object.keys(body).length >= 2) {
    res.send("Success").status(201);
  }
  else {
      res.send('Error').status(400)
  }

});
