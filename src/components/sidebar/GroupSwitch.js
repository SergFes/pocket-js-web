import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Chats from '../../containers/sidebar/chats/Chats';
// import GroupProfile from './GroupProfile'


const GroupSwitch = () => (
    <Switch>
        <Route exact path='/chats' component={Chats} />
        <Route path='/chats/:id' component={Chats} />
    </Switch>
);


export default GroupSwitch;
