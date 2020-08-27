const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
  userId: null, //Эти данные придут к нам из экшн
  email: null,
  login: null,
  isAuth: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data ,//склеиваем из двух обьектов свойства в один
        isAuth: true
      }
    default:
      return state;
  };
};

export const setAuthUserData = (userId, email, login) => ({ type: SET_USER_DATA, data: { userId, email, login } });

export default authReducer;

