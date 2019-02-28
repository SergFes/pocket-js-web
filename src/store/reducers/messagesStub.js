const ChatMessagesAPI = {
    messages: {
        '5c5884cc8c7a91e5b8eb8cc6': [
            {
                avatar: 'https://kwork.ru/files/avatar/medium/11/602845-1.jpg',
                author: 'Петя Петров',
                message: 'Рекламное сообщество пока плохо ускоряет метод изучения рынка.',
                timestamp: 1543990506864,
            },
            {
                avatar: 'https://kwork.ru/files/avatar/medium/11/602845-1.jpg',
                author: 'Сима Симаков',
                message: 'Один из признанных классиков маркетинга Ф.Котлер определяет это так: бизнес-модель упорядочивает имидж',
                timestamp: 1543990756864,
            },
            {
                avatar: 'https://kwork.ru/files/avatar/medium/11/602845-1.jpg',
                author: 'Вася Васильков',
                message: 'Стратегия позиционирования, отбрасывая подробности, поддерживает PR',
                timestamp: 1543990196864,
            },
            {
                avatar: 'https://kwork.ru/files/avatar/medium/11/602845-1.jpg',
                author: 'Анна Иванова',
                message: 'Анализ зарубежного опыта сфокусирован.',
                timestamp: 1545408934088,
            },
            {
                avatar: 'https://kwork.ru/files/avatar/medium/11/602845-1.jpg',
                author: 'Петя Петров',
                message: 'Идеология выстраивания бренда развивает креативный контент.',
                timestamp: 1545408934089,
            },
        ],
        '5c5885108c7a91e5b8eb8cc7': [
            {
                avatar: 'https://kwork.ru/files/avatar/medium/11/602845-1.jpg',
                author: 'Сима Симаков',
                message: 'Еще Траут показал, что выставочный стенд деятельно переворачивает эмпирический целевой трафик, повышая конкуренцию',
                timestamp: 1543990506864,
            },
            {
                avatar: 'https://kwork.ru/files/avatar/medium/11/602845-1.jpg',
                author: 'Сима Симаков',
                message: 'Инвестиция, безусловно, изменяет потребительский бизнес-план',
                timestamp: 1543990756864,
            },
            {
                avatar: 'https://kwork.ru/files/avatar/medium/11/602845-1.jpg',
                author: 'Вася Васильков',
                message: 'Маркетингово-ориентированное издание усиливает конвергентный системный анализ.',
                timestamp: 1543990196864,
            },
            {
                avatar: 'https://kwork.ru/files/avatar/medium/11/602845-1.jpg',
                author: 'Анна Иванова',
                message: 'Построение бренда поразительно.',
                timestamp: 1545408934088,
            },
            {
                avatar: 'https://kwork.ru/files/avatar/medium/11/602845-1.jpg',
                author: 'Анна Иванова',
                message: 'Более того, рекламный клаттер методически экономит продукт',
                timestamp: 1545408934089,
            },
        ],
        '5c5b1fc7eee22122c4ec78e2': [
            {
                avatar: 'https://kwork.ru/files/avatar/medium/11/602845-1.jpg',
                author: 'Вы',
                message: 'вязание крючком сапожки',
                timestamp: 1543990506864,
            },
            {
                avatar: 'https://kwork.ru/files/avatar/medium/11/602845-1.jpg',
                author: 'Сима Симаков',
                message: 'картинки девушка и кошки',
                timestamp: 1543990756864,
            },
            {
                avatar: 'https://kwork.ru/files/avatar/medium/11/602845-1.jpg',
                author: 'Вы',
                message: 'гидротехнический бетон',
                timestamp: 1543990196864,
            },
            {
                avatar: 'https://kwork.ru/files/avatar/medium/11/602845-1.jpg',
                author: 'Сима Симаков',
                message: 'не запускается айфон',
                timestamp: 1545408934088,
            },
            {
                avatar: 'https://kwork.ru/files/avatar/medium/11/602845-1.jpg',
                author: 'Сима Симаков',
                message: 'ролловеры в автокад',
                timestamp: 1545408935088,
            },
            {
                avatar: 'https://kwork.ru/files/avatar/medium/11/602845-1.jpg',
                author: 'Вы',
                message: 'мне бы в небо ленинград',
                timestamp: 1545408936088,
            },
        ],
        '5c3f0c0d0549b33378426b57': [
            {
                avatar: 'https://kwork.ru/files/avatar/medium/11/602845-1.jpg',
                author: 'Вы',
                message: 'чем питается кабан',
                timestamp: 1543990506864,
            },
            {
                avatar: 'https://kwork.ru/files/avatar/medium/11/602845-1.jpg',
                author: 'Петя Петров',
                message: 'госуслуги татарстан',
                timestamp: 1543990756864,
            },
            {
                avatar: 'https://kwork.ru/files/avatar/medium/11/602845-1.jpg',
                author: 'Вы',
                message: 'клип роксаны бабаян',
                timestamp: 1543990196864,
            },
            {
                avatar: 'https://kwork.ru/files/avatar/medium/11/602845-1.jpg',
                author: 'Петя Петров',
                message: 'лимончелло ресторан',
                timestamp: 1545408934088,
            },
            {
                avatar: 'https://kwork.ru/files/avatar/medium/11/602845-1.jpg',
                author: 'Вы',
                message: 'лимончелло ресторан!',
                timestamp: 1545408934089,
            },
        ],
    },
    getMessages(id) {
        console.log('api - getMessages');
        return this.messages[id];
    },
};

export default ChatMessagesAPI;
