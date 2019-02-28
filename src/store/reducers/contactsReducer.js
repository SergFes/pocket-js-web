import * as Constants from '../constants';
// import ContactsAPI from './contactsStub'

// let contacts = ContactsAPI.all();

const initialState = {
    contacts: [],
    activeContact: null,
    is_loading_contacts: false,
};

export function contactsReducer(state = initialState, action) {
    switch (action.type) {
    // Получение списка контактов
        case Constants.GET_CONTACTS_PENDING: {
            state = { ...state, is_loading_contacts: true };
            break;
        }
        case Constants.GET_CONTACTS_FULFILLED: {
            state = {
                ...state,
                contacts: action.payload.data.data,
                is_loading_contacts: false,
            };
            break;
        }
        case Constants.GET_CONTACTS_REJECTED: {
            state = {
                error_message: action.payload.message,
                is_loading_contacts: false,
            };
            break;
        }

        // Добавление контакта
        case Constants.ADD_CONTACT_PENDING: {
            state = {
                ...state,
                is_loading_contact: true,
            };
            break;
        }
        case Constants.ADD_CONTACT_FULFILLED: {
            state = {
                ...state,
                user: action.payload.data,
                is_loading_contact: false,
            };
            break;
        }
        case Constants.ADD_CONTACT_REJECTED: {
            state = {
                ...state,
                is_loading_contact: false,
                error_message: action.payload.message,
            };
            break;
        }

        case Constants.ADD_TO_BLACKLIST_PENDING: {
            state = {
                ...state,
            };
            break;
        }
        case Constants.ADD_TO_BLACKLIST_FULFILLED: {
            state = {
                ...state,
                blacklist_item: action.payload.data,
            };
            break;
        }
        case Constants.ADD_TO_BLACKLIST_REJECTED: {
            state = {
                ...state,
                error_message: action.payload.message,
            };
            break;
        }

        // Редактирование контакта
        case Constants.EDIT_CONTACT: {
            state = {
                ...state,
                is_loading_contact: true,
            };
            break;
        }
        case Constants.EDIT_CONTACT_FULFILLED: {
            state = {
                ...state,
                is_loading: false,
            };
            break;
        }
        case Constants.EDIT_CONTACT_REJECTED: {
            state = {
                ...state,
                is_loading_contacts: false,
                error_message: action.payload.message,
            };
            break;
        }

        // Удаление контакта
        case Constants.DELETE_CONTACT: {
            state = {
                ...state,
                is_loading_contact: true,
            };
            break;
        }
        case Constants.DELETE_CONTACT_FULFILLED: {
            state = {
                ...state,
                is_loading: false,
            };
            break;
        }
        case Constants.DELETE_CONTACT_REJECTED: {
            state = {
                ...state,
                is_loading_contacts: false,
                error_message: action.payload.message,
            };
            break;
        }

        case Constants.GET_BLACKLIST_PENDING: {
            state = {
                ...state,
                is_loading_list: true,
            };
            break;
        }
        case Constants.GET_BLACKLIST_FULFILLED: {
            state = {
                ...state,
                blacklist: action.payload.data.data,
                is_loading_list: false,
            };
            break;
        }
        case Constants.GET_BLACKLIST_REJECTED: {
            state = {
                ...state,
                is_loading_list: false,
                error_message: action.payload.message,
            };
            break;
        }

        case Constants.DEL_FROM_BLACKLIST_PENDING: {
            state = {
                ...state,
            };
            break;
        }
        case Constants.DEL_FROM_BLACKLIST_FULFILLED: {
            state = {
                ...state,
            };
            break;
        }
        case Constants.DEL_FROM_BLACKLIST_REJECTED: {
            state = {
                ...state,
                error_message: action.payload.message,
            };
            break;
        }
        default: { state = { ...state }; }
    }
    return state;
}
