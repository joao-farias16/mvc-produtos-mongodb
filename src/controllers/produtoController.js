const Produto = require('../models/Produto');

exports.home = (req, res) => {
    res.render('home');
};

exports.sobre = (req, res) => {
    res.render('sobre');
};

exports.contato = (req, res) => {
    res.render('contato');
};

// LISTAR PRODUTOS
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

// CADASTRAR
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

// CARREGAR TELA DE EDIÇÃO
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

// EDITAR
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

// EXCLUIR
exports.excluir = async (req, res) => {
    try {
        await Produto.findByIdAndDelete(req.params.id);

        res.redirect('/produtos');
    } catch (error) {
        console.log(error);

        res.send('Erro ao excluir');
    }
};