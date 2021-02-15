//jshint esversion:6

const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html")
});

app.get("/bmicalculator", function (req, res){
  res.sendFile(__dirname + "/bmiCalculator.html")
})

app.post("/bmiCalculator", function(req, res){
var height = parseFloat(req.body.height);
var weight = parseFloat(req.body.weight);

var result = weight / (height * height);

res.send("Its " + result)

})

app.post("/", function(req, res){
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);

  var result = num1 + num2;

  res.send('The result of that calculation is ' + result);
});





app.listen(3000, function(){
  console.log("server: 3000")
});
