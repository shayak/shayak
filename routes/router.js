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

router.get('/restUI', function(req, res)
{
    res.sendFile(path.resolve("views/restUI.html"));
});

router.get('/cosmo', function(req, res)
{
	res.sendFile(path.resolve("views/cosmo.html"));
});

module.exports = router;
