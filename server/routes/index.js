const Router = require('express')
const router = new Router()

const userRoutes = require('./userRoutes');
const recipeRoutes = require('./recipeRoutes');
const commentRoutes = require('./commentRoutes');
const reportRoutes = require('./reportRoutes');
const categoryRoutes = require('./categoryRoutes');

router.use('/user', userRoutes);
router.use('/recipes', recipeRoutes);
router.use('/comment', commentRoutes);
router.use('/report', reportRoutes);
router.use('/categories', categoryRoutes);


module.exports = router