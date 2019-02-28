import React from 'react';

import UsersItem from './UsersItem';

import styles from './UsersList.module.css';

const UsersList = (props) => {
    let users;
    if (props.items === undefined) {
        users = null;
    } else {
        users = props.items.map((user, index) => (
            <UsersItem
                delFromBlackList={props.delFromBlackList}
                key={index}
                {...user}
            />
        ));
    }

    return (
        <div className={styles.Container}>
            <div className={styles.Header}>
                {/* <img src = '#' className = {styles.Img} alt = "#"/> */}
                <h3 className={styles.Title}>
                    {props.title}
                </h3>
                <div
                    className={styles.CloseBtn}
                    onClick={() => { props.usersListToggle(); }}
                >
                    <i className={`${styles.Icon} fas fa-angle-left`} />
                </div>
            </div>
            <ul className={styles.List}>
                {users}
            </ul>
        </div>
    );
};

export default UsersList;
