const express = require('express');
const engine = require('ejs-mate');
const path = require('path');

// initializations
const app = express();
require('./db');

// settings
app.set('port', process.env.PORT || 3000);
app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// middlewares
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// routes
app.use(require('./routes/index'));

// static files
app.use(express.static(path.join(__dirname, 'public')));

// Start the server
app.listen(app.get('port'), () => {
  console.log(`Server on port`, app.get('port'));
});