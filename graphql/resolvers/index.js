const messageResolver = require('./messages');

module.exports = {
    Query: {
        ...messageResolver.Query
    },

    Mutation: {
        ...messageResolver.Mutation
    }
};
