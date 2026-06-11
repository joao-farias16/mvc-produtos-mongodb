const express = require('express');

const router = express.Router();

const authController = require('../controllers/authController');

/**
 * @swagger
 * /login:
 *   get:
 *     summary: Exibe a página de login
 *     tags:
 *       - Autenticação
 *     responses:
 *       200:
 *         description: Página carregada
 */
router.get('/login', authController.loginPage);

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Realiza login
 *     tags:
 *       - Autenticação
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: admin@gmail.com
 *               senha:
 *                 type: string
 *                 example: 123
 *     responses:
 *       200:
 *         description: Login realizado com sucesso
 *       401:
 *         description: Credenciais inválidas
 */
router.post('/login', authController.login);

/**
 * @swagger
 * /logout:
 *   get:
 *     summary: Realiza logout
 *     tags:
 *       - Autenticação
 *     responses:
 *       200:
 *         description: Logout realizado
 */
router.get('/logout', authController.logout);

module.exports = router;