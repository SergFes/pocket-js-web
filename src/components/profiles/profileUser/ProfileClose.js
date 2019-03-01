import React from "react";
import {Link} from 'react-router-dom';

import styles from "./ProfileUser.module.css";

const ProfileClose = (props) => {
	let closeBtn = (props.profileToggle === undefined) ?
	(
		<Link to = '/chats' className = {styles.Button}>        			
				<i className = {styles.ButtonIcon + ' fas fa-times'}/>
				<p className = {styles.ButtonText}>Закрыть</p>
		</Link>
	) :
	(
		<button className = {styles.Button}
                onClick = {() => {props.profileToggle()}}>        			
				<i className = {styles.ButtonIcon + ' fas fa-times'}/>
				<p className = {styles.ButtonText}>Закрыть</p>
		</button>
	);
    return (
        <div className = {styles["close-profile"]}>        	
			{ closeBtn }
        </div>
    )
}

export default ProfileClose