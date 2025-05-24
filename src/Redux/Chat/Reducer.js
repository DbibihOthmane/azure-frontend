import * as actionsTypes from './ActionTypes';


const initialState = {
    messages: [],
    loading: false,
    error: null,
    chat: null
};


export const ChatReducer = (state = initialState, action) => {
    switch(action.type) {
        
        case actionsTypes.FETCH_MESSAGES_REQUEST:
        case actionsTypes.SEND_MESSAGE_REQUEST:
        case actionsTypes.FETCH_CHAT_MESSAGES_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };

        case actionsTypes.FETCH_MESSAGES_SUCCESS:
        case actionsTypes.FETCH_CHAT_MESSAGES_SUCCESS:
            return {
                ...state,
                loading: false,
                messages: action.messages
            };

        case actionsTypes.SEND_MESSAGE_SUCCESS:
            return {
                ...state,
                loading: false,
                messages: [...state.messages, action.message]
            };

        case actionsTypes.FETCH_CHAT_BY_PROJECT_SUCCESS:
            return {
                ...state,
                loading: false,
                chat: action.chat
            };

        case actionsTypes.FETCH_MESSAGES_FAILURE:
        case actionsTypes.SEND_MESSAGE_FAILURE:
        case actionsTypes.FETCH_CHAT_MESSAGES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };


        default:
             return state;
    
        }
}

export default ChatReducer;
