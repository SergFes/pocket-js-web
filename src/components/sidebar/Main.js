import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Chats from '../../containers/sidebar/chats/Chats'
import GroupSwitch from './GroupSwitch'
import ContactsSwitch from './ContactsSwitch'
import Profile from '../profiles/profile/Profile'

import classes from  './Main.module.css';

const main = () => (
	<div className = {classes.Field}>
		<Switch>			
			<Route path='/chats' component = {GroupSwitch}/>
			<Route path='/contacts' component = {ContactsSwitch}/>
			<Route path='/account' component = {Profile}/>
			<Route path='/profile' component = {Profile}/> 
			<Route path='/' component = {Chats}/>
		</Switch>
	</div>
)

export default main
