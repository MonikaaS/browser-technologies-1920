const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(express.static("public"));
app.set("view engine", "ejs");

let text = "";
let stap1 = "";
let stap2 = "";
let stap3 = "";

//post route for selecting/writing values
app.post("/save", function (req, res) {
  stap1 = req.body.stap1;
  stap2 = req.body.stap2;
  text = req.body.stap3;
  stap3 = req.body.stap4;

  res.redirect("/");
});

app.post("/order", function (req, res) {
  stap1 = req.body.stap1;
  stap2 = req.body.stap2;
  text = req.body.stap3;
  stap3 = req.body.stap4;

  res.render("pages/order", {
    text: text,
    stap1: stap1,
    stap2: stap2,
    stap3: stap3
  });
});

//render the ejs and display added task, completed task
app.get("/", function (req, res) {
  res.render("pages/index", {
    text: text,
    stap1: stap1,
    stap2: stap2,
    stap3: stap3,
  });
});



//app.listen(port, () => console.log(`Example app listening on port ${port}`));
app.listen(process.env.PORT || 4000);