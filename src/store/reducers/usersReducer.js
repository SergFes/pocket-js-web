import * as Constants from '../constants';

// import ContactsAPI from './contactsStub'

// let users = ContactsAPI.getUsers();

const initialState = {
    users: [],
    is_loading_users: false
}

export function usersReducer(state = initialState, action) {
    switch (action.type) {
        case Constants.GET_USERS_PENDING: {
            state = {...state, is_loading_users: true};
        break;
        }

        case Constants.GET_USERS_FULFILLED: {
            let request = action.payload.request.responseURL;
            let email = request.match( /(?<=email=)(.*)/g );
            state = {
                ...state,
                is_loading_users: false,
                users: action.payload.data,
                userEmail: email
            };
        break;
        }

        case Constants.GET_USERS_REJECTED: {
            state = {
                ...state,
                //users, //for testing
                is_loading_users: false,
                error_message: action.payload.message};
        break;
        }
        
        default: {state = {...state}}
    }
    return state;
}