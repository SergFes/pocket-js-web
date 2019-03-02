import React, { Component } from 'react';
import { getBlackList, clearToBlackList, toggleShowBlackList, delFromBlackList } from '../../store/actions';
import Spinner from '../../components/UI/Spinner/Spinner';
import Modal from '../../components/UI/Modal/Modal';
import styles from '../../components/usersList/UsersList.module.css';
import UsersList from '../../components/usersList/UsersList';


class UsersBlackList extends Component {
	componentDidMount(){
		const {items, dispatch} = this.props;
		if (items === null){
			dispatch(getBlackList());
		}
	}

	componentWillUnmount(){
		this.props.dispatch(clearToBlackList());
	}

	renderContent = (error, items) => (
		{
			'errorMassage': <div className = {styles.List}>errorMessage</div>,
			'component': items === null ? <Spinner/> : <UsersList onDeleteUser={this.delFromBlackList} items={items}/>
		}[error !== null ? 'errorMassage' : 'component']
	);

	usersListToggle = () => {
		this.props.dispatch(toggleShowBlackList());
	};

	delFromBlackList = (id) => {
		this.props.dispatch(delFromBlackList(id));
	};

	render() {
		const {
			props: {
				items,
				errorMessage
			},
			usersListToggle,
			renderContent
		} = this;


		return (
			<Modal classesNames='UsersList'>
				<div className = {styles.Container}>
					<div className = {styles.Header}>
						<h3 className = {styles.Title}>Чёрный список</h3>
						<div className = {styles.CloseBtn} onClick = {usersListToggle}>
							<i className = {styles.Icon + ' fas fa-angle-left'}/>
						</div>
					</div>
					{renderContent(errorMessage, items)}
				</div>
			</Modal>
		);
	}
};

export default UsersBlackList
