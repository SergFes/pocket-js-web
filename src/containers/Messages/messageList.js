import React from 'react';

import classes from './messageList.module.css';

export default class MessageList extends React.Component {
  render() {
    console.log(this.props.messages);
    return (
      <ul className={classes.List}>                 
        {this.props.messages.map(message => {
          return (
           <li key = {message.id}>
             <div>
               {message.user}
             </div>
             <div>
               {message.text}
             </div>
           </li>
         )
       })}
     </ul>
    )
  }
}