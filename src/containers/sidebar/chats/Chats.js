import React from 'react';

import { connect } from 'react-redux';
import ChatsList from './ChatsList';
import CreateGroup from '../../group/Create/CreateGroup';
import SearchGroup from '../../group/Search/SearchGroup';

import Spinner from '../../../components/UI/Spinner/Spinner';

import { getChats, searchGroup } from '../../../store/actions/index';


class Chats extends React.Component {
    state = {
        active: 1,
    };

    componentDidMount() {
        this.props.dispatch(getChats());
    }

    searchGroup = (name) => {
        this.props.dispatch(searchGroup(name));
    }

    switchComponent() {
        switch (this.state.active) {
            case 1:
                return (
                    <ChatsList
                        chats={this.props.chats}

                        createGroup={() => { this.setState({ active: 2 }); }}
                        searchGroup={() => { this.setState({ active: 3 }); }}
                    />
                );
                break;
            case 2:
                return (
                    <CreateGroup
                        closeForm={() => { this.setState({ active: 1 }); }}
                    />
                );
                break;
            case 3:
                return (
                    <SearchGroup
                        closeForm={() => { this.setState({ active: 1 }); }}
                        searchGroup={this.searchGroup}
                    />
                );
                break;
            default:
                console.log(this.state.active);
                break;
        }
    }


    render() {
        if (this.props.is_loading) {
            return <Spinner />;
        }
        return (
        <>
          { this.switchComponent() }
        </>

        );
    }
}

function mapStateToProps(store) {
    return {
        chats: store.chats.chats,
        is_loading: store.chats.is_loading,
    };
}


export default connect(mapStateToProps)(Chats);
