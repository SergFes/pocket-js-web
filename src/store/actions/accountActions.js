import {GET_ACCOUNT, EDIT_ACCOUNT} from "../constants";
import instance from '../axios-docs';


export function getAccount() {
    return {
        type: GET_ACCOUNT,
        payload: instance.get('/account/')
    };
}

export function editAccount(oldPassword, newPassword) {
    return {
        type: EDIT_ACCOUNT,
        payload: instance.put('/account/', {oldPassword, newPassword})
    };
}