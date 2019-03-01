import * as Constants from '../constants';

const initialState = {
    data: null,
    connected: false,
}
/**
 * A reducer to handle WebSocket messages.
 * NB: There is no error handling!
 */
export function websocketReducer (state = initialState, action) {
    switch (action.type) {
        case Constants.WEBSOCKET_MESSAGE:
            const data = action.payload.data;
            // console.log(`got message: ${data}`);
            return { ...state, data }
        case Constants.WEBSOCKET_CONNECT:
            return { ...state, connected: true }
        default:
            return state
    }
}