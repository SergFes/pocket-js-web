import React from 'react';

import classes from './Account.module.css';

const Account = () => (
    <div className={classes.Field}>
        <div className={classes.Header}>
            <h2 className={classes.Title}> Личный кабинет </h2>
            <i className={`${classes.MenuBtn} fas fa-ellipsis-v`} />
        </div>
        <div className={classes.Main}>
            <div className={classes.Subtitle}>
                <span className={classes.Text}>Мои задания</span>
                <i className={`${classes.Btn} fas fa-caret-right`} />
            </div>
            <div className={classes.Subtitle}>
                <span className={classes.Text}>Мое портфолио</span>
                <i className={`${classes.Btn} fas fa-caret-right`} />
            </div>
            <div className={classes.Subtitle}>
                <span className={classes.Text}>Мои настройки</span>
                <i className={`${classes.Btn} fas fa-caret-right`} />
            </div>
        </div>
    </div>
);

export default Account;
