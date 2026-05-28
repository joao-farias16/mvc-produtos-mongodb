const express = require('express');

const router = express.Router();

const controller = require('../controllers/produtoController');

const auth = require('../middlawares/auth');

router.get('/', auth, controller.home);
router.get('/sobre', auth, controller.sobre);
router.get('/contato', auth, controller.contato);
router.get('/produtos', auth, controller.produtos);
router.post('/produtos/adicionar', controller.adicionar);
router.get('/produtos/editar/:id', controller.editarForm);
router.post('/produtos/editar/:id', controller.editar);
router.get('/produtos/excluir/:id', controller.excluir);

module.exports = router;