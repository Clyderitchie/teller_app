const router = require('express').Router();

const {
    getAllClients,
    getClientById,
    createClient,
} = require('../../controllers/clientController');

// /api/clients (Working)
router.route('/')
    .get(getAllClients)
    .post(createClient);

// /api/clients/:id (Working)
router.route('/:id')
    .get(getClientById);

module.exports = router