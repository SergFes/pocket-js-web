
const ChatsAPI = {
    chats: [
        {
            id: '5c5884cc8c7a91e5b8eb8cc6',
            img: 'http://simsontraining.com/wp-content/uploads/2015/03/testimonial_icon-60x60.png',
            name: 'Группа стажировки',
            description: 'Команда разработчиков десктоп - версии мессенджера “Pocket Messenger”',
            text: 'Текст крайнего сообщения',
            unread: 2,
            time: '10.10.2018',
            mark: {
                delivered: true,
                read: false,
            },
        },
        {
            id: '5c5885108c7a91e5b8eb8cc7',
            img: 'http://iconnectites.com/images/website-development.png',
            name: 'Design department',
            description: 'Команда дизайнеров мессенджера “Pocket Messenger”',
            text: 'Текст крайнего сообщения',
            unread: 5,
            time: '10.10.2018',
            mark: {
                delivered: false,
                read: false,
            },
        },
    ],
    all() {
        return this.chats;
    },
    get(id) {
        const isChat = p => p.id === id;
        return this.chats.find(isChat);
    },
};

export default ChatsAPI;
