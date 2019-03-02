import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import Modal from '../../components/UI/Modal/Modal';
import Backdrop from '../../components/UI/Backdrop/Backdrop';
import MenuList from '../../components/menu/MenuList';
import SearchList from './SearchList';
import User from '../../components/profiles/User';

import { getUsers, addContact, toggleShowBlackList} from '../../store/actions';

import classes from './SidebarHeader.module.css';
import styles from '../../components/menu/MenuItem.module.css';

// компоненты главного меню
const menuItems = [
	{
		href: '/account',
		icon: ' fas fa-user',
		text: 'Личный кабинет',
		action: ''
	},
	{
		href: '/profile',
		icon: ' fas fa-user',
		text: 'Профиль',
		action: ''
	},
	{
		href: '/auth',
		icon: ' fas fa-user-times',
		text: 'Выйти',
		action: 'logout'
	}
];

class SidebarHeader extends Component {
	state = {
		isMenu: false,
		modal: null,
		active: 0,
		userName: '',
		isUsersList: false, //для обнуления списка при закрытии окна поиска
		user: null
	};

	static getDerivedStateFromProps(nextProps, prevState) {
		if (nextProps.user !== prevState.user) {
			return {
				user: nextProps.user,
			}
		}
		//если состояние не изменилось
		return null;
	}

	menuToggle = () => {
		this.setState({
			isMenu: !this.state.isMenu
		});
	};

	searchShow = () => {
		this.setState({
			modal: 1
		});
	};

	searchHide = () => {
		this.setState({
			isUsersList: false, //для обнуления списка
			modal: 0
		});
		//обнуление input при выходе из окна поиска
		document.getElementById('Search').value = '';
	};

	//поиск при нажатии 'Enter'
	enterSearch = (event) => {
		this.setState({ isUsersList: true });
		if (event.key === 'Enter') {
			this.props.dispatch(getUsers(event.target.value));
		}
	};

	//поиск при клике по лупе
	clickSearch = () => {
		this.setState({ isUsersList: true });
		let value = document.getElementById('Search').value;
		this.props.dispatch(getUsers(value));
	};

	openProfile = (data) => {
		this.setState({
			modal: 2,
			isMenu: false,
			user: data
		});
	};

	updateData = (id, name) => {
		// //добавляем имя для последующего добавления в общий список;
		// this.setState({ addItem: name });//для заглушки

		//id для последующего добавления
		this.setState({
			active: id,
			userName: name
		});
	};

	//добавление контакта в общий список
	addContact = () => {
		this.props.dispatch(addContact(this.state.active, this.state.userName));
	};

	//черный список
	usersListToggle = () => {
		this.props.dispatch(toggleShowBlackList());
	};

	switchComponent = () => {
		switch (this.state.modal) {
			//выход
			case 0:
				return null;

			//окно поиска контакта
			case 1:
				let user = (this.state.user.id !== undefined && this.state.isUsersList) ? (
					<SearchList
						updateData={this.updateData}
						openProfile={this.openProfile}

						user={this.state.user}
						userEmail={this.props.userEmail}
						active={this.state.active}/>
				) : null;

				return (
					<Modal classesNames='SearchContacts'>
						<div className={classes.List}>
							{user}
						</div>

						<div className={classes.ButtonsBlock}>
							<button onClick={this.addContact} className={classes.Button}>
								<div>
									<i className={classes.ButtonIcon + ' fas fa-check'}/>
								</div>
								<div className={classes.ButtonText}>
									Пригласить
								</div>
							</button>
							<button onClick={this.searchHide} className={classes.Button}>
								<div>
									<i className={classes.ButtonIcon + ' fas fa-times'}/>
								</div>
								<div className={classes.ButtonText}>
									Отменить
								</div>
							</button>
						</div>
					</Modal>
				);

			//окно профиля
			case 2:
				return (
					<Modal classesNames='SearchContacts'>
						<User user={this.state.user}
							  addContact={this.addContact}
							  searchShow={this.searchShow}
						/>
					</Modal>
				);

			default:
				console.log(this.state.active);
		}
	};

	closeMenu = () => {
		this.setState({
			isMenu: false,
		});
	};

	renderMainMenu = () => this.state.isMenu ? (
		<Fragment>
			<Backdrop show classesNames='MainMenu'/>
			<Modal classesNames='MainMenu'>
				<MenuList
					menuToggle={this.menuToggle}
					items={menuItems}
					closeMenu={this.closeMenu}
					usersListToggle={this.usersListToggle}
				/>
			</Modal>
		</Fragment>
	) : null;

	renderSearchContacts = () =>
		<div className={classes.Search}>
			<input
				placeholder='Найти...'
				type='text'
				className={classes.SearchInput}
				id='Search'
				onClick={this.searchShow}
				onKeyPress={this.enterSearch}
			/>
			<i className={classes.SearchIcon + ' fas fa-search'}
			   onClick={this.clickSearch}/>
		</div>;

   renderMenuIcon = () =>
	   <div onClick={this.menuToggle} className={classes.Burger}>
		   {/*<span className = {classes.BurgerLine}/>*/}
		   <i className={classes.BurgerIcon + ' fas fa-bars'}/>
	   </div>;

   renderBlackListIcon = () =>
	   <div onClick={this.usersListToggle}>
		   <i className={styles.Icon_BlackList + ' fas fa-user-slash'} />
	   </div>;


	render() {
		console.log(this.state.userName);
		return (
			<div className={classes.Menu}>
				{/*иконка меню - гамбургер*/}
				{this.renderMenuIcon()}
				{/*поиск контактов*/}
				{this.renderSearchContacts()}
				{/*иконка черный список*/}
				{this.renderBlackListIcon()}
				{/*окно найденных контактов, профиль пользователя*/}
				{this.switchComponent()}
				{/*главное меню*/}
				{this.renderMainMenu()}
			</div>
		);
	}
}

function mapStateToProps(store) {
	return {
		user: store.users.users,
		userEmail: store.users.userEmail,
		is_loading_users: store.users.is_loading,
	}
}

export default connect(mapStateToProps)(SidebarHeader);
