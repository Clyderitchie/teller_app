const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const AccountSchema = new Schema(
    {
        accountType: {
            type: String,
        },
        balance: {
            type: Number
        },
        dateOpened: {
            type: Date,
            default: Date.now,
            get: (timestamp) => dateFormat(timestamp),
        }
    },
    {
        toJSON:{
            getters: true
        },
        id: false,
        autoIndex: false
    }
);

const Account = model('Account', AccountSchema);

module.exports = Account;