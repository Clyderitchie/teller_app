const { Account } = require('../models');

module.exports = {
     //  Get client account
     async getClientAccount(req, res){
        try {
            const clientAccount = await Account.find();
            res.json(clientAccount);
        } catch (err) {
            console.log(err);
            res.status(500).json(err.message);
        }
    },
    //  Create account for client
    async createAccount(req, res){
        try {
            const createAccount = await Account.create(req.body);
            res.json(createAccount);
        } catch (err) {
            console.log(err);
            res.status(500).json(err.message); 
        }
    },
}