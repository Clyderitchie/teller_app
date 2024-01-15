const router = require('express').Router();

const {
    getClientAccount,
    createAccount
} = require('../../controllers/accountController');

// /api/accounts
router.route('/')
    .get(getClientAccount)
    .post(createAccount);

module.exports = router