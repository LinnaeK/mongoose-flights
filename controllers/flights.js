var Flights = require('../models/flight')
var Ticket = require('../models/ticket')

module.exports = {
    new: newFlights,
    create,
    show
}

console.log('controller')
function newFlights(req, res){
    try {
        console.log("controllers line 12 newFlights")
        res.render('flights/new', {title: 'Add Flight'})
    } catch (error) {
        console.error(error)
        res.send(error)
    }
}

function create(req, res){
    // console.log(req.body)
    console.log("controllers line 17 create")
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
    console.log(Flights)
    console.log("I am the req: " +req.params.id)
    console.log("controllers line 29 show")
    Flights.findById(req.params.id, function(err, flight){
        console.log(flight)
            Ticket.find({flight: flight._id}, function(err, tickets){
                if(err){res.redirect('flights')}
                res.render('flights/show', {title:'', flight, tickets})
            })
    })
}