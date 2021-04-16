var express = require('express');
var router = express.Router();
router.use(express.json());

router.get('/', function (req, res) {
    res.cookie('firstName', req.query.firstName)
    .res.cookie('lastName', req.query.lastName)
    .send('Cookie Set');
})

module.exports = router;