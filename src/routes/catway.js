const express = require('express');
const { getCatways, getCatway, createCatway, updateCatway, deleteCatway } = require('../controllers/catwayController');
const auth = require('../middleware/auth');
const router = express.Router();

router.get('/', auth, getCatways);
router.get('/:id', auth, getCatway);
router.post('/', auth, createCatway);
router.put('/:id', auth, updateCatway);
router.patch('/:id', auth, updateCatway);
router.delete('/:id', auth, deleteCatway);

module.exports = router;
