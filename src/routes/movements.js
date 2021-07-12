const { Router} = require('express');
const router = Router();

const Movement = require('../models/Movement');

const faker = require('faker');

router.get('/api/movements', async (req, res) =>{
    const movements = await Movement.find();
    res.json({movements: movements});
});

router.get('/api/movements/create', async (req, res) =>{
    await Movement.create({
        type: "ingreso",
        concept: req.body.concept,
        mount: req.body.mount
    });
    res.json({message: 'Movement created'});
});

router.get('/api/movements/createFaker', async (req, res) =>{
    await Movement.create({
        type: "ingreso",
        concept: faker.commerce.productName(),
        mount: faker.commerce.price()
    });
    res.json({message: 'Movement created'});
});

module.exports = router;