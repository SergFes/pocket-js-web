import React, { Component } from 'react';

import classes from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {

    shouldComponentUpdate ( nextProps, nextState ) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }

    render () {
        let assignedClasses = [];
        if (this.props.classesNames) {
            assignedClasses = this.props.classesNames.split(' ');
        }
        assignedClasses.push('Modal');

        return (
            <>
                {/* <Backdrop show={this.props.show} clicked={this.props.modalClosed} /> */}
                <div
                    className={assignedClasses.map(el => {
                        return classes[el]
                    }).join(' ')}>
                    {this.props.children}
                </div>
            </>
        )
    }
}

export default Modal;