import * as Constants from '../constants';

const initialState = {
    messages: {},
    is_loading_messages: false,
};

export function messagesReducer(state = initialState, action) {
    switch (action.type) {
        case Constants.SET_ACTIVE_CHAT: {
            const id = action.payload.id;
            const active = action.payload.active;
            state = {
                ...state,
                id,
                active,
            };
            break;
        }
        case Constants.ADD_MESSAGE: {
            const messages = { ...state.messages };
            const currDate = new Date(action.payload.timestamp).toLocaleDateString();
            if (!messages[currDate]) {
                messages[currDate] = [];
            }
            messages[currDate].push(action.payload);
            // mess.push(action.payload);
            state = {
                ...state,
                messages,
            };
            break;
        }
        case Constants.GET_MESSAGES: {
            const messages = {};

            // undefined - чат не выбран (при запуске приложения)
            if (action.payload !== undefined) {
                const sortMessages = (messArray) => {
                    messArray.sort((a, b) => (a.timestamp > b.timestamp ? 1 : -1));
                    return messArray;
                };

                const messagesArray = sortMessages(action.payload);

                for (let i = 0; i < messagesArray.length; i++) {
                    const currDate = new Date(messagesArray[i].timestamp).toLocaleDateString();
                    if (!messages[currDate]) {
                        messages[currDate] = [];
                    }
                    messages[currDate].push(messagesArray[i]);
                }
            }

            state = {
                ...state,
                messages,
            };
            break;
        }
        case Constants.GET_MESSAGES_PENDING: {
            state = {
                ...state,
                is_loading_messages: true,
            };
            break;
        }
        case Constants.GET_MESSAGES_FULFILLED: {
            state = {
                ...state,
                messages: action.payload.data,
                is_loading_messages: false,
            };
            break;
        }
        default: { state = { ...state }; }
    }
    return state;
}
