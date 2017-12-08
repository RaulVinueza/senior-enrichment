const router = require('express').Router()
const db = require('../db')

router.get('/', (req, res, next) => {
    res.json({reply: 'getting all the campuses'})
})

router.get('/:id', (req, res, next) => {
    res.json({campusSelected: req.params.id})
})

router.post('/', (req, res, next) => {
    res.json(req.body)
})

router.put('/:id', (req, res, next) => {
    res.json(req.body)
})

router.delete('/:id', (req, res, next) => {
    res.json(req.body)
})

module.exports = router