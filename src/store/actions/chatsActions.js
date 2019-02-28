
import {
    GET_CHATS, CREATE_GROUP, GET_GROUP_PROFILE, SEARCH_GROUP, GET_INVITE_CODE,
} from '../constants';

import instance from '../axios-docs';


export function getChats() {
    return {
        type: GET_CHATS,
        payload: instance.get('/v1/chats/', {}),
    };
}

export function createGroup(name, description) {
    return {
        type: CREATE_GROUP,
        payload: instance.post('/groups', { name, description }),
    };
}

export function getGroupProfile(id) {
    return {
        type: GET_GROUP_PROFILE,
        payload: instance.get(`/groups/${id}`),
    };
}

export function searchGroup(name) {
    return {
        type: SEARCH_GROUP,
        payload: instance.get(`/groups/${name}`),
    };
}

export function getInviteCode(id) {
    return {
        type: GET_INVITE_CODE,
        payload: instance.post(`/groups/${id}/invites`),
    };
}
