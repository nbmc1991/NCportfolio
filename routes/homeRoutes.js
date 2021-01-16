const router = require('express').Router();
// const {Galery, Projects} = require('../models');
// const { Gallery } = require('../models');


router.get('/', (req, res) => {
    res.render('homepage');
});

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/portfolio', (req, res) => {
    res.render('portfolio');
});

// router.get('/portfolio', (req, res) => {
//     res.render('project');
// });

router.get('/', async (req, res) => {
    try {
        const dbGalleryData = await Gallery.findAll({
            include: [
                {
                    model: Painting,
                    attributes: ['filename', 'description'],
                },
            ],
        });

        const galleries = dbGalleryData.map((gallery) =>
            gallery.get({ plain: true })
        );

        res.render('homepage', {
            galleries,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});





module.exports = router; 