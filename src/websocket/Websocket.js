import {
    WEBSOCKET_CONNECT, WEBSOCKET_OPEN, WEBSOCKET_CLOSE, WEBSOCKET_DISCONNECT, WEBSOCKET_MESSAGE, WEBSOCKET_SEND,
} from '../store/constants';

export let websocket;

/**
 * An example middleware to handle WebSocket connections.
 * NB: There is no exception handling!
 */
const middleware = store => next => (action) => {
    const dispatch = store.dispatch;
    switch (action.type) {
    // User request to connect
        case WEBSOCKET_CONNECT:
            // Configure the object
            websocket = new WebSocket(action.payload.url);

            // Attach the callbacks
            websocket.onopen = () => dispatch({ type: WEBSOCKET_OPEN });
            websocket.onclose = event => dispatch({ type: WEBSOCKET_CLOSE, payload: event });
            websocket.onmessage = event => dispatch({ type: WEBSOCKET_MESSAGE, payload: event });

            break;

            // User request to send a message
        case WEBSOCKET_SEND:
            websocket.send(action.payload);
            break;

            // User request to disconnect
        case WEBSOCKET_DISCONNECT:
            websocket.close();
            break;

        default:
            break;
    }

    return next(action);
};

export default middleware;
