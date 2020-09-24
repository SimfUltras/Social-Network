import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { addPostActionCreator, addNewPostTextActionCreator } from '../../../redux/profile-reducer';
import {Field, reduxForm} from 'redux-form';
import { required, maxLengthCreator } from '../../../utilites/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';

const maxLength10 = maxLengthCreator(10);



const MyPosts = React.memo(props => {
  let postsElements = props.posts.map(p => <Post message={p.message} id={p.id} likesCount={p.likesCount} />);
  let newPostElement = React.createRef();
  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  }
  return (
    <div className={s.postsBlock}>
      <h3> my posts </h3>
      <AddNewPostFormRedux onSubmit = {onAddPost} />
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )
});

const AddNewPostForm = (props) => {
  return(
    <form onSubmit={props.handleSubmit}>
    <div><Field name={'newPostText'} component={Textarea} placeholder={'Post message'}
    validate={[required, maxLength10]}/> </div>
    <div>
      <button>Add post</button>
    </div>
  </form>
  )
}

let AddNewPostFormRedux = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm);

export default MyPosts;