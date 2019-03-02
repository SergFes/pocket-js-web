import React from 'react'
import { connect } from 'react-redux';
import UsersBlackList from './UsersBlackList';

const SwitchBlackList = (props) => props.isShowBlackList ? <UsersBlackList {...props}/> : null;

const mapStateToProps = (store) => ({
	items: store.contacts.blacklist,
	errorMessage: store.contacts.error_message,
	isShowBlackList: store.contacts.isShowBlackList,
});
export default connect(mapStateToProps)(SwitchBlackList)
