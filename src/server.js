require('dotenv').config();

const express = require('express');
const path = require('path');

const connectDB = require('./config/db');

const routes =
require('./routes/produtoRoutes');

const app = express();

app.set(
    'view engine',
    'ejs'
);

app.set(
    'views',
    path.join(
        __dirname,
        'views'
    )
);

app.use(
    express.urlencoded({
        extended:true
    })
);

app.use(
    express.static(
        path.join(
            __dirname,
            'public'
        )
    )
);

app.use(routes);

const PORT =
process.env.PORT || 3000;

async function start(){

    await connectDB();

    app.listen(
        PORT,
        ()=>{
            console.log(
                `Servidor rodando:
                http://localhost:${PORT}`
            )
        }
    );

}

start();