const Campus = require('./db/models/Campus')
const Student = require('./db/models/Student')
const db = require('./db/models')

const campuses = [
    {
        name: 'Mars',
        imgUrl: 'http://via.placeholder.com/50x50',
        description: "Some description"
    },
    {
        name: 'Terra',
        imgUrl: 'http://via.placeholder.com/50x50',
        description: "Some description"
    },
    {
        name: 'Saturn',
        imgUrl: 'http://via.placeholder.com/50x50',
        description: "Some description"
    },
    {
        name: 'Pluto',
        imgUrl: 'http://via.placeholder.com/50x50',
        description: "Some description"
    }
]

const students = [
    {
        firstName: "Harry",
        lastName: "Potter",
        email: "example@email.com",
        gpa: 2.0,
        campusId: 1
    },
    {
        firstName: "Hermione",
        lastName: "Granger",
        email: "example@email.com",
        gpa: 2.0,
        campusId: 1
    },
    {
        firstName: "Marcellus",
        lastName: "Wallace",
        email: "example@email.com",
        gpa: 2.0,
        campusId: 2
    },
    {
        firstName: "Donnie",
        lastName: "Darko",
        email: "example@email.com",
        gpa: 2.0,
        campusId: 2
    },
    {
        firstName: "Ron",
        lastName: "Weasley",
        email: "example@email.com",
        gpa: 2.0,
        campusId: 3
    },
    {
        firstName: "Jon",
        lastName: "Snow",
        email: "example@email.com",
        gpa: 2.0,
        campusId: 3
    },
    {
        firstName: "Jeffrey",
        lastName: "Lebowski",
        email: "example@email.com",
        gpa: 2.0,
        campusId: 4
    },
    {
        firstName: "Bruce",
        lastName: "Wayne",
        email: "example@email.com",
        gpa: 2.0,
        campusId: 4
    }
]

const seed = () =>
Promise.all(campuses.map(campus =>
  Campus.create(campus))
)
.then(() =>
Promise.all(students.map(student =>
  Student.create(student))
))

const main = () => {
console.log('Syncing db...');
db.sync({ force: true })
  .then(() => {
    console.log('Seeding databse...');
    return seed();
  })
  .catch(err => {
    console.log('Error while seeding');
    console.log(err.stack);
  })
  .then(() => {
    db.close();
    return null;
  });
};

main();