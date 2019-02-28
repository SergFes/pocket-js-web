
const ContactsAPI = {
    contacts: [
        {
            id: '5c3f0c0d0549b33378426b57',
            img: 'https://d1hzl1rkxaqvcd.cloudfront.net/avatars/89306/_60px/images.png',
            name: 'Петя Петров',
            text: 'Текст последнего сообщения',
            unread: 2,
            time: '10.10.2018',
            status: true,
        },
        {
            id: '5c5b1fc7eee22122c4ec78e2',
            img: 'https://mielgroup.org/wp-content/uploads/user-60x60.png',
            name: 'Сима Симаков',
            text: 'Текст последнего сообщения',
            unread: 5,
            time: '10.10.2018',
            status: false,
        },
    ],
    users: [
        {
            id: '5c3f0c0d0549b33378426b57',
            img: 'https://kwork.ru/files/avatar/medium/11/602845-1.jpg',
            name: 'Петя Петров',
            email: 'petrov@gmail.com',
            info: 'Web-дизайнер, разработчик мобильных приложений, студент GB.',
            text: 'Текст последнего сообщения',
            unread: 2,
            time: '10.10.2018',
            status: true,

        },
        {
            id: '5c5b1fc7eee22122c4ec78e2',
            img: 'https://kwork.ru/files/avatar/medium/11/602845-1.jpg',
            name: 'Сима Симаков',
            email: 'sima@gmail.com',
            info: 'Web-дизайнер, разработчик мобильных приложений, студент GB.',
            text: 'Текст последнего сообщения',
            unread: 5,
            time: '10.10.2018',
            status: false,
        },
        {
            id: 3,
            img: 'https://kwork.ru/files/avatar/medium/11/602845-1.jpg',
            name: 'Вася Васильков',
            email: 'vasilkov@gmail.com',
            info: 'Web-дизайнер, разработчик мобильных приложений, студент GB.',
            text: 'Текст последнего сообщения',
            unread: 5,
            time: '10.10.2018',
            status: false,
        },
        {
            id: 4,
            img: 'https://kwork.ru/files/avatar/medium/11/602845-1.jpg',
            name: 'Петя Иванов',
            email: 'ivanov@gmail.com',
            info: 'Web-дизайнер, разработчик мобильных приложений, студент GB.',
            text: 'Текст последнего сообщения',
            unread: 5,
            time: '10.10.2018',
            status: false,
        },
        {
            id: 5,
            img: 'https://kwork.ru/files/avatar/medium/11/602845-1.jpg',
            name: 'Анна Иванова',
            email: 'anna@gmail.com',
            info: 'Web-дизайнер, разработчик мобильных приложений, студент GB.',
            text: 'Текст последнего сообщения',
            unread: 5,
            time: '10.10.2018',
            status: false,
        },
    ],
    foundUsers: [],
    all() {
        return this.contacts;
    },
    get(id) {
        const isContact = p => p.id === id;
        return this.contacts.find(isContact);
    },
    addContact(name) {
        const user = this.users.find(x => x.name === name);
        this.contacts.push(user);
    },
    findUsers(name) {
        this.foundUsers.length = 0;
        const user = this.users.find(x => x.name === name);
        this.foundUsers.push(user);
    },
    getUsers() {
        return this.foundUsers;
    },
};

export default ContactsAPI;
