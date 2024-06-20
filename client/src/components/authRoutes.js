const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Route pour créer un utilisateur
router.post('/register', authController.register);

// Ajoutez les routes pour modifier et supprimer un utilisateur ici
// Route pour modifier un utilisateur
router.put('/:id', authController.updateUser);

// Route pour supprimer un utilisateur
router.delete('/:id', authController.deleteUser);

module.exports = router;
