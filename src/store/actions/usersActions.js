import {GET_USERS} from "../constants";
import instance from '../axios-docs';

//import ContactsAPI from '../reducers/contactsStub'

export function getUsers(email) {
    return {
        type: GET_USERS,
        //findUsers: ContactsAPI.findUsers(name), //for testing
        payload: instance.get('/users/',{
			params: {
			    email: email
			}
		})
    };   
}