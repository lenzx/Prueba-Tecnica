const express = require('express');
const config = require('./config');
const matrizRouter = require('./api/components/matriz/route');
const {sequelize} = require('./sequelize/conexion');


const app = express();
app.use(express.json());
app.use(express.static('public'));
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/view/index.html')
});
app.get('/matriz', (req, res) => {
  res.sendFile(__dirname + '/view/matrices.html')
}); 

app.use('/api/matriz', matrizRouter);

app.listen(config.api.port, async () => {
  try {
    await sequelize.sync({force: false})
    console.log(`server on ${config.api.port}`);

  } catch (error) {
    console.log(`error en la conexion: ${error}`);
  }
});

