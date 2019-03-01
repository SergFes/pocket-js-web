import React, {Component} from "react";

import {getAccount, editAccount} from '../../../store/actions/index';
import {connect} from 'react-redux';

import ProfileUserTop from "../profileUser/ProfileUserTop";
import ProfileClose from "../profileUser/ProfileClose";

import styles from "./Profile.module.css";


class Profile extends Component {
    state = {
        oldPassword: '',
        newPassword: ''
    }

    componentDidMount(){
        this.props.dispatch(getAccount());
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.dispatch(editAccount(this.state.oldPassword, this.state.newPassword));
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        if (this.props.edit_fulfilled) {
            alert ('Пароль изменен');
        }
        return (
            <section className={styles.profile}>
                <div className={styles.header}>
                    <div className={styles['header__pic']}>
                    <ProfileUserTop/>
                    <button className={styles['change-btn']}>
                        <i className={styles.IconCamera + ' fas  fa-camera'}/>
                    </button>
                    </div>
                    <span className={styles['header__text']}>Мой Профиль</span>
                </div>
                    <div className={styles['profile-info']}>
                        <span className={styles['profile-info__mail']}>
                            {this.props.account.email}
                        </span>
                        <div className={styles['profile-info__name']}>
                            <h2 className={styles["profile-name"]}>
                                {this.props.account.name}
                            </h2>
                            <button className={styles.edit}>
                                <i className={styles.Icon + ' fas  fa-pencil-alt'}/>
                            </button>
                        </div>
                    </div>

                    <div className={styles.status}>
                        <span className={styles["status__info"]}>Данная информация будет доступна всем пользователям в Pocket Messengeer.</span>
                        <div className={styles["status__about"]}>
                            <label htmlFor="about" className={styles["status__about-add"]}>О себе: </label>
                            <input type="text" className={styles["status__about-text"]} id="about"/>
                            <button className={styles.edit}>
                                <i className={styles.Icon + ' fas  fa-pencil-alt'}/>
                            </button>
                        </div>
                        <p className={styles["status__text"]}>Web-дизайнер, разработчик мобильных приложений, студент
                            GB.</p>
                    </div>
                    <div className={styles["profile__about"]}>
                        <ul className={styles["profile-menu"]}>
                            {/*<li className={styles["profile-menu__items"]}>
                                <button className={styles["item-btn"]}>
                                    <i className={styles.Icon + ' fas  fa-comment-alt'}/>
                                    Написать сообщение
                                </button>
                            </li>*/}
                            <li className={styles["profile-menu__items"]}>
                                <button className={styles["item-btn"]}>
                                    <i className={styles.Icon + ' fas  fa-key'}/>
                                    Личный кабинет
                                </button>
                            </li>
                            {/*<li className={styles["profile-menu__items profile-menu__items_toggle"]}>
                                <button className={styles["item-btn"]}>
                                    <i className={styles.Icon + ' fas  fa-bell'}/>
                                    Оповещения
                                </button>

                                <div className={styles["toggle-switch"]}>
                                    <input type="checkbox" className={styles.switch} id="switch"/>
                                    <label htmlFor="switch" className={styles["switch__line"]}/>
                                </div>
                            </li>
                            <li className={styles["profile-menu__items"]}>
                                <button className={styles["item-btn"]}>
                                    <i className={styles.Icon + ' fas  fa-user-times'}/>
                                    Выйти из профиля
                                </button>
                            </li>
                            <li className={styles["profile-menu__items"]}>
                                <button className={styles["item-btn"]}>
                                    <img src={require("../../../images/personal_profile/clear.svg")} alt="#"
                                         className={styles["profile-menu__icon"]}/>
                                    Очистить переписку
                                </button>
                            </li>*/}
                            <li className={styles["profile-menu__items"]}>
                                <div className = {styles.PasswordBlock}>
                                    <h4 className = {styles.PasswordBlockTitle}>Изменение пароля</h4>
                                    <input type = "text" 
                                            className = {styles.PasswordBlockInput} 
                                            placeholder = "Старый пароль"
                                            name = "oldPassword"
                                            onChange = {this.handleChange}
                                            value = {this.state.oldPassword}/>
                                    <input type = "text" 
                                            className = {styles.PasswordBlockInput} 
                                            placeholder = "Новый пароль"
                                            name = "newPassword"
                                            onChange = {this.handleChange}
                                            value = {this.state.newPassword}/>
                                    <button className = {styles.PasswordBlockBtn}
                                            onClick = {this.handleSubmit}>
                                        Изменить пароль
                                    </button>
                                </div>        
                            </li>
                            <li className={styles["profile-menu__items"]}>
                                <button className={styles["item-btn"]}>
                                    <i className={styles.Icon + ' fas  fa-user-alt-slash'}/>
                                    Удалить профиль
                                </button>
                            </li>
                        </ul>
                    </div>
                    <ProfileClose/>
            </section>
        )
    }
}
function mapStateToProps(store) {
    return {
        account: store.account.account,
        edit_fulfilled: store.account.edit_fulfilled
    }
}

export default connect(mapStateToProps)(Profile);