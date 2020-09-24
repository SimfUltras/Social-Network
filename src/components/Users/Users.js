import React from 'react';
import Paginator from '../common/Paginator/Paginators';
import User from './User';




let Users = ({ currentPage, totalUsersCount, onPageChanged, pageSize, users, ...props }) => {
    return <div>
        <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
            totalUsersCount={totalUsersCount} pageSize={pageSize} />
        <div>
            {
                users.map(u => <User user={u}
                    followingInProgress={props.followingInProgress}
                    key={u.id}
                    unFollow={props.unFollow}
                    follow={props.follow}
                />
                )}
        </div>
    </div>
}

export default Users;