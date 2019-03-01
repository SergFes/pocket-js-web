import React from 'react';

import styles from './User.module.css';

const User = (props) => {
    return (
        <div className = {styles.Profile}>
            <div className = {styles.Header}>
                <div className = {styles.User}>
                    <img src = {props.user.img} 
                        alt = 'user'
                        className = {styles.Avatar}
                    />
                    <div className = {styles.Title}>Профиль</div>
                </div>          	
            </div>
        	<div className = {styles.Email}>{props.user.email}</div>
        	<div className = {styles.Name}>{props.user.name}</div>
            <div className  =  {props.user.status ?
                styles.OnLine : 
                styles.OffLine}>
                online
            </div>
            <div className = {styles.Info}>
                <div className = {styles.InfoTitle}>О себе:</div>
                <div className = {styles.InfoText}>{props.user.info}</div>
            </div>
            <div className = {styles.Message}>
                <div>
                    <i className = {styles.MessageIcon + ' fas fa-comment-alt'}/>
                </div>
                <div className = {styles.MessageText}>Написать сообщение</div>
            </div>

            <div className = {styles.ButtonsBlock}>
                <button className = {styles.Button}
                        onClick = {() => {props.addContact()}}
                >
                    <div>
                        <i className = {styles.ButtonIcon + ' fas fa-check'}/>
                    </div>
                    <div className = {styles.ButtonText}>
                        Пригласить
                    </div>
                </button>

                <button className = {styles.Button}
                        onClick = {() => {props.searchShow()}}
                >
                    <div>
                        <i className = {styles.ButtonIcon + ' fas fa-times'}/>
                    </div>
                    <div className = {styles.ButtonText}>
                        Закрыть
                    </div>
                </button>
            </div>
        </div>
    );
}

export default User;