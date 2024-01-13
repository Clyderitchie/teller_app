const router = require('express').Router();
const clientRoutes = require('./clientRoutes');

router.use('/clients', clientRoutes);

module.exports = router;