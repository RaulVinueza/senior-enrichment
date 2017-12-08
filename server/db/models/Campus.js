const db = require('../index')
const Sequelize = require('sequelize')

module.exports = db.define('campus', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    imgUrl: {
        type: Sequelize.STRING,
        defaultValue: 'http://via.placeholder.com/50x50'
    },
    description: Sequelize.TEXT
})