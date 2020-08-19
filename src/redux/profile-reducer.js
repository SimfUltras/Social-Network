const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE'; // create action type

let initialState = {
    posts: [
      { id: 1, message: 'How are you doing', likesCount: 10 },
      { id: 2, message: 'Kiss my ass', likesCount: 118 },
      { id: 2, message: 'I am kidding', likesCount: 99 },
      { id: 2, message: 'I love you', likesCount: 666 },
    ],
    newPostText: 'it-kamasutra.com',
    profile: null ,
  };

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
         return {
                ...state,
                posts:[...state.posts, newPost],
                newPostText :'',
            }
        }
        case UPDATE_NEW_POST_TEXT:{
            return {
                ...state,
                newPostText: action.newText
            };       
        }
        case SET_USER_PROFILE:{
            return {
                ...state,
                profile: action.profile
            };       
        }
            default :
            return state;
    }
    
};

export default profileReducer;
export const addPostActionCreator = () => ({ type: ADD_POST });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });
