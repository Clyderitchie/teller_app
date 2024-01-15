const router = require('express').Router();
const clientRoutes = require('./clientRoutes');
const tellerRoutes = require('./tellerRoutes');

router.use('/clients', clientRoutes);
router.use('/tellers', tellerRoutes);

module.exports = router;