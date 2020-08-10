import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src='https://tse4-mm.cn.bing.net/th/id/OIP.XFLv5UmVXbUOiby5hloBHAHaEK?pid=Api&rs=1' />
      {props.message}
      <div>
        <span>Likes</span > {props.likesCount}
      </div>

    </div>
  )
}
export default Post;