const Matrix = require('../api/components/matriz/model')
module.exports = {
    postMatriz: async ({original, final, columna}) => {
        const newMatriz = await Matrix.create({original, final, columna});
        return newMatriz.id ;
    },
    getAllMatriz: async () => {
        const allMatriz = await Matrix.findAll();
        return allMatriz;
    },
    getMatriz: async (id) => {
        const oneMatriz = await Matrix.findByPk(id);
        return oneMatriz;
    }
}