const express = require('express');
const burger = require('../models/burger')

module.exports = app => {
    app.get("/index", function(req, res){
        burger.all(data => {
            res.render('index', {burgers: data});
        })
    })
}