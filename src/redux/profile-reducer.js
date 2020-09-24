import { usersAPI, profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE'; // create action type
const SET_STATUS = 'SET_STATUS'; // create action type
const DELETE_POST = 'DELETE_POST'; // create action type

let initialState = {
    posts: [
        { id: 1, message: 'How are you doing', likesCount: 10 },
        { id: 2, message: 'Kiss my ass', likesCount: 118 },
        { id: 2, message: 'I am kidding', likesCount: 99 },
        { id: 2, message: 'I love you', likesCount: 666 },
    ],
    profile: null,
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
                posts: [...state.posts, newPost],
                newPostText: '',
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            };
        }
        // case DELETE_POST:{
        //     return {
        //         ...state,
        //         posts: state.posts.filter(p => p.id != postId )
        //     };       
        // }
        default:
            return state;
    }

};

export default profileReducer;
export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });
export const deletePost = (postId) => ({ type: DELETE_POST, postId });

export const getUserProfile = (userId) => async (dispatch) => {
    let response = await usersAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
};

export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data));
};
export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.getStatus(status) // в response сидит результат резолва промиса
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
};


