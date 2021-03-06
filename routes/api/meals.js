const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Meal = require('../../models/Meal');


router.get('/', (req, res) => {
    Meal.find()
        .sort({ date: -1 })
        .then(meals => res.json(meals))
        .catch(err => res.status(404).json({ nomealsfound: 'No meals found' }));
});

router.get('/search', (req, res) => {
    var keywords_re = req.query.keyword.split(" ").join("|");
    var re = new RegExp(keywords_re, "i");
    Meal.find({category: re})
        .sort({ date: -1 })
        .then(meals => res.json(meals))
        .catch(err => res.status(404).json({ nomealsfound: 'No meals found' }));
});

router.post('/',
    (req, res) => {
        
        const newMeal = new Meal({
            title: req.body.title,
            category: req.body.category,
            ingredients: req.body.ingredients,
            photoUrl: req.body.photoUrl,
            cookingInstruction: req.body.cookingInstruction
        });

        newMeal.save().then(meal => res.json(meal));
    }
);

router.get('/:id', (req, res) => {
    Meal.findById(req.params.id)
        .then(meal => res.json(meal))
        .catch(err =>
            res.status(404).json({ notmealfound: 'this meal no longer exist' })
        );
});

module.exports = router;