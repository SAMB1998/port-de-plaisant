const Catway = require('../models/Catway'); // Assurez-vous que le chemin est correct

exports.getCatways = async (req, res) => {
    try {
        const catways = await Catway.find();
        res.json(catways);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getCatway = async (req, res) => {
    try {
        const catway = await Catway.findById(req.params.id);
        if (!catway) {
            return res.status(404).json({ message: 'Catway not found' });
        }
        res.json(catway);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createCatway = async (req, res) => {
    const { catwayNumber, type, catwayState } = req.body;
    try {
        const catway = new Catway({ catwayNumber, type, catwayState });
        await catway.save();
        res.status(201).json(catway);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateCatway = async (req, res) => {
    try {
        const catway = await Catway.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!catway) {
            return res.status(404).json({ message: 'Catway not found' });
        }
        res.json(catway);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteCatway = async (req, res) => {
    try {
        const catway = await Catway.findByIdAndDelete(req.params.id);
        if (!catway) {
            return res.status(404).json({ message: 'Catway not found' });
        }
        res.json({ message: 'Catway deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

