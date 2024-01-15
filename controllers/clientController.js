const { Client } = require('../models');

module.exports = {
    // Get all clients (Working)
    async getAllClients(req, res) {
        try {
            const clients = await Client.find();
            res.json(clients);
        } catch (err) {
            console.log(err);
            res.status(500).json(err.message);
        }
    },
    // Get client by ID (Working)
    async getClientById(req, res) {
        try {
            const client = await Client.findOne({ _id: req.params.id });

            if(!client){
                return res.json({ message: 'Could not locate a client by that ID.' });
            }

            res.json(client);
        } catch (err) {
            console.log(err);
            res.status(500).json(err.message);
        }
    },
    //  Create a client (Working)
    async createClient(req, res) {
        try {
            const newClient = await Client.create(req.body);
            res.json(newClient);
        } catch (err) {
            console.log(err);
            res.status(500).json(err.message);
        }
    },
}