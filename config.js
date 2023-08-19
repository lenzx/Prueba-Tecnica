module.exports = {
    api: {
        port: process.env.API_PORT || 3000,
    },
    sequelize: {
        database: process.env.SEQUELIZE_DB || 'api_matriz',
        host: process.env.SEQUELIZE_HOST || 'localhost',
        user: process.env.SEQUELIZE_USER || 'root',
        password: process.env.SEQUELIZE_PASSWORD || '',
        port: process.env.SEQUELIZE_PORT || 3306,
    }
}