const express = require('express')
const router = express.Router()
const Subscriber = require('./modules/subscriber')
// const subscriber = require('./modules/subscriber')





// Getting One
router.get('/' , async (req , res) => {
    try {
        const subscriber = await Subscriber.find()
        res.json(subscriber)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})

// Getting all

router.get('/:id ', getSubscriber , (req , res) => {
    res.send(res.subscriber)
})







// Creating One
router.post('/' , async (req , res) => {
    const subscriber = new Subscriber({
        name: req.body.name,
        subscribertoChannel: req.body.subscribertoChannel
    }) 
    try {
        const newSubscriber = await subscriber.save()
        res.status(201).json(newSubscriber)
    } catch (err) {
        res.status(400).json({message: err.message})
    }
})





// Updating One 
router.patch('/id:' , getSubscriber , async (req , res ) => {
    if(req.body.name != null){
        res.subscriber.name = req.body.name
    }
    if(req.body.subscribertoChannel != null){
        res.subscriber.name = req.body.subscribertoChannel
    }   
    try {
        const updatedSubsciber = await res.subscriber.save()
        res.json(updatedSubsciber)
    } catch (err) {
        res.status(400).json({message: err.message})
    }
})





 
// Deleting One
router.delete('/:id' , getSubscriber, async (req , res) => {
    try {
        await res.subscriber.remove()
        res.json({message:"Deleted Subscriber"})
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})





// Midlle Ware Function

async function getSubscriber(req, res , next) {
    try {
        subscriber = await Subscriber.findById(req.params.id)
        if (subscriber == null) {
            return res.status(404).json({message: 'Cannot Find Subscriber'})
        }
    } catch (err) {
        res.status(500).json({message: err.message})
    }
    res.subscriber = subscriber
    next()
}


module.exports = router 