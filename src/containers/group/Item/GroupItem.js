import React from 'react';

import classes from './GroupItem.module.css';

const groupItem = (props) => {
    return (
        <li className = {classes.groupItem}>
            {props.name}
        </li>
    );
}

export default groupItem;