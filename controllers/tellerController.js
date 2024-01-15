const { Teller } = require('../models');

module.exports = {
    // Get all tellers (Working)
    async getAllTellers(req, res) {
        try {
            const tellers = await Teller.find();
            res.json(tellers);
        } catch (err) {
            console.log(err);
            res.status(500).json(err.message);
        }
    },
    // Get teller by ID (Working)
    async getTellerById(req, res) {
        try {
            const teller = await Teller.findOne({ _id: req.params.id });

            if(!teller){
                return res.json({ message: 'Could not locate a teller with that ID.'});
            }

            res.json(teller);
        } catch (err) {
            console.log(err);
            res.status(500).json(err.message);
        }
    },
    // Create a teller (Working)
    async createTeller(req, res) {
        try {
            const newTeller = await Teller.create(req.body);
            res.json(newTeller);
        } catch (err) {
            console.log(err);
            res.status(500).json(err.message);
        }
    }
}