const Router = require('express')
const router = new Router()

const userRoutes = require('./userRoutes');
const recipeRoutes = require('./recipeRoutes');
const commentRoutes = require('./commentRoutes');
const reportRoutes = require('./reportRoutes');
const ratingRoutes = require('./ratingRoutes');
const categoryRoutes = require('./categoryRoutes');

router.use('/users', userRoutes);
router.use('/recipes', recipeRoutes);
router.use('/comments', commentRoutes);
router.use('/report', reportRoutes);
router.use('/ratings', ratingRoutes);
router.use('/categories', categoryRoutes);

module.exports = router