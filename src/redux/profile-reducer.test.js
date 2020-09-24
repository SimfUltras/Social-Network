import profileReducer, { addPostActionCreator, deletePost} from './profile-reducer';

let state = {
    posts: [
      { id: 1, message: 'How are you doing', likesCount: 10 },
      { id: 2, message: 'Kiss my ass', likesCount: 118 },
      { id: 2, message: 'I am kidding', likesCount: 99 },
      { id: 2, message: 'I love you', likesCount: 666 },
    ]
  };



it('length of posts should be incremented', () => { // name of the test
    //1. test data
    let action = addPostActionCreator('Kama.com');
   
      //2.action
    let newState = profileReducer(state, action) ;  

    //3.expectation
    expect(newState.posts.length).toBe(5) ;
   
  });
  
it('message of new post should be correct ', () => { // name of the test
    //1. test data
    let action = addPostActionCreator('Kama.com');

      //2.action
    let newState = profileReducer(state, action) ;  

    //3.expectation
    expect(newState.posts[4].message).toBe('Kama.com') ;
  });

// it('after deleting length of messages should be decrement', () => { // name of the test
//     //1. test data
//     let action = deletePost(1);

//       //2.action
//     let newState = profileReducer(state, action) ;  

//     //3.expectation
//     expect(newState.posts.length).toBe(3) ;
//   });
  
// it('after deleting length should not be decrement if id is incorrect', () => { // name of the test
//     //1. test data
//     let action = deletePost(1000);

//       //2.action
//     let newState = profileReducer(state, action) ;  

//     //3.expectation
//     expect(newState.posts.length).toBe(4) ;
//   });
  

