const express = require('express');
const burger = require('../models/burger')

const router = express.Router();

    router.get("/", function(req, res){
        burger.selectAll(data => {
            res.render('index', {burgers: data});
        })
    })
    router.post('/api/burgers', (req, res) => {
        burger.insertOne(['burger_name', 'devoured'], [req.body.burger_name, req.body.devoured], (result) => {
            res.json({ id: result.insertId })
        })
    });
    router.put('/api/burgers/:id', (req, res) => {
        const condition = `id = ${req.params.id}`;
    
        burger.updateOne(
            {
                devoured: req.body.devoured
            },
            condition,
            (result) => {
                if(result.changedRows === 0) {
                    return res.status(404).end();
                }
                res.status(200).end();
            }
        )
    });

    module.exports = router;