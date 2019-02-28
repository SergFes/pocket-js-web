import React from 'react';
import classes from './Message.module.css';
import pic from './img/woman-4.png';

export default class SingleMessage extends React.Component {
    render() {
        return (
			 this.props.messages.map((message) => {
                const outputTime = new Date(message.date);
                return (
                    <li className={classes.item} key={message.id}>
                        <div className={classes.superBlock}>
                            {/* <img className={classes.miniFoto} src="./img/woman-4.png" /> */}
                            <img className={classes.miniFoto} src={pic} />
                            <div className={classes.block}>
                                <div className={classes.blockSms}>
                                    <div className={classes.name}>
                                        {message.sender_name}
                                    </div>
                                    <div className={classes.text}>
                                        {message.message}
                                    </div>
                                </div>
                                <div className={classes.time}>
                                    {outputTime.toLocaleTimeString()}
                                </div>
                            </div>
                        </div>

                    </li>
                );
            })
        );
    }
}
