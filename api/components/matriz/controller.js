
const sequelizeMatriz = require('../../../sequelize/matriz')

module.exports = {
    postMatriz: async (req, res) => {
        try {
            const {
                original,
                final,
                columna
            } = req.body
            const id = await sequelizeMatriz.postMatriz({
                original, 
                final, 
                columna
            });
            res.json({
                error: false,
                body: id
            });
        } catch (error) {
            res.json({
                error: true,
                mensaje: error
            })
        }
    },
    getAll: async (req, res) => {
        try {
            const lista = await sequelizeMatriz.getAllMatriz()
            res.json({
                error: false,
                body: lista
            });
        } catch (error) {
            res.json({
                error: true,
                mensaje: error
            })
        }
    },
    getOne: async (req, res) => {
        try {
            const {
                id
            } = req.headers
            const lista = await sequelizeMatriz.getMatriz(id)
            res.json({
                error: false,
                body: lista
            });
        } catch (error) {
            res.json({
                error: true,
                mensaje: error
            })
        }
    }
}