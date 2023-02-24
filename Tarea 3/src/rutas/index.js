const express = require('express');
const router = express.Router();

const hobbiesRoutes = require('./hobbies');
const homeRoutes = require('./home');
const imagesRoutes = require('./images');


router.use('/home',homeRoutes);
router.use('/hobbies',hobbiesRoutes);
router.use('/images',imagesRoutes);


module.exports = router;