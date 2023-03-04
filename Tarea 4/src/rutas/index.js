const express = require('express');
const router = express.Router();

const noticiasRoutes = require('./noticias');

router.use(express.json());

router.use('/noticias',noticiasRoutes);


module.exports = router;