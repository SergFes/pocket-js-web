import React, { Component } from 'react';
import { connect } from 'react-redux';

import Modal from '../../components/UI/Modal/Modal';
import Backdrop from '../../components/UI/Backdrop/Backdrop';
import MenuList from '../../components/menu/MenuList';
import SearchList from './SearchList';
import User from '../../components/profiles/User';
import UsersList from '../../components/usersList/UsersList';

import {
    getUsers, addContact, getBlackList, delFromBlackList,
} from '../../store/actions';

import classes from './SidebarHeader.module.css';

class SidebarHeader extends Component {
	state = {
	  menu: false,
	  modal: null,
	  blackList: false,
	  blacklistItems: [],
	  active: 0,
	  userName: '',
	  userslist: false, // для обнуления списка при закрытии окна поиска
	  user: null,
	}

	static getDerivedStateFromProps(nextProps, prevState) {
	  if (nextProps.user !== prevState.user || nextProps.blacklist !== prevState.blacklistItems) {
	    return {
	      user: nextProps.user,
	      blacklistItems: nextProps.blacklist,
	    };
	  }
	  // если состояние не изменилось
	  return null;
	}

	menuToggle = () => {
	  this.setState({
	    menu: !this.state.menu,
	  });
	}

	searchShow = () => {
	  this.setState({
	    modal: 1,
	  });
	}

	searchHide = () => {
	  this.setState({
	    userslist: false, // для обнуления списка
	    modal: 0,
	  });
	  // обнуление input при выходе из окна поиска
	  document.getElementById('Search').value = '';
	}

	// поиск при нажатии 'Enter'
	enterSearch = (event) => {
	  this.setState({ userslist: true });
	  if (event.key === 'Enter') {
	    this.props.dispatch(getUsers(event.target.value));
	  }
	}

	// поиск при клике по лупе
	clickSearch = () => {
	  this.setState({ userslist: true });
	  const value = document.getElementById('Search').value;
	  this.props.dispatch(getUsers(value));
	}

	openProfile = (data) => {
	  this.setState({
	    modal: 2,
	    menu: false,
	    user: data,
	  });
	}

	updateData = (id, name) => {
	  // //добавляем имя для последующего добавления в общий список;
	  // this.setState({ addItem: name });//для заглушки

	  // id для последующего добавления
	  this.setState({
	    active: id,
		 	userName: name,
	  });
	}

	// добавление контакта в общий список
	addContact = () => {
	  this.props.dispatch(addContact(this.state.active, this.state.userName));
	}

	// черный список
	usersListToggle = () => {
	  if (this.state.blackList === false) {
	    this.props.dispatch(getBlackList());
	  }
	  this.setState({
	    blackList: !this.state.blackList,
	  });
	}

	delFromBlackList = (id) => {
	  this.props.dispatch(delFromBlackList(id));
	}

	switchComponent = () => {
	  switch (this.state.modal) {
	    // выход
	    case 0:
	      return null;
	      break;

	      // окно поиска контакта
	    case 1:
	      const user = (this.state.user.id !== undefined && this.state.userslist) ? (
	                <SearchList
	                    updateData={this.updateData}
	                    openProfile={this.openProfile}

	                    user={this.state.user}
	                    userEmail={this.props.userEmail}
	                    active={this.state.active}
	                />
	      ) : null;

	      return (
	                <Modal classesNames='SearchContacts'>
	                    <div className={classes.List}>
	                        {user}
	                    </div>

	                    <div className={classes.ButtonsBlock}>
	                        <button onClick={this.addContact} className={classes.Button}>
	                            <div>
	                                <i className={`${classes.ButtonIcon} fas fa-check`} />
	                            </div>
	                            <div className={classes.ButtonText}>
									Пригласить

	                                {' '}
	                            </div>
	                        </button>
	                        <button onClick={this.searchHide} className={classes.Button}>
	                            <div>
	                                <i className={`${classes.ButtonIcon} fas fa-times`} />
	                            </div>
	                            <div className={classes.ButtonText}>
									Отменить

	                                {' '}
	                            </div>
	                        </button>
	                    </div>
	                </Modal>
	      );
	      break;

	      // окно профиля
	    case 2:
	      return (
	                <Modal classesNames='SearchContacts'>
	                    <User
	                        user={this.state.user}
	                        addContact={this.addContact}
	                        searchShow={this.searchShow}
	                    />
	                </Modal>
	      );
	      break;

	    default:
	      console.log(this.state.active);
	      break;
	  }
	}

	closeMenu = () => {
	  this.setState({
	    menu: false,
	  });
	}

	render() {
	  console.log(this.state.userName);
	  // компоненты главного меню
	  const menuItems = [
	    {
	      href: '/account',
	      icon: ' fas fa-user',
	      text: 'Личный кабинет',
	      action: '',
	    },
	    {
	      href: '/profile',
	      icon: ' fas fa-user',
	      text: 'Профиль',
	      action: '',
	    },
	    {
	      href: '/auth',
	      icon: ' fas fa-user-times',
	      text: 'Выйти',
	      action: 'logout',
	    },
	    {
	      href: null,
	      icon: ' fas fa-user-slash',
	      text: 'Черный список',
	      action: 'usersListToggle',
	    },
	  ];

	  // главное меню
	  const menu = this.state.menu ? (
  <>
    <Backdrop show classesNames='MainMenu' />
    <Modal classesNames='MainMenu'>
        <MenuList
            menuToggle={this.menuToggle}
            items={menuItems}
            closeMenu={this.closeMenu}
            usersListToggle={this.usersListToggle}
        />
    </Modal>
  </>
	  ) : null;

	  // черный список
	  const blacklist = this.state.blackList ? (
	        <Modal classesNames='UsersList'>
	            <UsersList
	                usersListToggle={this.usersListToggle}
	                delFromBlackList={this.delFromBlackList}
	                title='Чёрный список'
	                items={this.state.blacklistItems}
	            />
	        </Modal>
	  ) : null;

	  return (
	        <div className={classes.Menu}>
	            {/* иконка меню - гамбургер */}
	            <div onClick={this.menuToggle} className={classes.Burger}>
	                {/* <span className = {classes.BurgerLine}/> */}
	                <i className={`${classes.BurgerIcon} fas fa-bars`} />
	            </div>

	            {/* поиск контактов */}
	            <div className={classes.Search}>
	                <input
	                    placeholder='Найти...'
	                    type='text'
	                    className={classes.SearchInput}
	                    id='Search'
	                    onClick={this.searchShow}
	                    onKeyPress={this.enterSearch}
	                />
	                <i
	                    className={`${classes.SearchIcon} fas fa-search`}
	                    onClick={this.clickSearch}
	                />
	            </div>

	            {/* окно найденных контактов, профиль пользователя */}
	            {this.switchComponent()}
	            {/* главное меню */}
	            {menu}
	            {/* черный список */}
	            {blacklist}
	        </div>
	  );
	}
}

function mapStateToProps(store) {
    return {
        user: store.users.users,
        userEmail: store.users.userEmail,
        blacklist: store.contacts.blacklist,
        is_loading_users: store.users.is_loading,
    };
}

export default connect(mapStateToProps)(SidebarHeader);
