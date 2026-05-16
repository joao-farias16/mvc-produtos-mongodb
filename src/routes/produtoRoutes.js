const express = require('express');

const router = express.Router();

const controller =
require('../controllers/produtoController');

router.get('/', controller.home);
router.get('/sobre', controller.sobre);
router.get('/contato', controller.contato);
router.get('/produtos', controller.produtos);
router.post('/produtos/adicionar', controller.adicionar);
router.get('/produtos/editar/:id', controller.editarForm);
router.post('/produtos/editar/:id', controller.editar);
router.get('/produtos/excluir/:id', controller.excluir);

module.exports = router;