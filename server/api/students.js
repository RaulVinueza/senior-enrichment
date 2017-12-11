const router = require('express').Router()
const Student = require('../db/models/Student')

router.get('/', (req, res, next) => {
    Student.findAll()
    .then(students => res.send(students))
    .catch(next)
})

router.get('/:id', (req, res, next) => {
    Student.findById(req.params.id)
    .then(student => res.send(student))
    .catch(next)
})

router.post('/', (req, res, next) => {
    Student.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        gpa: req.body.gpa,
        campusId: req.body.campusId
    })
    .then(student => res.send(student))
    .catch(next)
})

router.put('/:id', (req, res, next) => {
    Student.update({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        gpa: req.body.gpa,
        campusId: req.body.campusId
    }, {
        where: {
            id: req.params.id
        }
    }).then(() => res.sendStatus(202))
    .catch(next)
})

router.delete('/:id', (req, res, next) => {
    Student.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(() => res.sendStatus(202))
    .catch(next)
})

module.exports = router


//for testing


// {
// 	"firstName": "Marco",
// 	"lastName": "Polo",
// 	"email": "marco@polo.com",
// 	"gpa": 1.0
// }
