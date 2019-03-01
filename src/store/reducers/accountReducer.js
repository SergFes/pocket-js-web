import * as Constants from '../constants';

const initialState = {
    account: [],
    edit_fulfilled: false,
    is_loading_account: false
}

export function accountReducer(state = initialState, action) {
    switch (action.type) {
        case Constants.GET_ACCOUNT_PENDING: {
            state = {...state, is_loading_account: true};
        break;
        }
        case Constants.GET_ACCOUNT_FULFILLED: {
            state = {
                ...state,
                is_loading_account: false,
                account: {
                    email: action.payload.data.email,
                    name: action.payload.data.profile.username
                }
            };
        break;
        }
        case Constants.GET_ACCOUNT_REJECTED: {
            state = {
                ...state,
                is_loading_account: false,
                error_message: action.payload.message};
        break;
        }

        case Constants.EDIT_ACCOUNT_PENDING: {
            state = {...state, is_loading_changes: true, edit_fulfilled: false};
        break;
        }
        case Constants.EDIT_ACCOUNT_FULFILLED: {

            state = {
                ...state,
                is_loading_changes: false,
                changedAccount: action.payload.data,
                edit_fulfilled: true
                };
        break;
        }
        case Constants.EDIT_ACCOUNT_REJECTED: {
            state = {
                ...state,
                is_loading_changes: false,
                edit_fulfilled: false,
                error_message: action.payload.message};
        break;
        }
        
        default: {state = {...state}}
    }
    return state;
}