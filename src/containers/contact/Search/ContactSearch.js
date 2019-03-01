import React, {Component} from 'react';

import Input from '../../../components/UI/Input/Input';
import ContactItem from '../Item/ContactItem';

import classes from './ContactSearch.module.css';

class SearchGroup extends Component {
    state = {
        searchString: '',
        contacts:[]
    }

    onChangeSearchHandler = (event) => {
        this.setState({searchString: event.target.value});
    }

    onClickSearchHandler = () => {
        this.setState({contacts:[
            {id:1,name:'Первый 1'},
            {id:5,name:'Земля'},
            {id:4,name:'Орел'},
            {id:7,name:'Связной'},
            {id:56,name:'Язык'},
            {id:123,name:'Не отвечать'},
        ]});
    }

    render() {
        let contactsFound = null;

        if (this.state.contacts.length !== 0) {
            contactsFound = this.state.contacts.map(el => {
                return (<ContactItem key={el.id} name={el.name} id={el.id} clicked={this.props.addContact}/>);
            });
        }

        return(
            <>
                <div className={classes.SearchPanel}>
                    <Input
                        elementType='input'
                        inputType='search'
                        // elementClass='search'
                        // inputClass='inputSearch'
                        placeholder='Введите email пользователя'
                        changed={this.onChangeSearchHandler}/>
                    {/* <button className={classes.Search} onClick={() => {this.props.searchGroup(this.state.searchString)}}>Найти</button> */}
                </div>

                {/*for testing*/}
                <ul className={classes.ContactsList}>
                    {contactsFound}
                </ul>


                <div className={classes.Buttons}>
                    <button className={classes.Search} onClick={this.onClickSearchHandler}>
                        Найти
                    </button>
                    <button className={classes.Button} onClick={this.props.closeForm}>
                        <i className="fas fa-times"></i>
                    </button>
                </div>
            </>
        );
    }
}

export default SearchGroup;