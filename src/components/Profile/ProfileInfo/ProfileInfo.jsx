import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/preloader/preloader';
import ProfileStatus from './ProfileStatus';


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>

            {/* <div>
                <img src='https://tse2-mm.cn.bing.net/th/id/OIP.clLqn9DiqFdu3iDlh6GALwHaF7?pid=Api&rs=1' />
            </div> */}
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} />
            <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
  </div>
        </div>
    )
}
export default ProfileInfo;