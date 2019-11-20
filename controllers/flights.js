var Flights = require('../models/flight')
var Ticket = require('../models/ticket')

module.exports = {
    new: newFlights,
    create,
    show
}
console.log('controller')
function newFlights(req, res){
    res.render('flights/new', {title: 'Add Flight'})
}

function create(req, res){
    console.log(req.body)
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
      }
    var flight = new Flights(req.body)
    flight.save(function(err){
        if (err) return res.redirect('flights/new')
        res.redirect('/')
    })
}

function show(req, res){
    Flights.findById(req.params.id, function(err, flight){
        Ticket.find({flight: flight._id}, function(err, tickets){
            if(err){res.redirect('flights')}
            res.render('flights/show', {title:'Flight Information', flight, tickets})
        })
    })
}