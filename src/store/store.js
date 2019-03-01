import {createStore, combineReducers, applyMiddleware} from 'redux';

//Middleware
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';

import {chatsReducer} from './reducers/chatsReducer';
import {contactsReducer} from './reducers/contactsReducer';
import {usersReducer} from './reducers/usersReducer';
import {authReducer} from './reducers/authReducer';
import {accountReducer} from './reducers/accountReducer';
import {messagesReducer} from './reducers/messagesReducer';
import {websocketReducer} from './reducers/websocketReducer';

import websocket from '../websocket/Websocket';

//Reducers
const reducers = combineReducers({
    chats: chatsReducer,
    contacts: contactsReducer,
    users: usersReducer,
    messages: messagesReducer,
    auth: authReducer,
    account: accountReducer,
    ws: websocketReducer, 
});

const middleware = applyMiddleware(promise(), logger, thunk, websocket);

const store = createStore(reducers, middleware);
export default store;