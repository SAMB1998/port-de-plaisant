const express = require('express');
const router = express.Router();
const reservationController = require('../controllers/reservationController');

/**
 * @swagger
 * tags:
 *   name: Reservations
 *   description: API pour les réservations
 */

/**
 * @swagger
 * /api/catways/{id}/reservations:
 *   post:
 *     summary: Créer une nouvelle réservation
 *     tags: [Reservations]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID du catway
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Reservation'
 *     responses:
 *       201:
 *         description: Réservation créée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Reservation'
 *       404:
 *         description: Catway non trouvé
 *       500:
 *         description: Erreur serveur
 */
router.post('/:id/reservations', reservationController.createReservation);

/**
 * @swagger
 * /api/catways/{id}/reservations:
 *   get:
 *     summary: Obtenir toutes les réservations pour un catway spécifique
 *     tags: [Reservations]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID du catway
 *     responses:
 *       200:
 *         description: Liste des réservations
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Reservation'
 *       500:
 *         description: Erreur serveur
 */
router.get('/:id/reservations', reservationController.getReservationsByCatway);

/**
 * @swagger
 * /api/catways/{id}/reservations/{idReservation}:
 *   get:
 *     summary: Obtenir une réservation par ID
 *     tags: [Reservations]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID du catway
 *       - in: path
 *         name: idReservation
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la réservation
 *     responses:
 *       200:
 *         description: Détails de la réservation
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Reservation'
 *       404:
 *         description: Réservation non trouvée
 *       500:
 *         description: Erreur serveur
 */
router.get('/:id/reservations/:idReservation', reservationController.getReservation);

/**
 * @swagger
 * /api/catways/{id}/reservations/{idReservation}:
 *   delete:
 *     summary: Supprimer une réservation par ID
 *     tags: [Reservations]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID du catway
 *       - in: path
 *         name: idReservation
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la réservation
 *     responses:
 *       200:
 *         description: Réservation supprimée avec succès
 *       404:
 *         description: Réservation non trouvée
 *       500:
 *         description: Erreur serveur
 */
router.delete('/:id/reservations/:idReservation', reservationController.deleteReservation);

module.exports = router;
