import React from 'react';
import { location } from 'react-router';

import SidebarHeader from './SidebarHeader';
import Tab from '../../components/sidebar/Header';
import Main from '../../components/sidebar/Main';

import classes from './Sidebar.module.css';

class Sidebar extends React.Component {
    // state - для переключения списка чатов/контактов
    state = {
        active: 'chats',
    };

    render() {
        return (
            <div className={classes.Sidebar}>
                {/* бургер */}
                <SidebarHeader />
                {/* чаты vs контакты */}
                <div className={classes.Tabs}>
                    <div
                        className={classes.Tab}
                        onClick={() => this.setState({ active: 'chats' })}
                    >
                        <Tab href='/chats' anotherLink='/'>
                            <i className={`${classes.Icon} fas fa-envelope`} />
                            <span className={classes.Text}>Чаты</span>
                        </Tab>
                    </div>
                    <div
                        className={classes.Tab}
                        onClick={() => this.setState({ active: 'contacts' })}
                    >
                        <Tab href='/contacts'>
                            <i className={(this.state.active === 'contacts')
                                ? `${classes.IconActive} fas fa-user-friends`
                                : `${classes.Icon} fas fa-user-friends`}
                            />
                            <span className={(this.state.active === 'contacts')
                                ? classes.TextActive : classes.Text}
                            >
Контакты
                            </span>
                        </Tab>
                    </div>
                </div>
                {/* списки, профили */}
                <Main />
            </div>
        );
    }
}


export default Sidebar;
