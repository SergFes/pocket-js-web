import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './ChatsItem.module.css';


const ChatsItem = props => (
    <div className={styles.Block} onClick={() => props.handleClicks(props.id)}>
        <NavLink to={`/chats/${props.id}`}>
            <div className={styles.Item}>
                <div className={styles.Img}>
                    <img src={props.img} className={styles.Icon} alt='group_icon' />
                </div>

                <div className={styles.Chat}>
                    <div className={styles.Title}>
                        {props.name}
                    </div>
                    <div className={styles.Text}>
                        {props.text}
                    </div>
                </div>
                <div className={styles.Unread}>
                    {props.unread}
                </div>
                <div className={styles.Time}>
                    {props.time}
                </div>
                <div className={styles.Mark}>
                    {/* props.mark */}
                </div>
            </div>
        </NavLink>
    </div>
);


export default ChatsItem;
