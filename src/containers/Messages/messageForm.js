import React, { Component } from 'react';

import { connect } from 'react-redux';
import { addMessage, getMessages } from '../../store/actions';

import MessageListToday from '../../components/message/MessageListToday';
import SendMessageForm from './sendMessageForm';
import GroupProfile from '../../components/profiles/GroupProfile';
import ProfileUser from '../../components/profiles/profileUser/ProfileUser';
import MenuList from '../../components/menu/MenuList';
import Modal from '../../components/UI/Modal/Modal';
import Backdrop from '../../components/UI/Backdrop/Backdrop';
import { sendWS } from '../../store/actions';


import classes from './messageForm.module.css';

class MessageForm extends Component {
    state = {
        id: null,
        active: null,
        menu: false,
        profile: false,
        modal: null,
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.id !== prevState.id) {
            return {
                id: nextProps.id,
                active: nextProps.active,
            };
        }
        // если состояние не изменилось
        return null;
    }

    componentDidUpdate(prevProps) {
        if (prevProps.id !== this.props.id) {
            this.props.dispatch(getMessages(this.state.id));
        }

        const messageList = document.getElementById('messageList');
        messageList.scrollTop = messageList.scrollHeight;
    }

    menuToggle = () => {
        this.setState({
            menu: !this.state.menu,
        });
    }

    profileToggle = () => {
        const sidebarProfile = document.getElementById('Profile'); // чтобы профиль не открывался дважды
        if (sidebarProfile === null) {
            this.setState({
                profile: !this.state.profile,
            });
        }
    }

    sendMessage = (text) => {
        const timestamp = new Date();
        this.props.dispatch(addMessage({
            receiver: 55,
            message: text,
            senderid: '%id_sender%',
            author: 'Вы',
            timestamp: timestamp.getTime(),
        }));
        this.props.dispatch(sendWS(text, this.state.id));
    }

    render() {
        // меню в шапке
        // пункты для меню группы
        const groupsMenu = [
            {
                href: `/chats/${this.props.id}`,
                icon: ' fas fa-users',
                text: 'Профиль группы',
                action: 'openProfile',
            },
            {
                href: '/',
                icon: ' fas fa-trash-alt',
                text: 'Очистить историю',
                action: '',
            },
            {
                href: '/',
                icon: ' fas fa-bell',
                text: 'Отключить/включить уведомления',
                action: '',
            },
            {
                href: '/',
                icon: ' fas fa-user-times',
                text: 'Покинуть группу',
                action: '',
            },
            {
                href: '/',
                icon: ' fas fa-ban',
                text: 'Удалить группу',
                action: '',
            },
        ];
        // пункты для меню контакта
        const contactsMenu = [
            {
                href: `/contacts/${this.props.id}`,
                icon: ' fas fa-user',
                text: 'Профиль собеседника',
                action: 'openProfile',
            },
            {
                href: '/',
                icon: ' fas fa-trash-alt',
                text: 'Очистить историю',
                action: '',
            },
            {
                href: '/',
                icon: ' fas fa-bell',
                text: 'Отключить/включить уведомления',
                action: '',
            },
            {
                href: '/',
                icon: ' fas fa-user-times',
                text: 'Заблокировать пользователя',
                action: '',
            },
            {
                href: '/',
                icon: ' fas fa-user-slash',
                text: 'Удалить пользователя',
                action: '',
            },
        ];

        // информация о чате в шапке поля сообщений
        let activeChat; let chatTitle;


        let chatData = {}; // данные для открытия профиля через меню в шапке сообщений

        // ищем по id в списке чатов в сторе
        if (this.state.id !== undefined) {
            if (this.state.active === 2) {
                activeChat = this.props.contacts.find(x => x.contact === this.state.id);
                chatTitle = activeChat.byname;
                chatData = { name: chatTitle };
            } else {
                activeChat = this.props.chats.find(x => x.id === this.state.id);
                chatTitle = activeChat.name;
                chatData = { name: chatTitle };
            }
        }
        // меню в шапке сообщений
        // меню для группы/контакта
        const menuItems = (this.state.active === 1) ? groupsMenu : contactsMenu;
        // показываем/скрываем меню (state по клику)
        const menu = this.state.menu ? (
            <div>
                <Backdrop show classesNames='MainMenu' />
                <Modal classesNames='ChatMenu'>
                    <MenuList
                        menuToggle={this.menuToggle}
                        profileToggle={this.profileToggle}
                        items={menuItems}
                    />
                </Modal>
            </div>
        ) : null;

        // профиль группы/контакта (открывается из меню)
        const profileType = (this.state.active === 1)
            ? <GroupProfile profile={chatData} profileToggle={this.profileToggle} />
            : <ProfileUser profile={chatData} profileToggle={this.profileToggle} />;

        const profile = this.state.profile ? (
        <>
          <Modal classesNames='Profile ProfileFromMenu'>
              {profileType}
          </Modal>
        </>
        ) : null;

        const daysWithMessages = [];
        for (const key in this.props.messages) {
            daysWithMessages.push(<MessageListToday key={key} day={key} messages={this.props.messages[key]} />);
        }

        return (
            <div className={classes.messageForm}>
                <div className={classes.Header}>
                    <div className={classes.ChatInfo}>
                        <div className={classes.ChatIcon}>
                            <img
                                src='https://partner.internet-akademia.ru/upload/site/user.png'
                                className={(this.state.id === undefined) // картинки нет при открытии приложения
                                    ? classes.ChatImgNone
                                    : classes.ChatImg}
                                alt='group_icon'
                            />
                        </div>
                        <h2 className={classes.ChatTitle}>{chatTitle}</h2>
                    </div>
                    <div className={classes.Users} />
                    <div
                        className={(this.props.id === undefined)
                            ? classes.MenuNone // скрываем меню, если ни контакт, ни группа не выбраны
                            : classes.Menu}
                        onClick={this.menuToggle}
                    >
                        <i className={`${classes.MenuIcon} fas fa-ellipsis-v`} />
                    </div>
                    {menu}
                    {profile}
                </div>
                <div className={classes.messageList} id='messageList'>
                    {daysWithMessages}
                </div>
                <SendMessageForm sendMessage={this.sendMessage} />
            </div>
        );
    }
}

const mapStateToProps = store => ({
    token: store.auth.token,
    messages: store.messages.messages,
    id: store.messages.id,
    active: store.messages.active,
    chats: store.chats.chats,
    contacts: store.contacts.contacts,
    activeContact: store.contacts.activeContact,
});

export default connect(mapStateToProps)(MessageForm);
