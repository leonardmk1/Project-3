const apiControllers = require('express').Router();

apiControllers.use('/users', require('./usersController'));
apiControllers.use('/secrets', require('./secretsController'));
apiControllers.use('/media', require('./mediaController'));
apiControllers.use('/reviews', require('./reviewsController'));

module.exports = apiControllers;
