import * as Constants from '../constants';

const initialState = {
    token: localStorage.getItem("token"),
    is_loading_user: false
}

export function authReducer(state = initialState, action) {
    switch (action.type) {
        case Constants.LOGIN_PENDING: {
            state = {
                ...state,
                is_loading_user: true
            };
            break;
        }        
        case Constants.LOGIN_FULFILLED: {
            localStorage.setItem("token", action.payload.data.token);
            state = {
                ...state,
                token: action.payload.data.token,
                is_loading_user: false
            };
            break;
        }        
        case Constants.LOGIN_REJECTED: {
            state = {
                ...state,                
                is_loading_user: false,
                error_message: action.payload.message
            };
            break;
        }
        case Constants.REGISTER_USER_PENDING: {
            state = {
                ...state,
                is_loading_user: true
            };
            break;
        }        
        case Constants.REGISTER_USER_FULFILLED: {
            localStorage.setItem("token", action.payload.data.token);
            state = {
                ...state,
                token: action.payload.data.token,
                user: action.payload.data.user,
                is_loading_user: false
            };
            break;
        }        
        case Constants.REGISTER_USER_REJECTED: {
            state = {
                ...state,                
                is_loading_user: false,
                error_message: action.payload.message
            };
            break;
        }
        case Constants.LOGOUT: {
            localStorage.removeItem('token');
            state = {
                ...state,
                token: null
            };
            break;
        }
        case Constants.LOGOUT_FULFILLED: {
            localStorage.removeItem('token');
            state = {
                ...state,
                token: null
            };
            break;
        }
        default: {state = {...state}}
    }
    return state;
}