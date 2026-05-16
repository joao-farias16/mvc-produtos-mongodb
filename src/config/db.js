const mongoose = require('mongoose');

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI);

        console.log('MongoDB conectado');
    } catch (error) {
        console.log('Erro:', error);
    }
}

module.exports = connectDB;