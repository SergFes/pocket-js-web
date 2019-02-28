//---------------------------------------------------------------------------------
export const WEBSOCKET_CONNECT = 'WEBSOCKET:CONNECT';
export const WEBSOCKET_MESSAGE = 'WEBSOCKET:MESSAGE';
export const WEBSOCKET_OPEN = 'WEBSOCKET:OPEN';
export const WEBSOCKET_CLOSE = 'WEBSOCKET:CLOSE';
export const WEBSOCKET_DISCONNECT = 'WEBSOCKET:DISCONNECT';
export const WEBSOCKET_SEND = 'WEBSOCKET:SEND';

//---------------------------------------------------------------------------------
export const LOGIN = 'LOGIN';
export const LOGIN_PENDING = 'LOGIN_PENDING';
export const LOGIN_FULFILLED = 'LOGIN_FULFILLED';
export const LOGIN_REJECTED = 'LOGIN_REJECTED';

export const REGISTER = 'REGISTER';
export const REGISTER_USER = 'REGISTER_USER';
export const REGISTER_USER_PENDING = 'REGISTER_USER_PENDING';
export const REGISTER_USER_FULFILLED = 'REGISTER_USER_FULFILLED';
export const REGISTER_USER_REJECTED = 'REGISTER_USER_REJECTED';

export const LOGOUT = 'LOGOUT';
export const LOGOUT_PENDING = 'LOGOUT_PENDING';
export const LOGOUT_FULFILLED = 'LOGOUT_FULFILLED';
export const LOGOUT_REJECTED = 'LOGOUT_REJECTED';

//---------------------------------------------------------------------------------
export const GET_ACCOUNT = 'GET_ACCOUNT';
export const GET_ACCOUNT_PENDING = 'GET_ACCOUNT_PENDING';
export const GET_ACCOUNT_FULFILLED = 'GET_ACCOUNT_FULFILLED';
export const GET_ACCOUNT_REJECTED = 'GET_ACCOUNT_REJECTED';

export const EDIT_ACCOUNT = 'EDIT_ACCOUNT';
export const EDIT_ACCOUNT_PENDING = 'EDIT_ACCOUNT_PENDING';
export const EDIT_ACCOUNT_FULFILLED = 'EDIT_ACCOUNT_FULFILLED';
export const EDIT_ACCOUNT_REJECTED = 'EDIT_ACCOUNT_REJECTED';

//---------------------------------------------------------------------------------
export const GET_USER_SELF = 'GET_USER_SELF';
export const GET_USER_SELF_PENDING = 'GET_USER_SELF_PENDING';
export const GET_USER_SELF_FULFILLED = 'GET_USER_SELF_FULFILLED';
export const GET_USER_SELF_REJECTED = 'GET_USER_SELF_REJECTED';

export const GET_USER = 'GET_USER';
export const GET_USER_PENDING = 'GET_USER_PENDING';
export const GET_USER_FULFILLED = 'GET_USER_FULFILLED';
export const GET_USER_REJECTED = 'GET_USER_REJECTED';

export const GET_USERS = 'GET_USERS';
export const GET_USERS_PENDING = 'GET_USERS_PENDING';
export const GET_USERS_FULFILLED = 'GET_USERS_FULFILLED';
export const GET_USERS_REJECTED = 'GET_USERS_REJECTED';

//---------------------------------------------------------------------------------
export const GET_CONTACTS = 'GET_CONTACTS';
export const GET_CONTACTS_PENDING = 'GET_CONTACTS_PENDING';
export const GET_CONTACTS_FULFILLED = 'GET_CONTACTS_FULFILLED';
export const GET_CONTACTS_REJECTED = 'GET_CONTACTS_REJECTED';

// Получение контактов по ID---------------------------------------------------------------------
export const GET_ID_CONTACTS = 'GET_ID_CONTACTS';
export const GET_ID_CONTACTS_PENDING = 'GET_ID_CONTACTS_PENDING';
export const GET_ID_CONTACTS_FULFILLED = 'GET_ID_CONTACTS_FULFILLED';
export const GET_ID_CONTACTS_REJECTED = 'GET_ID_CONTACTS_REJECTED';

// Добавление контакта---------------------------------------------------------------------
export const ADD_CONTACT = 'ADD_CONTACT';
export const ADD_CONTACT_PENDING = 'ADD_CONTACT_PENDING';
export const ADD_CONTACT_FULFILLED = 'ADD_CONTACT_FULFILLED';
export const ADD_CONTACT_REJECTED = 'ADD_CONTACT_REJECTED';

