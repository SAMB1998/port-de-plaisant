const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const catwayRoutes = require('./routes/catway');
const reservationRoutes = require('./routes/reservationRoutes');
const swaggerSetup = require('./swagger'); // Assurez-vous que cette ligne est correcte

dotenv.config();

// Ajoutez ces lignes pour vérifier les variables d'environnement
console.log(`HOST: ${process.env.HOST}`);
console.log(`PORT: ${process.env.PORT}`);

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Error connecting to MongoDB', err);
});

app.use('/api/auth', authRoutes);
app.use('/api/catways', catwayRoutes);
app.use('/api/reservations', reservationRoutes); // Corrigez cette ligne

// Ajoutez cette ligne pour configurer Swagger
swaggerSetup(app, process.env.PORT || 5000);

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://${HOST}:${PORT}`));
