const { Router} = require('express');
const router = Router();
const quotesCollection = require('../database');

const Movement = require('../models/Movement');

const faker = require('faker');

router.get('/', async (req, res) =>{
    const movements = await Movement.find();
    res.json({movements: movements});
});

router.post('/', async (req, res) =>{
    console.log(req.body);
    const { type, concept, mount } = req.body;
    if(type && concept && mount){
        const movement = new Movement(req.body);
        await movement.save();
        res.send('received')
    }else{
        res.send('Bad request')
    }
    
    
});

module.exports = router;