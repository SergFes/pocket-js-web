import React from 'react';

import ContactsItem from './ContactsItem';
import ProfileUser from '../../../components/profiles/profileUser/ProfileUser';
import Modal from '../../../components/UI/Modal/Modal';

import styles from './ContactsList.module.css';


class ContactsList extends React.Component {
    state = {
        modal: false,
        profile: {},
    }

    profileToggle = (data) => {
        this.setState({
            modal: !this.state.modal,
            profile: data,
        });
    }

    render() {
        if (!this.props.contacts.length) {
            return null; // Если данные еще загружаются
        }

        const profile = this.state.modal ? (
        <>
          <Modal classesNames='Profile'>
              <ProfileUser
                  profile={this.state.profile}
                  profileToggle={this.profileToggle}
                  addToBlackList={this.props.addToBlackList}
                  id='Profile'
              />
          </Modal>
        </>
        ) : null;

        const contacts = this.props.contacts.map((contact, index) => (
            <ContactsItem
                key={index}
                profileToggle={this.profileToggle}
                {...contact}
            />
        ));

        return (
            <div>
                <div className={styles.List}>
                    {contacts}
                </div>

                <div>
                    {profile}
                </div>
            </div>
        );
    }
}

export default ContactsList;
