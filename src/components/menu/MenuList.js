import React, { Component } from 'react';

import MenuItem from './MenuItem';

import styles from './MenuList.module.css';

const MenuList = (props) => {
    const items = props.items.map((item, index) => (
        <MenuItem
            profileToggle={props.profileToggle}
            usersListToggle={props.usersListToggle}
            clicked={props.closeMenu}
            key={index}
            {...item}
        />
    ));

    return (
    <>
      {/* кнопка в шапке меню для закрытия */}
      <div
          className={styles.Header}
          onClick={props.menuToggle}
      >
          <i className={`${styles.Button} fas fa-angle-left`} />
      </div>
      <nav className={styles.List}>
          {items}
      </nav>
    </>
    );
};


export default MenuList;
