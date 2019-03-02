import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import Sidebar from '../containers/sidebar/Sidebar';
import MessageForm from '../containers/Messages/messageForm';
import Account from '../components/account/Account';
import { connectWS } from '../store/actions';

import classes from './MainPage.module.css';
import SwitchBlackList from '../containers/UsersBlackList/SwitchBlackList';

class MainPage extends Component {
    componentDidMount() {
        if (!this.props.connected) {
            this.props.dispatch(connectWS());
        }
    }

    render() {
        return (
            <div className={classes.mainPage}>
                <Sidebar />
                <div className={classes.chatWindow}>
                    <Switch>
                        <Route path="/account" component={Account} />
                        <Route path="/" component={MessageForm} />
                    </Switch>
                </div>
                <SwitchBlackList/>
            </div>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        activeContact: store.contacts.activeContact,
        connected: store.ws.connected,
    }
}

export default connect(mapStateToProps)(MainPage);
