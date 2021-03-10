import { React } from 'react';

function User({ user }) {
    return(
        <div>
            <b>{user.username}</b> <span>({user.email})</span>
        </div>
    )
}

function UserList() {
    const users = [
        {
            id: 1,
            username: 'NaDaPuPu',
            email: 'jun19998@gmail.com'
        },
        {
            id: 2,
            username: 'VKSEED',
            email: 'seed@example.com'
        },
        {
            id: 3,
            username: 'Depthfirst',
            email: 'osj@example.com'
        }
    ];
    return (
        <div>
            <User user={users[0]} />
            <User user={users[1]} />
            <User user={users[2]} />
        </div>
    );
}

export default UserList;