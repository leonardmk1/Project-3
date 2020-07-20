const apiControllers = require('express').Router();

apiControllers.use('/users', require('./usersController'));
apiControllers.use('/media', require('./mediaController'));
apiControllers.use('/reviews', require('./reviewsController'));

module.exports = apiControllers;