// Редактирование контакта---------------------------------------------------------------------
export const EDIT_CONTACT = 'EDIT_CONTACT';
export const EDIT_CONTACT_PENDING = 'EDIT_CONTACT_PENDING';
export const EDIT_CONTACT_FULFILLED = 'EDIT_CONTACT_FULFILLED';
export const EDIT_CONTACT_REJECTED = 'EDIT_CONTACT_REJECTED';

// Удаление контакта---------------------------------------------------------------------
export const DELETE_CONTACT = 'DELETE_CONTACT';
export const DELETE_CONTACT_PENDING = 'DELETE_CONTACT_PENDING';
export const DELETE_CONTACT_FULFILLED = 'DELETE_CONTACT_FULFILLED';
export const DELETE_CONTACT_REJECTED = 'DELETE_CONTACT_REJECTED';

//---------------------------------------------------------------------------------
export const ADD_TO_BLACKLIST = 'ADD_TO_BLACKLIST';
export const ADD_TO_BLACKLIST_PENDING = 'ADD_TO_BLACKLIST_PENDING';
export const ADD_TO_BLACKLIST_FULFILLED = 'ADD_TO_BLACKLIST_FULFILLED';
export const ADD_TO_BLACKLIST_REJECTED = 'ADD_TO_BLACKLIST_REJECTED';

export const GET_BLACKLIST = 'GET_BLACKLIST';
export const GET_BLACKLIST_PENDING = 'GET_BLACKLIST_PENDING';
export const GET_BLACKLIST_FULFILLED = 'GET_BLACKLIST_FULFILLED';
export const GET_BLACKLIST_REJECTED = 'GET_BLACKLIST_REJECTED';

export const DEL_FROM_BLACKLIST = 'DEL_FROM_BLACKLIST';
export const DEL_FROM_BLACKLIST_PENDING = 'DEL_FROM_BLACKLIST_PENDING';
export const DEL_FROM_BLACKLIST_FULFILLED = 'DEL_FROM_BLACKLIST_FULFILLED';
export const DEL_FROM_BLACKLIST_REJECTED = 'DEL_FROM_BLACKLIST_REJECTED';
// Получение чатов---------------------------------------------------------------------
export const GET_CHATS = 'GET_CHATS';
export const GET_CHATS_PENDING = 'GET_CHATS_PENDING';
export const GET_CHATS_FULFILLED = 'GET_CHATS_FULFILLED';
export const GET_CHATS_REJECTED = 'GET_CHATS_REJECTED';

export const CREATE_GROUP = 'CREATE_GROUP';
export const CREATE_GROUP_PENDING = 'CREATE_GROUP_PENDING';
export const CREATE_GROUP_FULFILLED = 'CREATE_GROUP_FULFILLED';
export const CREATE_GROUP_REJECTED = 'CREATE_GROUP_REJECTED';

export const GET_GROUP_PROFILE = 'GET_GROUP_PROFILE';
export const GET_GROUP_PROFILE_PENDING = 'GET_GROUP_PROFILE_PENDING';
export const GET_GROUP_PROFILE_FULFILLED = 'GET_GROUP_PROFILE_FULFILLED';
export const GET_GROUP_PROFILE_REJECTED = 'GET_GROUP_PROFILE_REJECTED';

export const SEARCH_GROUP = 'SEARCH_GROUP';
export const SEARCH_GROUP_PENDING = 'SEARCH_GROUP_PENDING';
export const SEARCH_GROUP_FULFILLED = 'SEARCH_GROUP_FULFILLED';
export const SEARCH_GROUP_REJECTED = 'SEARCH_GROUP_REJECTED';

export const GET_INVITE_CODE = 'GET_INVITE_CODE';
export const GET_INVITE_CODE_PENDING = 'GET_INVITE_CODE_PENDING';
export const GET_INVITE_CODE_FULFILLED = 'GET_INVITE_CODE_FULFILLED';
export const GET_INVITE_CODE_REJECTED = 'GET_INVITE_CODE_REJECTED';

//---------------------------------------------------------------------------------
export const SET_ACTIVE_CHAT = 'SET_ACTIVE_CHAT';

export const GET_MESSAGES = 'GET_MESSAGES';
export const GET_MESSAGES_PENDING = 'GET_MESSAGES_PENDING';
export const GET_MESSAGES_FULFILLED = 'GET_MESSAGES_FULFILLED';
export const GET_MESSAGES_REJECTED = 'GET_MESSAGES_REJECTED';

export const ADD_MESSAGE = 'ADD_MESSAGE';
