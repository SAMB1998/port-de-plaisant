const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const catwayRoutes = require('./routes/catway');
const reservationRoutes = require('./routes/reservationRoutes');
const swaggerSetup = require('./swagger');

dotenv.config();

const app = express();
app.use(cors()); // Assurez-vous que CORS est appliqué ici
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
app.use('/api/reservations', reservationRoutes);

// Ajoutez une route pour la racine
app.get('/', (req, res) => {
    res.send('Welcome to the Port de Plaisance API');
});

swaggerSetup(app, process.env.PORT || 5000);

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://${HOST}:${PORT}`));
