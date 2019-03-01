import React from 'react';
import classes from './MessageListToday.module.css';
import pic from './img/woman-4.png';

export default class SingleMessage extends React.Component {
	render(){
    let StyleBlock;
    let StyleBlockSms;
    let StyleSuperBlock;
    let StyleTime;
    if (this.props.message.receiver === 55 || this.props.message.author === 'Вы') {
      StyleBlock = classes.blockMy
      StyleBlockSms = classes.blockSmsMy
      StyleSuperBlock = classes.superBlockMy
      StyleTime = classes.timeMy
    } else {
      StyleBlock = classes.block
      StyleBlockSms = classes.blockSms
      StyleSuperBlock = classes.superBlock
      StyleTime = classes.time
    }
		return(
		    <div className={StyleSuperBlock}>
                {/*<img className={classes.miniFoto} src="./img/woman-4.png" />*/}
                <div>
                  <img className={classes.miniFoto} src={pic} alt="avatar"/>
                </div>
                <div className={StyleBlock}>
                  <div className={StyleBlockSms}>
                    <div className={classes.name}>
                      {this.props.message.author}
                    </div>
                    <div className={classes.text}>
                      {this.props.message.message}
                    </div>
                  </div>
                  <div className={StyleTime}>
                   {this.props.outputTime.toLocaleTimeString()} 
                  </div>
                </div>
          	</div>
		)
	}

}
