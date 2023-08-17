const express = require('express');
const router = express.Router();
const matrizController = require('./controller');


router.post('/', matrizController.postMatriz);
router.get('/', matrizController.getAll);
router.get('/byid', matrizController.getOne);

module.exports = router;
