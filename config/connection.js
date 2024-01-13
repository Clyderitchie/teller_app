const { connect, connection } = require('mongoose');

const connectionString = 
    process.env.MONODB_URI || 'mongodb://127.0.0.1:27017/teller_app';

connect(connectionString);

module.exports = connection;