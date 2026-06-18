const mongoose = require('mongoose');

/**
 * @class Produto
 * @classdesc Modelo responsável pelo armazenamento e gerenciamento dos produtos no banco de dados MongoDB.
 */

const ProdutoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },

    preco: {
        type: Number,
        required: true
    },

    descricao: {
        type: String
    },

    categoria: {
        type: String
    }
});

module.exports = mongoose.model(
    'Produto',
    ProdutoSchema
);