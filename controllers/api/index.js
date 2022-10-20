const router = require('express').Router();
const userRoutes = require('./commentRoutes');
const projectRoutes = require('./blogRoutes');

router.use('/users', userRoutes);
router.use('/projects', projectRoutes);

module.exports = router;
