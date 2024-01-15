const router = require('express').Router();
const clientRoutes = require('./clientRoutes');
const tellerRoutes = require('./tellerRoutes');
const accountRoutes = require('./accountRoutes');

router.use('/clients', clientRoutes);
router.use('/tellers', tellerRoutes);
router.use('/accounts', accountRoutes);

module.exports = router;