const {gql} = require('apollo-server');

module.exports = gql`
type Message {
    text: String
    createdAt: String
    createdBy: String
}

input MassageInput {
    text: String
    username: String

type Query {
    message(id: ID!): Message
}

type Mutation {
    createMessage(messageInput: MassageInput): MassageInput!
}
`;
