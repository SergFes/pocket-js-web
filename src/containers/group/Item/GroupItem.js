import React from 'react';

import classes from './GroupItem.module.css';

const groupItem = props => (
    <li className={classes.groupItem}>
        {props.name}
    </li>
);

export default groupItem;
