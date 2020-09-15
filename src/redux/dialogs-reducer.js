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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let body = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, { id: 6, message: body }]
      };  
    default:
      return state;
  };
};
export default dialogsReducer;
export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE , newMessageBody});

