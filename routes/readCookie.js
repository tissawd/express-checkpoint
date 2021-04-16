var express = require('express');
var router = express.Router();
router.use(express.json());

router.get('/', function (req, res) {
    res.send(req.headers.cookie)
})

module.exports = router;