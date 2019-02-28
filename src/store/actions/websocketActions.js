import {
    WEBSOCKET_CONNECT, WEBSOCKET_OPEN, WEBSOCKET_CLOSE, WEBSOCKET_DISCONNECT, WEBSOCKET_MESSAGE, WEBSOCKET_SEND,
} from '../constants';
import { websocket } from '../../websocket/Websocket';

export function connectWS(url = 'ws://localhost:8888') {
    return {
        type: WEBSOCKET_CONNECT,
        payload: { url: `${url}/socket?token=${localStorage.getItem('token')}` },
    };
}

export function sendWS(text = '', recipient = ' ', group = ' ') {
    return {
        type: WEBSOCKET_SEND,
        payload: `1["messages:send",${JSON.stringify({ text, recipient, messageId: 15 })}]`,
    };
}

export function disconnectWS() {
    return {
        type: WEBSOCKET_DISCONNECT,
    };
}
