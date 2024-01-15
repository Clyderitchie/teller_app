const router = require('express').Router();

const {
    getAllTellers,
    getTellerById,
    createTeller
} = require('../../controllers/tellerController');

// /api/tellers (Working)
router.route('/')
    .get(getAllTellers)
    .post(createTeller);

// /api/tellers/:id (Working)
router.route('/:id')
    .get(getTellerById);

module.exports = router;