//these are the dependencies 
const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");

//these are the routes that will needed
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        let hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res) {
    burger.insertOne([
        "burger_name", "devoured"
    ], [
        req.body.burger_name, req.body.devoured
    ], function(result) {
        res.json({ id: result.insertId });
    });
});
