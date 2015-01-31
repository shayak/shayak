var express = require('express'),
    path = require('path'),
    router = express.Router();

router.get('/', function(req, res)
{
    res.sendFile(path.resolve("views/index.html"));
});

router.get('/gmaps', function(req, res)
{
	res.sendFile(path.resolve("views/gmaps.html"));
});

module.exports = router;
