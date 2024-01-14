// jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app =  express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

var items = ["Sports", "Movies"];
var item = "";

app.get("/",function(req,res){
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var today = new Date();
    var day = today.toLocaleDateString("en-US",options);
    res.render("list",
    {
        listTitle:day,
        newItems:items
    });
});

app.post("/",function(req,res){
    item = req.body.newItem ;
    items.push(item);
    res.redirect("/");
})
app.listen(3000,function(){
    console.log("Server started on port 3000");
});
