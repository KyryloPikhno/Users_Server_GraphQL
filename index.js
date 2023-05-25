const {ApolloServer} = require('apollo-server');
const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');
const mongoose = require('mongoose');

const server = new ApolloServer({
    typeDefs,
    resolvers
});

mongoose.connect(process.env.MONGO_DB_URL, {useNewUrlParser: true})

