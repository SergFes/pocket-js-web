const ChatMessagesСache = {
    messages: {},
    getChatMessages(chat_id, limit, offset = 0) { // limit - ограничение забираемых сообщений, offset - сдвиг, чтобы забрать историю
        console.log('messages from cache');
        return chat_id in this.messages ? this.messages[chat_id].slice(offset, offset + limit) : [];
    },
    addChatMessages(chat_id, messages, position = 'after') {
        if (!(chat_id in this.messages)) {
            this.messages[chat_id] = [];
        }

        // для истории
        if (position === 'before') {
            this.messages[chat_id] = messages.concat(this.messages[chat_id]);
        } else {
            this.messages[chat_id] = this.messages[chat_id].concat(messages);
        }
    },
    deleteChatMessages() {},
};

export default ChatMessagesСache;
