import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { logoutUser } from '../../store/actions';

import styles from './MenuItem.module.css';

class MenuItem extends Component {
	switchAction = (action) => {
	  switch (action) {
	    // выход из аккаунта (в главном меню)
	    case 'logout':
	      this.props.dispatch(logoutUser());
	      break;
	      // открыть профиль контакта/группы
	    case 'openProfile':
	      this.props.profileToggle();
	      break;
	      // открыть черный список
	    case 'usersListToggle':
	      this.props.usersListToggle();
	      break;
	    default:
	      this.props.clicked();
	      break;
	  }
	}

	render() {
	  const item = (this.props.href === null) ? (
	        <div className={styles.Item} onClick={() => { this.switchAction(this.props.action); }}>
	            <i className={styles.Icon + this.props.icon} />
	            <p className={styles.Text}>{this.props.text}</p>
	        </div>
	  )
	    : (
	            <Link to={this.props.href} className={styles.Item} onClick={() => { this.switchAction(this.props.action); }}>
	                <i className={styles.Icon + this.props.icon} />
	                <p className={styles.Text}>{this.props.text}</p>
	            </Link>
	    );
	  return (
  <>
    {item}
  </>
	  );
	}
}

export default connect()(MenuItem);
