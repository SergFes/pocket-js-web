import { LOGIN, REGISTER_USER, LOGOUT } from '../constants';
import instance from '../axios-docs';

export function loginUser(email, password) {
    return {
        type: LOGIN,
        payload: instance.post('/auth/login', { email, password }),
    };
}

export function registerUser(email, password, name) {
    return {
        type: REGISTER_USER,
        payload: instance.post('/auth/registration', { email, password, name }),
    };
}

export function logoutUser(token) {
    return {
        type: LOGOUT,
    // payload: instance.put("/v1/auth/",{token})
    };
}
