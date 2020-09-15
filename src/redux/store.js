import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'How are you doing', likesCount: 10 },
        { id: 2, message: 'Kiss my ass', likesCount: 118 },
        { id: 2, message: 'I am kidding', likesCount: 99 },
        { id: 2, message: 'I love you', likesCount: 666 },
      ],
      newPostText: 'it-kamasutra.com',
    },
    dialogsPage: {
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
        { id: 5, name: 'Erni' },
      ],
      newMessageBody: "",
    },
    sidebar: {},
  },
  _callSubscriber() {
    console.log('state has been changed')
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer; // наблюдатель publisher subscriber  / addevent listener 
  },
  dispatch(action) {  // { type:' ADD-POST' }

  this._state.profilePage = profileReducer(this._state.profilePage, action);
  this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
  this._state.sidebar = sidebarReducer(this._state.sidebar, action);

  this._callSubscriber(this._state);   
  }
}



window.store = store;
export default store;
