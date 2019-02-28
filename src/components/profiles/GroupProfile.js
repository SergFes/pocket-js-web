import React from 'react';
import { Link } from 'react-router-dom';

import styles from './GroupProfile.module.css';


const GroupProfile = props => (
    <div className={styles.Profile} id={props.id}>

        <div className={styles.Header}>
            <div>
                <img src='http://iconnectites.com/images/website-development.png' className={styles.HeaderAvatar} alt='group_icon' />
            </div>

            <p className={styles.HeaderText}>
					Групповой профиль

            </p>

            <div className={styles.GroupInfo}>
                <h2 className={styles.GroupName}>
                    {props.profile.name}
                </h2>

                {/* <button className = {styles.Edit}>
						<div className = {styles.EditIcon}> </div>
            		</button> */}
            </div>
        </div>

        <div className={styles.Status}>
            <span className={styles.StatusInfo}>
		        	Данное название будут видеть Ваши контакты в Pocket Messengeer.

                {' '}
            </span>

            <div className={styles.StatusAbout}>
                <label htmlFor='about' className={styles.StatusAboutAdd}>Описание: </label>
                <input type='text' className={styles.StatusAboutText} id='about' />
                <button className={styles.Edit}>
                    <div className={styles.EditIcon} />
                </button>
            </div>

            <p className={styles.StatusText}>
		        	//
                {props.profile.description}
            </p>
        </div>

        <ul className={styles.GroupMenu}>
            <li className={styles.GroupMenuItems}>
                <Link to='/'>
                    <button className={styles.ItemBtn}>
                        <div className={`${styles.GroupMenuIcon} ${styles.GroupMenuIconMembers}`} />
			                Участники

                        {' '}
                    </button>
                </Link>
            </li>
            <li className={`${styles.GroupMenuItems} ${styles.GroupMenuItemsNotification}`}>
                <button className={styles.ItemBtn}>
                    <div className={`${styles.GroupMenuIcon} ${styles.GroupMenuIconBell}`} />
		                Оповещения

                    {' '}
                </button>
                <div className={styles.ToggleSwitch}>
                    <input type='checkbox' className={styles.Switch} id='switch' />
                    <label htmlFor='switch' className={styles.SwitchLine} />
                </div>
            </li>
            {/* <li className = {styles.GroupMenuItems}>
			        <Link to = '/'>
			            <button className = {styles.ItemBtn}>
							<div className = {styles.GroupMenuIcon + ' ' + styles.GroupMenuIconClear}> </div>
			                Очистить переписку
			            </button>
			        </Link>
		        </li>
		        <li className = {styles.GroupMenuItems}>
			        <Link to = '/'>
			            <button className = {styles.ItemBtn}>
                            <div className = {styles.GroupMenuIcon + ' ' + styles.GroupMenuIconAdd}> </div>
			                Добавить пользователя
			            </button>
			        </Link>
		        </li>
                <li className = {styles.GroupMenuItems}>
                    <Link to = '/'>
                        <button className = {styles.ItemBtn}>
                            <div className = {styles.GroupMenuIcon + ' ' + styles.GroupMenuIconExit}> </div>
                            Выйти из группы
                        </button>
                    </Link>
                </li> */}
            <li className={styles.GroupMenuItems}>
                <button
                    className={styles.ItemBtn}
                    onClick={() => { props.getInviteCode(); }}
                >
		                Получить инвайт
                </button>
                <div className={styles.Invite}>
                    { props.invitation_link }
                </div>
            </li>

            <li className={styles.GroupMenuItems}>
                <Link to='/'>
                    <button className={`${styles.ItemBtn} ${styles.ItemBtnRed}`}>
                        <div className={`${styles.GroupMenuIcon} ${styles.GroupMenuIconRed}`} />
			                Удалить пользователя

                        {' '}
                    </button>
                </Link>
            </li>
        </ul>

        <div className={styles.CloseProfile}>
            <button
                className={styles.CloseBtn}
                onClick={() => { props.profileToggle(); }}
            >
						Закрыть
            </button>
        </div>

    </div>
);


export default GroupProfile;
