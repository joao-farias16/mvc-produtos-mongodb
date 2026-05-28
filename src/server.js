require('dotenv').config();

const express = require('express');
const path = require('path');

const session = require('express-session');
const cookieParser = require('cookie-parser')

const connectDB = require('./config/db');

const routes = require('./routes/produtoRoutes');
const authRoutes = require('./routes/authRoutes')

const app = express();

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended:true }));
app.use(express.json());

app.use(session({
    secret: 'segredo',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60
    }
}));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/login', (req, res) => res.render('login'));

app.use(routes);
app.use(authRoutes);

const PORT = process.env.PORT || 3000;

async function start(){
    await connectDB();

    app.listen(PORT, ()=>{
        console.log(`Servidor rodando: http://localhost:${PORT}`)
    });
}

start();