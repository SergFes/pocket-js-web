import React, {Component} from 'react';

import Input from '../../../components/UI/Input/Input';
import GroupItem from '../Item/GroupItem';

import {connect} from 'react-redux';

import classes from './SearchGroup.module.css';

class SearchGroup extends Component {
    state = {
        searchString: '',
        groups:[]
    }

    componentDidUpdate(prevProps) {
        if (this.props.groups !== prevProps.groups) {
            this.setState({groups: this.props.groups});
        }
    }

    onChangeSearchHandler = (event) => {
        this.setState({searchString: event.target.value});
    }


    // onClickSearchHandler = () => {
        // this.setState({groups:[
        //     {id:1,name:'Группа 1'},
        //     {id:5,name:'Группа еще одна'},
        //     {id:4,name:'Группа хиппи'},
        //     {id:7,name:'Группа 4'},
        //     {id:56,name:'Группа 7'},
        //     {id:123,name:'братство'},
        // ]});    
    // }

    render() {
        let groupsFound = null;

        if (this.state.groups.length !== 0) {
            groupsFound = this.state.groups.map(el => {
                return (<GroupItem key = {el.id}
                                 name = {el.name} 
                                 id = {el.id}/>);
            });
        }

        return(
            <>
                <div className={classes.SearchPanel}>
                    <Input
                        elementType='input'
                        inputType='search'
                        elementClass='search'
                        inputClass='inputSearch'
                        placeholder='Название группы ...'
                        changed={this.onChangeSearchHandler}/>
                    <button className = {classes.Search} 
                            onCLick = {() => {this.props.searchGroup(this.state.searchString)}}>
                        <i class="fas fa-search"/>
                    </button>
                </div>
                <ul className={classes.GroupList}>
                    {groupsFound}
                </ul>
                <div className={classes.Buttons}>
                    <button className={classes.Button} onClick={this.props.closeForm}>
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            </>
        );
    }
}

function mapStateToProps(store) {
    return {
        groups: store.chats.groups
    }
}

export default connect(mapStateToProps)(SearchGroup);