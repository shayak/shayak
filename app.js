var express = require('express'),
	bodyParser = require('body-parser'),
	path = require('path');

var routes = require('./routes/router');
	
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/scripts', express.static(path.join(__dirname, 'scripts')));
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/templates', express.static(path.join(__dirname, 'templates')));
app.use('/partials', express.static(path.join(__dirname, 'views/partials')));
app.use('/', routes);
app.listen(process.env.PORT || 5000);

console.log('listening...');
