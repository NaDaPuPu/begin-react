import { React } from 'react';

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
        }
        {
            id: 3,
            username: 'Depthfirst',
            email: 'osj@example.com'
        }
    ];
    return (
        <div>
            <div>
                <b>{users[0].username}</b> <span>({users[0].email})</span>
            </div>
            <div>
                <b>{users[1].username}</b> <span>({users[1].email})</span>
            </div>
            <div>
                <b>{users[2].username}</b> <span>({users[2].email})</span>
            </div>
        </div>
    );
}