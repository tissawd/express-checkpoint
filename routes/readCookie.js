var express = require('express');
var router = express.Router();
router.use(express.json());

router.get('/', function (req, res) {
    res.cookie('firstName', 'Curtis').send('Cookie Set');
})

module.exports = router;