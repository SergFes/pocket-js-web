import {SET_ACTIVE_CHAT, GET_MESSAGES, ADD_MESSAGE} from "../constants";
import instance from '../axios-docs';

import MessagesAPI from '../reducers/messagesStub';
import MessagesCache from '../reducers/messagesCache'; //кэш для сообщений

export function setActiveChat(id, number) {
    return {
        type: SET_ACTIVE_CHAT,
        payload: {
            id: id,
            active: number
        }
    }
}

export function getMessages(id) {
    // let messages;
    // //смотрим, есть ли что-нибудь в кэше
    // messages = MessagesCache.getChatMessages(id, 20);

    // //если нет - запрос к беку
    // if(messages.length === 0){
    //     messages = MessagesAPI.getMessages(id); //for testing
    //     //сохраняем полученные данные в кэш
    //     MessagesCache.addChatMessages(id, messages);
    // }

    return {
        type: GET_MESSAGES,
        payload: instance.get(`/user/${id}/contacts`),
        // messages
    };
}

export function addMessage(message) {
    return {
        type: ADD_MESSAGE,
        payload: message
    }
}
