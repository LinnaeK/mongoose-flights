const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/flights',{
    useNewUrlParser: true,
    useCreateIndex: true, 
    useUnifiedTopology: true
})

const db = mongoose.connection