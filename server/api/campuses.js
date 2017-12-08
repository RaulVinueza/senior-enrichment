const router = require('express').Router()
const db = require('../db')

router.get('/', (req, res, next) => {
    res.json({reply: 'getting all the campuses'})
})

router.get('/:id', (req, res, next) => {
    res.json({campusSelected: req.params.id})
})

module.exports = router