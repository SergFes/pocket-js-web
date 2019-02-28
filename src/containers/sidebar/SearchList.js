import React, { Component } from 'react';

import styles from './SearchList.module.css';


class SearchList extends Component {
    componentWillMount() {
        this.clickTimeout = null;
    }

	handleClicks = () => {
	  // двойной клик
	  if (this.clickTimeout !== null) {
	    this.props.openProfile(this.props.user);
	    clearTimeout(this.clickTimeout);
	    this.clickTimeout = null;
	  } else {
	    // одиночный клик
	    console.log(this.props.user);
	    this.props.updateData(this.props.user.id, this.props.user.username);
	    this.clickTimeout = setTimeout(() => {
	      clearTimeout(this.clickTimeout);
	      this.clickTimeout = null;
	    }, 2000);
	  }
	}

	render() {
	    return (
	        <div
	            className={(this.props.active === this.props.user.id)
                			? `${styles.Item} ${styles.ActiveItem}`
                			: styles.Item}
	            onClick={this.handleClicks}
	        >
	            <img
	                src='https://partner.internet-akademia.ru/upload/site/user.png'
	                alt='user'
	                className={styles.Avatar}
	            />
	            <div className={styles.Name}>
	                {this.props.user.username}
	            </div>
	            <div className={styles.Email}>
	                {this.props.userEmail}
	            </div>
	        </div>
	    );
	}
}

export default SearchList;
