let config = {};
config.DEV = (!process.env.NODE_ENV || process.env.NODE_ENV === 'development');
config.BASE_URL = config.DEV ? 'http://localhost:3000' : 'https://jeremylee34.github.io/jeremylee34.github.io';

module.exports = config