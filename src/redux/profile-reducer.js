import { usersAPI, profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE'; // create action type
const SET_STATUS = 'SET_STATUS'; // create action type

let initialState = {
    posts: [
      { id: 1, message: 'How are you doing', likesCount: 10 },
      { id: 2, message: 'Kiss my ass', likesCount: 118 },
      { id: 2, message: 'I am kidding', likesCount: 99 },
      { id: 2, message: 'I love you', likesCount: 666 },
    ],
    profile: null ,
    status: ''
  };

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 0
            };
         return {
                ...state,
                posts:[...state.posts, newPost],
                newPostText :'',
            }
        }
        case SET_STATUS:{
            return {
                ...state,
                status: action.status
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
export const addPostActionCreator = (newPostText) => ({ type: ADD_POST , newPostText});
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });

export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId)
    .then(response => {
        dispatch(setUserProfile(response.data));
    });
};
export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
    .then(response => {
        dispatch(setStatus(response.data));
    });
};
export const updateStatus = (status) => (dispatch) => {
    profileAPI.getStatus(status)
    .then(response => {
        if(response.data.resultCode === 0){
        dispatch(setStatus(status));
    }});
};


