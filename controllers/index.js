var Flights = require('../models/flight')
var moment = require('moment')

module.exports = {
    index,
}

function index(req, res, next) {
    console.log(Flights)
    Flights.find({}, function(err, flights){
        flights.arrival = moment(flights.arrival)
        console.log(flights)
        res.render('index', {
            moment: moment,
            title: 'Flights', 
            flights,
        })
    })
  }