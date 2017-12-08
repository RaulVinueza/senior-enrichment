const db = require('../index')
const Sequelize = require('sequelize')

module.exports = db.define('student', {
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    gpa: {
        type: Sequelize.FLOAT
    }
})