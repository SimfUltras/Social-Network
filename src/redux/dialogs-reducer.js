const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
  messages: [
    { id: 1, message: 'YO' },
    { id: 2, message: 'Brother' },
    { id: 3, message: 'I love you' },
  ],
  dialogs: [
    { id: 1, name: 'Kai' },
    { id: 2, name: 'Sasha' },
    { id: 3, name: 'Shkiper' },
    { id: 4, name: 'Player' },
    { id: 5, name: 'Enri' },
  ],
  newMessageBody: "",
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return{
        ...state,
        newMessageBody:action.body 
      };
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      return {
        ...state,
        newMessageBody : '',
        messages: [...state.messages, { id: 6, message: body }]
      };  
    default:
      return state;
  };
};
export default dialogsReducer;
export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body });
