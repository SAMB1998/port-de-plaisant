const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const express = require('express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Port de Plaisance API',
      version: '1.0.0',
      description: 'API documentation for Port de Plaisance',
    },
    servers: [
      {
        url: 'http://localhost:5000',
      },
    ],
    components: {
      schemas: {
        Reservation: {
          type: 'object',
          required: ['clientName', 'boatName', 'checkIn', 'checkOut'],
          properties: {
            _id: {
              type: 'string',
              description: 'ID de la réservation',
            },
            catway: {
              type: 'string',
              description: 'ID du catway associé',
            },
            clientName: {
              type: 'string',
              description: 'Nom du client',
            },
            boatName: {
              type: 'string',
              description: 'Nom du bateau',
            },
            checkIn: {
              type: 'string',
              format: 'date-time',
              description: 'Date et heure d\'arrivée',
            },
            checkOut: {
              type: 'string',
              format: 'date-time',
              description: 'Date et heure de départ',
            },
            __v: {
              type: 'integer',
              description: 'Version du document',
            },
          },
        },
      },
    },
  },
  apis: ['./src/routes/*.js'], // Chemin vers vos fichiers de route
};

const swaggerSpec = swaggerJsdoc(options);

function swaggerDocs(app, port) {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  app.get('/api-docs.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });

  console.log(`Swagger docs available at http://localhost:${port}/api-docs`);
}

module.exports = swaggerDocs;
