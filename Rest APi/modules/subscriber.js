const mongoose = require('mongoose')

const subscriberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    subscribertoChannel:{
        type: String,
        required: true
    },
    subscribeDate:{
        type: String,
        required: true,
        default: Date.now
    }
})


module.exports = mongoose.model('Subscriber' , subscriberSchema)