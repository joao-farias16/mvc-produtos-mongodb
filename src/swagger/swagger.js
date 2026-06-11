const swaggerJsdoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API Produtos',
            version: '1.0.0',
            description: 'Documentação da API de Produtos'
        }
    },
    apis: ['src/routes/*.js']
};

const specs = swaggerJsdoc(options);

module.exports = specs;