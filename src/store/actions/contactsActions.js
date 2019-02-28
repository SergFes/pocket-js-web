import {
    GET_CONTACTS, ADD_CONTACT, EDIT_CONTACT, DELETE_CONTACT,
    ADD_TO_BLACKLIST, GET_BLACKLIST, DEL_FROM_BLACKLIST,
} from '../constants';

import instance from '../axios-docs';

export function getContacts() {
    return {
        type: GET_CONTACTS,
        payload: instance.get('/account/contacts/'),
    };
}

export function addContact(id, byname) {
    return {
        type: ADD_CONTACT,
        payload: instance.post('/account/contacts/', { id, byname }),
    };
}

export function editContacts(name) {
    return {
        type: EDIT_CONTACT,
        payload: instance.put('/account/contacts', { name }),
    };
}

export function deleteContacts(id) {
    return {
        type: DELETE_CONTACT,
        payload: instance.delete(`/account/contacts/${id}`),
    };
}

export function addToBlackList(id) {
    return {
        type: ADD_TO_BLACKLIST,
        payload: instance.post('/account/blacklist', { user: id }),
    };
}

export function getBlackList() {
    return {
        type: GET_BLACKLIST,
        payload: instance.get('/account/blacklist'),
    };
}

export function delFromBlackList(id) {
    return {
        type: DEL_FROM_BLACKLIST,
        payload: instance.delete(`/account/blacklist/${id}`),
    };
}
