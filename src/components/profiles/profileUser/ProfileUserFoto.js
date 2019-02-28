import React, { Component } from 'react';
import styles from './ProfileUser.module.css';

class ProfileUserFoto extends Component {
    render() {
        return <img src={require('../../../images/personal_profile/avatar.svg')} alt='#' className={styles.header__avatar} />;
    }
}

export default ProfileUserFoto;
