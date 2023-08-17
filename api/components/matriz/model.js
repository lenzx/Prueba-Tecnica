const {sequelize} = require('../../../sequelize/conexion');
const {DataTypes} = require('sequelize');
const Matrix = sequelize.define('matrix', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    original: {
        type: DataTypes.JSON,
        allowNull: false
    },
    final: {
        type: DataTypes.JSON,
        allowNull: false
    },
    columna: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = Matrix;