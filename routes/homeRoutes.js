const router = require('express').Router();
// const {Galery, Projects} = require('../models');


router.get('/', (req, res) => {
    res.render('homepage');
});



module.exports = router; 