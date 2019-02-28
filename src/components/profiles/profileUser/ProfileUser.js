import React, { Component } from 'react';

import ProfileUserTop from './ProfileUserTop';
import ProfileClose from './ProfileClose';

import styles from './ProfileUser.module.css';


class ProfileUser extends Component {
    render() {
        return (
            <section className={styles.profile} id={this.props.id}>
                <div className={styles.header}>
                    <div className={styles.header__pic}>
                        <ProfileUserTop />
                        <div className={styles['status-color']} />
                    </div>
                    <p className={styles.header__text}>Профиль</p>
                    <p className={styles.header__mail}>
                //
                        {this.props.profile.email}
                    </p>
                </div>
                <h1 className={styles.name}>{this.props.profile.name}</h1>
                <div className={styles.status}>
                    <div className={styles.status__about}>
                        О себе:
                    </div>
                    <p className={styles.status__text}>Web-дизайнер, разработчик мобильных приложений, студент GB.</p>
                </div>
                <ul className={styles['profile-menu']}>
                    <li className={styles['profile-menu__items']}>
                        <button className={styles['item-btn']}>
                            <i className={`${styles.Icon} fas  fa-comment-alt`} />
                                Написать сообщение
                        </button>
                    </li>
                    {/*
                    <li className={styles["profile-menu__items profile-menu__items_toggle"]}>
                        <button className={styles["item-btn"]}>
                            <img src={require("../../../images/personal_profile/bell.svg")} alt="#" className={styles["profile-menu__icon"]}/>
                                Оповещения
                        </button>
                        <div className={styles["toggle-switch"]}>
                            <input type="checkbox" className={styles.switch} id="switch">
                                <label for="switch" className={styles.switch__line}>

                                </label>
                            </input>
                        </div>
                    </li>
                    */}
                    <li className={styles['profile-menu__items']}>
                        <button
                            className={styles['item-btn']}
                            onClick={() => { this.props.addToBlackList(this.props.profile.id); }}
                        >
                            <i className={`${styles.Icon} fas  fa-user-slash`} />
                                Добавить в черный список
                        </button>
                    </li>
                    <li className={styles['profile-menu__items']}>
                        <button className={styles['item-btn']}>
                            <i className={`${styles.Icon} fas  fa-trash`} />
                                Очистить переписку
                        </button>
                    </li>
                    <li className={styles['profile-menu__items']}>
                        <button className={styles['item-btn']}>
                            <i className={`${styles.Icon} fas  fa-user-alt-slash`} />
                                Удалить пользователя
                        </button>
                    </li>
                </ul>
                <ProfileClose profileToggle={this.props.profileToggle} />
            </section>
        );
    }
}
export default ProfileUser;
