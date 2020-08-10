import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
    <div>

        <div>
            <img src='https://tse2-mm.cn.bing.net/th/id/OIP.clLqn9DiqFdu3iDlh6GALwHaF7?pid=Api&rs=1' />
        </div>
        <div className={s.descriptionBlock}> 
            ava + description
  </div>
    </div>
    )
}
export default ProfileInfo;