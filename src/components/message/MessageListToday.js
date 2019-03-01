import React from 'react';
import SingleMessage from './SingleMessage';

import classes from './MessageListToday.module.css';

const messageListToday = (props) =>
{
    return (
        <div className={classes.list}>
            <div className={classes.date}><span>{props.day}</span></div>
            {props.messages.map(message => {
              let outputTime = new Date(message.timestamp);
              return (
                <SingleMessage className={classes.item} key={message.timestamp} message={message} outputTime={outputTime}/>
              )
            })}
        </div>
    );
}

export default messageListToday;