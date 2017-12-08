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
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    gpa: {
        type: Sequelize.FLOAT,
        validate: {
            max: 4.0,
            min: 0.0
        }
    }
}, {
    getterMethods: {
        name() { return this.firstName + ' ' + this.lastName }
    }
})