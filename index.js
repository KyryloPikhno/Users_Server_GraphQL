const {makeExecutableSchema} = require('@graphql-tools/schema');
const {ApolloServer} = require('apollo-server-express');
const resolvers = require('./graphql/resolvers');
const typeDefs = require('./graphql/typeDefs');
const mongoose = require('mongoose');
const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

async function startServer() {
    const app = express();

    const schema = makeExecutableSchema({
        typeDefs,
        resolvers,
    });

    const server = new ApolloServer({
        schema,
    });

    await server.start();

    server.applyMiddleware({app});

    await mongoose.connect(process.env.MONGO_DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    app.listen({port: process.env.PORT}, () => {
        console.log(`Server running at http://localhost:${process.env.PORT}${server.graphqlPath}`);
    });
}

startServer().catch((err) => {
    console.error(err);
    process.exit(1);
});
