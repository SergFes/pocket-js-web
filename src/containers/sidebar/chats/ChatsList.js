import React from 'react';


import { connect } from 'react-redux';
import { setActiveChat, getGroupProfile, getInviteCode } from '../../../store/actions/index';

import ChatsItem from './ChatsItem';
import GroupProfile from '../../../components/profiles/GroupProfile';
import Modal from '../../../components/UI/Modal/Modal';


import styles from './ChatsList.module.css';

class ChatsList extends React.Component {
    clickTimeout = null;

    click_count = 1;

    state = {
        modal: false,
        id: null,
    }
    // shouldComponentUpdate(nextProps, nextState) {
    //     if (this.props.invitation_link !== nextProps.invitation_link) {
    //         return false;
    //     }
    //     return true;
    // }


    componentDidUpdate(prevProps, prevState) {
        if (this.state.id !== prevState.id) {
            this.props.dispatch(getGroupProfile(this.state.id));
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.id !== prevState.id) {
            return {
                id: nextProps.id,
            };
        }
        return null;
    }

    handleClicks = (id) => {
        if (this.clickTimeout !== null) {
            this.click_count++;
        } else {
            this.clickTimeout = setTimeout(() => {
                // один клик
                if (this.click_count === 1) {
                    this.props.dispatch(setActiveChat(id, 1));
                    // два клика
                } else if (id === this.state.id) {
                    this.setState({ modal: true });
                }
                this.click_count = 1;
                clearTimeout(this.clickTimeout);
                this.clickTimeout = null;
            }, 300);
        }
    }

    profileToggle = () => {
        this.setState({
            modal: !this.state.modal,
        });
    }

    getInviteCode = () => {
        this.props.dispatch(getInviteCode(this.state.id));
    }

    render() {
        if (!this.props.chats.length) {
            return null; // Если данные еще загружаются
        }

        const profile = this.state.modal ? (
        <>
          <Modal classesNames='Profile'>
              <GroupProfile
                  id='Profile'
                  profile={this.props.group}
                  invitation_link={this.props.invitation_link}
                  profileToggle={this.profileToggle}
                  getInviteCode={this.getInviteCode}
              />
          </Modal>
        </>
        ) : null;

        const chats = this.props.chats.map((chat, index) => (
            <ChatsItem
                key={index}
                handleClicks={this.handleClicks}
                {...chat}
            />
        ));

        return (
        <>
          <div className={styles.List}>
              { chats }
          </div>

          <>
            { profile }
          </>

          <div className={styles.ButtonsBlock}>
              <button className={styles.Button} onClick={this.props.createGroup}>
                  <div>
                      <i className={`${styles.ButtonIcon} fas fa-check`} />
                  </div>
                  <span className={styles.ButtonText}>Создать группу</span>
              </button>

              <button className={styles.Button} onClick={this.props.searchGroup}>
                  <div className={styles.ButtonIcon}>+</div>
                  <span className={styles.Text}> Добавить группу</span>
              </button>
          </div>
        </>
        );
    }
}

function mapStateToProps(store) {
    return {
        chats: store.chats.chats,
        group: store.chats.group,
        id: store.messages.id,
        activeChat: store.messages.active,
        is_loading: store.chats.is_loading,
        invitation_link: store.chats.invitation_link,
    };
}

export default connect(mapStateToProps)(ChatsList);
