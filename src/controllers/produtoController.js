const Produto = require('../models/Produto');

/**
 * Renderiza a página inicial da aplicação.
 *
 * @param {import('express').Request} req Objeto da requisição HTTP.
 * @param {import('express').Response} res Objeto da resposta HTTP.
 * @returns {void}
 */

exports.home = (req, res) => {
    res.render('home');
};

/**
 * Renderiza a página Sobre.
 *
 * @param {import('express').Request} req Objeto da requisição HTTP.
 * @param {import('express').Response} res Objeto da resposta HTTP.
 * @returns {void}
 */

exports.sobre = (req, res) => {
    res.render('sobre');
};

/**
 * Renderiza a página de contato.
 *
 * @param {import('express').Request} req Objeto da requisição HTTP.
 * @param {import('express').Response} res Objeto da resposta HTTP.
 * @returns {void}
 */

exports.contato = (req, res) => {
    res.render('contato');
};

/**
 * Lista todos os produtos cadastrados.
 *
 * @async
 * @param {import('express').Request} req Objeto da requisição HTTP.
 * @param {import('express').Response} res Objeto da resposta HTTP.
 * @returns {Promise<void>}
 * @throws {Error} Caso ocorra erro na consulta ao banco de dados.
 */

exports.produtos = async (req, res) => {
    try {
        const produtos = await Produto.find();

        res.render('produtos', {
            produtos,
            produtoEditar: null
        });
    } catch (error) {
        console.log(error);

        res.send('Erro ao carregar produtos');
    }
};

/**
 * Cadastra um novo produto.
 *
 * @async
 * @param {import('express').Request} req Dados enviados pelo formulário.
 * @param {import('express').Response} res Objeto da resposta HTTP.
 * @returns {Promise<void>}
 */

exports.adicionar = async (req, res) => {
    try {
        const {
            nome,
            preco,
            descricao,
            categoria
        } = req.body;

        await Produto.create({
            nome,
            preco,
            descricao,
            categoria
        });

        res.redirect('/produtos');
    } catch (error) {
        console.log(error);

        res.send('Erro ao adicionar produto');
    }
};

/**
 * Carrega a tela de edição de um produto.
 *
 * @async
 * @param {import('express').Request} req Objeto da requisição HTTP.
 * @param {import('express').Response} res Objeto da resposta HTTP.
 * @returns {Promise<void>}
 */

exports.editarForm = async (req, res) => {
    try {
        const produto = await Produto.findById(req.params.id);

        const produtos = await Produto.find();

        res.render('produtos', {
            produtos,
            produtoEditar: produto
        });
    } catch (error) {
        console.log(error);

        res.send('Erro');
    }
};

/**
 * Atualiza um produto existente.
 *
 * @async
 * @param {import('express').Request} req Dados do produto atualizados.
 * @param {import('express').Response} res Objeto da resposta HTTP.
 * @returns {Promise<void>}
 */

exports.editar = async (req, res) => {
    try {
        const {
            nome,
            preco,
            descricao,
            categoria
        } = req.body;

        await Produto.findByIdAndUpdate(
            req.params.id,
            {
                nome,
                preco,
                descricao,
                categoria
            }
        );

        res.redirect('/produtos');
    } catch (error) {
        console.log(error);

        res.send('Erro ao editar');
    }
};

/**
 * Exclui um produto do banco de dados.
 *
 * @async
 * @param {import('express').Request} req Objeto da requisição HTTP.
 * @param {import('express').Response} res Objeto da resposta HTTP.
 * @returns {Promise<void>}
 */

exports.excluir = async (req, res) => {
    try {
        await Produto.findByIdAndDelete(req.params.id);

        res.redirect('/produtos');
    } catch (error) {
        console.log(error);

        res.send('Erro ao excluir');
    }
};