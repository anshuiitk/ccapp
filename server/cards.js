var bodyParser = require('body-parser');
var express = require('express');
var router = express.Router();
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

var cards = require('./cards.json')

router.get('/', function (req, res) {
    res.json(cards);
});

router.get('/:id', function (req, res) {
    var id = +req.params.id;

    var card = cards.filter(m => m.id === id).pop();

    res.json(card);
});

router.post('/', function (req, res) {
    var card = req.body;
    card.id = card.id || Date.now();
    cards.unshift(card);

    var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    res.location(fullUrl + '/' + card.id);

    res.statusCode = 201;
    res.end();
});

router.put('/:id', function (req, res) {
    var newCard = req.body;
    var id = +req.params.id;

    var oldCard = cards.filter(m => m.id === id).pop();
    Object.assign(oldCard, newCard);

    res.statusCode = 204;
    res.end();
});

router.delete('/:id', function (req, res) {
    var id = +req.params.id;

    cards = cards.filter(m => m.id !== id);

    res.statusCode = 204;
    res.end();
});

module.exports = router;