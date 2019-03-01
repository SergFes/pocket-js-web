import React, { Component } from 'react';
import MessageListToday from './MessageListToday';

// import classes from './Message.module.css';
class Message extends Component {

  render() {
    
    return (
      <div className={classes.test}>
        <MessageListToday messages={[...this.props.messages]} />
      </div>
    );
  }
}

export default Message;
