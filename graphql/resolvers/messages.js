const Message = require('../../models/Message');

module.exports = {
    Mutation: {
        async createMessage(_, {messageInput: {text, username}}) {
            const newMessage = await Message.create({
                text,
                createdBy: username,
                createdAt: new Date().toISOString()
            });

            return {id: newMessage.id, ...newMessage._doc};
        }
    },

    Query: {
        message: (_, {ID}) => Message.findById(ID),
    }
};
