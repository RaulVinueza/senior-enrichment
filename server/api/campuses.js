const router = require('express').Router()
const db = require('../db')
const Campus = require('../db/models/Campus')

router.get('/', (req, res, next) => {
    Campus.findAll()
    .then( campuses => res.send(campuses))
    .catch(next)
})

router.get('/:id', (req, res, next) => {
    Campus.findById(req.params.id)
    .then(campus => res.send(campus))
    .catch(next)
})

router.post('/', (req, res, next) => {
    Campus.create({
        name: req.body.name,
        imageURL: req.body.imageURL,
        description: req.body.description
    }).then( campus => res.send(campus))
    .catch(next)
})

router.put('/:id', (req, res, next) => {
    Campus.update({
        name: req.body.name,
        imageURL: req.body.imageURL,
        description: req.body.description
    }, {
        where: {id: req.params.id}
    })
    .then(() => res.sendStatus(202))
    .catch(next)
})

router.delete('/:id', (req, res, next) => {
    Campus.destroy({
        where: {id: req.params.id}
    })
    .then(() => res.sendStatus(202))
    .catch(next)
})

module.exports = router

//for testing

//  {
//     "name": "Chicago",
//     "imageURL": "http://lorempixel.com/400/200",
//     "description": "this is a description"
//  }