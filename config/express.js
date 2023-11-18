var express = require('express');
var bodyParser = require('body-parser');
var dbManager = require('./DBManager'); // Ensure this path is correct

module.exports = function () {
    var app = express();

    app.set('views', './app/views');
    app.set('view engine', 'ejs');
    app.use(express.static('./public'));
    app.use(express.static("./node_modules"));

    // Middleware to parse request body
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    // Home route
    app.get('/', async function(req, res, next) {
      const books = await dbManager.getAllBookInfo();
      res.render('home', { books: books });
    });

    // Edit route
    app.get('/edit', function(req, res, next) {
      res.render('edit');
    });

    // Add a new book
    app.post('/book', async function(req, res, next) {
      const result = await dbManager.addBookInfo(req.body);
      if (result) {
        res.redirect('/');
      } else {
        res.status(500).send('Failed to add the book');
      }
    });

    // Delete a book by title
    app.delete('/book/:title', async function(req, res, next) {
      const result = await dbManager.removeBookInfo(req.params.title);
      if (result) {
        res.send('Book deleted successfully');
      } else {
        res.status(500).send('Failed to delete the book');
      }
    });

    return app;
};
