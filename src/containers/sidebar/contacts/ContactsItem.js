import React from 'react';
import { NavLink } from 'react-router-dom';

import { connect } from 'react-redux';
import styles from './ContactsItem.module.css';

import { setActiveChat } from '../../../store/actions/index';

import { editContacts, deleteContacts } from '../../../store/actions';

class ContactsItem extends React.Component {
    componentWillMount() {
        this.clickTimeout = null;
    }

    handleClicks = () => {
        // двойной клик - открывает профиль
        if (this.clickTimeout !== null) {
            this.props.profileToggle(this.props);

            clearTimeout(this.clickTimeout);
            this.clickTimeout = null;
        } else {
        // одиночный клик - передает активный чат
            this.props.dispatch(setActiveChat(this.props.contact, 2));
            this.clickTimeout = setTimeout(() => {
                clearTimeout(this.clickTimeout);
                this.clickTimeout = null;
            }, 2000);
        }
    }

    state = {
        name: '',
    }

    handleEditClick(name) {
        return e => this.props.dispatch(editContacts(name));
    }

    handleDeleteClick(id) {
        return e => this.props.dispatch(deleteContacts(id));
    }

    render() {
        return (
            <div className={styles.Block} onClick={this.handleClicks}>
                <NavLink
                    className={styles.Item}
                    to={`/contacts/${this.props.contact}`}
                >
                    <div className={styles.Img}>
                        <img
                            src='https://partner.internet-akademia.ru/upload/site/user.png'
                            className={styles.Icon}
                            alt='avatar'
                        />
                    </div>
                    <div className={styles.Contact}>
                        <div className={styles.Name}>
                            {this.props.byname}
                        </div>
                        {/* <div className={styles.Text}>
                            {this.props.text}
                        </div>
                        <div className={styles.Time}>
                            {this.props.time}
                        </div>
                        <div className={styles.Mark}>
                            {this.props.mark}
                        </div> */}
                        {/* <button onClick={deleteContacts}></button>
                        <button onClick={editContacts}>
                          //<i class="far fa-edit"/>
                        </button> */}
                    </div>
                </NavLink>
            </div>
        );
    }
}

// function mapStateToProps(store){};

export default connect(null)(ContactsItem);
