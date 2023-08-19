const {Sequelize} = require('sequelize');
const config = require('../config');

const sequelize = new Sequelize(config.sequelize.database, config.sequelize.user, config.sequelize.password, {
    host: config.sequelize.host,
    dialect: 'mysql',
    port: config.sequelize.port,
});

module.exports = {sequelize};


