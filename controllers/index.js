var Flights = require('../models/flight')

module.exports = {
    index,
}

function index(req, res, next) {
    console.log(Flights)
    Flights.find({}, function(err, flights){
        console.log(flights)
        res.render('index', {title: 'Flights', flights})
    })
  }