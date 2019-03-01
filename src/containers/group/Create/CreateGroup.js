import React, {Component} from 'react';

import {createGroup} from '../../../store/actions/index';
import {connect} from 'react-redux';

import Input from '../../../components/UI/Input/Input';

import classes from './CreateGroup.module.css';

class CreateGroup extends Component {
    // = (props) => 
    state = {
        name:'',
        description: ''
    }

    onChangeNameHandler = (event) => {
        this.setState({name: event.target.value})
    }

    onChangeDescriptionHandler = (event) => {
        this.setState({description: event.target.value})
    }

    onCLickConfirmHandler = () => {
        this.props.dispatch(createGroup(this.state.name, this.state.description));
    }

    render() {
        return (
            <div className={classes.CreateGroup}>
                <div className={classes.Inputs}>
                    <Input 
                        elementType='input'
                        label='Название группы:'
                        labelClass='createGroup'
                        placeholder='Введите название'
                        changed={this.onChangeNameHandler}/>
                    <Input 
                        elementType='input'
                        labelClass='createGroup'
                        label='Описание группы:'
                        placeholder='Введите описание'
                        changed={this.onChangeDescriptionHandler}/>
                </div>
                <div className={classes.Buttons}>
                    {/* <button className={classes.Button} onCLick={() => {props.createGroup({...this.state})}}> */}
                    <button className={classes.Button} onClick={this.onCLickConfirmHandler}>
                        <i class="fas fa-check"></i>
                    </button>
                    <button className={classes.Button} onClick={this.props.closeForm}>
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            </div>
        )
    }
}

export default connect(null)(CreateGroup);