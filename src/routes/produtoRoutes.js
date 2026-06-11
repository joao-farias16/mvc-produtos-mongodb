const express = require('express');

const router = express.Router();

const controller = require('../controllers/produtoController');
const auth = require('../middlawares/auth');

router.get('/', auth, controller.home);
router.get('/sobre', auth, controller.sobre);
router.get('/contato', auth, controller.contato);

/**
 * @swagger
 * /produtos:
 *   get:
 *     summary: Lista todos os produtos
 *     tags:
 *       - Produtos
 *     responses:
 *       200:
 *         description: Produtos carregados com sucesso
 *       500:
 *         description: Erro interno do servidor
 */
router.get('/produtos', auth, controller.produtos);

/**
 * @swagger
 * /produtos/adicionar:
 *   post:
 *     summary: Cadastra um novo produto
 *     tags:
 *       - Produtos
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *                 example: Notebook Gamer
 *               preco:
 *                 type: number
 *                 example: 3500
 *               descricao:
 *                 type: string
 *                 example: Notebook para jogos
 *               categoria:
 *                 type: string
 *                 example: Informática
 *     responses:
 *       201:
 *         description: Produto cadastrado com sucesso
 *       400:
 *         description: Dados inválidos
 */
router.post('/produtos/adicionar', controller.adicionar);

/**
 * @swagger
 * /produtos/editar/{id}:
 *   get:
 *     summary: Carrega os dados de um produto para edição
 *     tags:
 *       - Produtos
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Produto encontrado
 *       404:
 *         description: Produto não encontrado
 */
router.get('/produtos/editar/:id', controller.editarForm);

/**
 * @swagger
 * /produtos/editar/{id}:
 *   post:
 *     summary: Atualiza um produto
 *     tags:
 *       - Produtos
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               preco:
 *                 type: number
 *               descricao:
 *                 type: string
 *               categoria:
 *                 type: string
 *     responses:
 *       200:
 *         description: Produto atualizado
 *       404:
 *         description: Produto não encontrado
 */
router.post('/produtos/editar/:id', controller.editar);

/**
 * @swagger
 * /produtos/excluir/{id}:
 *   get:
 *     summary: Exclui um produto
 *     tags:
 *       - Produtos
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Produto excluído
 *       404:
 *         description: Produto não encontrado
 */
router.get('/produtos/excluir/:id', controller.excluir);

module.exports = router;