
import React from 'react';

import { connect } from 'react-redux';
import ContactsList from './ContactsList';
import Spinner from '../../../components/UI/Spinner/Spinner';

import { getContacts, addToBlackList } from '../../../store/actions';


class Contacts extends React.Component {
    componentDidMount() {
        this.props.dispatch(getContacts());
    }

	addToBlackList = (id) => {
	  this.props.dispatch(addToBlackList(id));
	}

	render() {
	  if (this.props.is_loading_contacts) {
	    return <Spinner />;
	  }
	  return (
	        <ContactsList
	            contacts={this.props.contacts}
	            addToBlackList={this.addToBlackList}
	        />
	  );
	}
}

function mapStateToProps(store) {
    return {
        contacts: store.contacts.contacts,
        // id: store.contacts.id,
        is_loading_contacts: store.contacts.is_loading,
    };
}


export default connect(mapStateToProps)(Contacts);
