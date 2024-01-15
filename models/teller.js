const { Schema, model } = require('mongoose');

const TellerSchema = new Schema(
    {
        firstName: {
            type: String,
            unique: false,
            required: 'First name is required'
        },
        lastName: {
            type: String,
            unique: false,
            required: 'Last name is required'
        },
        email: {
            type: String,
            unique: true,
            required: 'Email is required for a new client',
            match: [/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
                'This is not a valid email']
        },
        username: {
            type: String,
            unique: true
        },
        password: {
            type: String,
            required: 'Each Teller must have a proper password',
            match: [/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
                'Invalid password please select a password that is at least contains 1 upper case letter, 1 lower case letter, and is at least 8 characters long. Your password may also have special characters if you like.']
        },
        homeBranch: {
            type: String,
            required: 'A Teller must have a Home Branch, please choose from the list below'
        }
    },
    {
        toJSON:{},
        id: false,
        autoIndex: false
    }
);

const Teller = model('Teller', TellerSchema);

module.exports = Teller;