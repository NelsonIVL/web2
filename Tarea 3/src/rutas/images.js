const router = require('express').Router();
const path = require('path');

router.get('', (req, res) => {
    res.sendFile(path.join(path.resolve(__dirname,'..','..'),'vistas','images.html'));
});

module.exports = router;