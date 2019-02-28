import React from 'react';

import classes from './Input.module.css';

const Input = (props) => {
    let inputElement = null;
    let inputClasses = [];
    if (props.inputClass) {
        inputClasses = props.inputClass.split(' ').map(el => classes[el]);
    }
    inputClasses.push(classes.InputElement);

    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push(classes.Invalid);
    }

    let labelClasses = [];
    if (props.labelClass) {
        labelClasses = props.labelClass.split(' ').map(el => classes[el]);
        labelClasses.push(classes.Label);
    }

    let elementClasses = [];
    if (props.elementClass) {
        elementClasses = props.elementClass.split(' ').map(el => classes[el]);
    }
    elementClasses.push(classes.Input);

    switch (props.elementType) {
    // case ( 'inputNumber' ):
    //     inputElement = <input type='number'
    //         className={inputClasses.join(' ')}
    //         {...props.elementConfig}
    //         value={props.value}
    //         onKeyDown={(event) => props.changed(event,props.inputId)} />;
    //     break;
        case ('input'):
            inputElement = (
                <input
                    type={props.inputType}
                    className={inputClasses.join(' ')}
                    {...props.elementConfig}
                    value={props.value}
                    onChange={props.changed}
                />
            );
            break;
        case ('search'):
            inputElement = (
                <input
                    type={props.inputType}
                    className={inputClasses.join(' ')}
                    {...props.elementConfig}
                    value={props.value}
                    onChange={props.changed}
                />
            );
            break;
        case ('textarea'):
            inputElement = (
                <textarea
                    className={inputClasses.join(' ')}
                    {...props.elementConfig}
                    value={props.value}
                    onChange={props.changed}
                />
            );
            break;
        case ('select'):
            inputElement = (
                <select
                    className={inputClasses.join(' ')}
                    value={props.value}
                    onChange={props.changed}
                >
                    {props.elementConfig.options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.displayValue}
                        </option>
                    ))}
                </select>
            );
            break;
        default:
            inputElement = (
                <input
                    className={inputClasses.join(' ')}
                    {...props.elementConfig}
                    value={props.value}
                    onKeyUp={props.changed}
                />
            );
    }

    return (
        <div className={elementClasses.join(' ')}>
            <label className={labelClasses.join(' ')}>{props.label}</label>
            {inputElement}
        </div>
    );
};

export default Input;
