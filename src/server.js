require('dotenv').config();

const express = require('express');
const path = require('path');

const session = require('express-session');
const cookieParser = require('cookie-parser');

const connectDB = require('./config/db');

const routes = require('./routes/produtoRoutes');
const authRoutes = require('./routes/authRoutes');

const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger/swagger');

const app = express();

app.set('view engine', 'ejs');

app.set(
    'views',
    path.join(__dirname, 'views')
);

// Permite receber JSON (Swagger)
app.use(express.json());

// Permite receber dados de formulários HTML
app.use(
    express.urlencoded({
        extended: true
    })
);

app.use(
    express.static(
        path.join(__dirname, 'public')
    )
);

app.use(cookieParser());

app.use(
    session({
        secret: process.env.SESSION_SECRET || 'segredo123',
        resave: false,
        saveUninitialized: false
    })
);

// Swagger
app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerSpec)
);

// Rotas
app.use(authRoutes);
app.use(routes);

const PORT = process.env.PORT || 3000;

async function start() {

    try {

        await connectDB();

        app.listen(PORT, () => {
            console.log(
                `Servidor rodando: http://localhost:${PORT}`
            );
        });

    } catch (error) {

        console.error(
            'Erro ao iniciar servidor:',
            error
        );

    }

}

start();