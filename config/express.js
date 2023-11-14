var express = require('express');

module.exports = function () {
    var app = express();

    app.set('views', './app/views');
    app.set('view engine', 'ejs');
    app.use(express.static('./public'));
    app.use(express.static("./node_modules"));


    //home
    app.get('/', function(req, res, next) {
      res.render('home', { db: 'db' });
    });

    //edit
    app.get('/edit', function(req, res, next) {
      res.render('edit', { db: 'db' });
    });
    app.post('', function(req, res, next) {
      
    });
    app.delete('', function(req, res, next) {
      
    });
    return app;
};
