import React from 'react';
import UsersItem from  './UsersItem';
import styles from './UsersList.module.css';

const UsersList = ({onDeleteUser, items=[]})  => {
    return (
        <ul className = {styles.List}>
            {items.map((user, index) =>
                <UsersItem
					onDeleteUser = {onDeleteUser}
                    key = {index}
                    {...user}
                />
            )}
        </ul>
    )
};

export default UsersList;
