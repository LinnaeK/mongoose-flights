var Flights = require('../models/flight')
var Ticket = require('../models/ticket')

module.exports = {
    new: newTickets,
    create,
}

console.log('tickets controller')

function newTickets(req, res){
    Flights.findById(req.params.id, function( err, flight) {
        res.render(`tickets/new`,{
            title: 'New Ticket',
            flight
        })
    })
}


function create(req, res){
    Flights.findById(req.params.id, function(err, flight){
        req.body.flight = req.params.id 
        console.log(req.params.id)
        Ticket.create(req.body, function(err, ticket){
            console.log(req.body)
            res.redirect(`flights/${req.params.id}`)
    })
    })
}