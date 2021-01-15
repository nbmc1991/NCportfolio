const router = require('express').Router();
// const {Galery, Projects} = require('../models');


router.get('/', (req, res) => {
    res.render('homepage');
});

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/projects', (req, res) => {
    res.render('projects');
});



module.exports = router; 