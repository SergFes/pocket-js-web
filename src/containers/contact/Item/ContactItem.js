import React from 'react';

import classes from './ContactItem.module.css';

const contactItem = props => (
    <li className={classes.contactItem} onClick={() => props.clicked(props.id)}>
        {props.name}
    </li>
);

export default contactItem;
