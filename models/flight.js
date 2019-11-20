const Mongoose = require('mongoose')

const Schema = Mongoose.Schema

const destinationSchema = new Schema({
  airport: {
    type: String,
    enum: ['AUS', 'DAL', 'LAX', 'SAN', 'SEA']
  },
  arrival: Date,
})

const Flights = new Schema({
  airline: {
    type: String,
    enum: ['American', 'Southwest', 'United'] 
  },
  flightNo: {
      type: Number, min: 10, max: 9999,
  },
  departs: {
      type: Date,
      default: Date.now() + 60*60*24*366*1000,
  },
  airport: {
    type: String,
    enum: ['AUS', 'DAL', 'LAX', 'SAN', 'SEA'],
    default: 'SAN'
  },
  destinations: [destinationSchema]
})

module.exports = Mongoose.model('flights', Flights)
