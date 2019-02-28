import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { loginUser } from '../../store/actions';

import classes from './Form.module.css';

class Form extends Component {
    state = {
        email: '',
        password: '',
        formErrors: { email: '', password: '' },
        emailValid: false,
        passwordValid: false,
        formValid: false,
    }

    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value },
            () => { this.validateField(name, value); });
    }

    validateField(fieldName, value) {
        const fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;

        switch (fieldName) {
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : ' введён некоректно. Проверьте ещё раз!';
                break;
            case 'password':
                passwordValid = value.length >= 6;
                fieldValidationErrors.password = passwordValid ? '' : ' слишком короткий';
                break;
            default:
                break;
        }
        this.setState({
            formErrors: fieldValidationErrors,
            emailValid,
            passwordValid,
        }, this.validateForm);
    }

    validateForm() {
        this.setState({ formValid: this.state.emailValid && this.state.passwordValid });
    }

    clickLogin(event) {
        event.preventDefault();
        // localStorage.setItem("token","тест");
        this.props.dispatch(loginUser(this.state.email, this.state.password));
    }

    render() {
        return (
            <div className={classes.main}>
                {/* <div className={classes.content}> */}
                <div className={classes.restangle_2_1} />
                <div className={classes.restangle_2_2} />
                <div className={classes.restangle_2_3}>
                    {/* <div className={classes.maskgroup}></div> */}
                    <div className={classes.ellipse_big} />
                    {/* <div className={classes.ellipse_bigtop}></div> */}
                    <div className={classes.pocket_messenger}>Pocket Messenger</div>
                    <div className={classes.for_geeks_by_geeks}>For geeks by geeks</div>
                    <div className={classes.ellipse_small} />
                    <form action=''>
                        <input
                            className={classes.mail}
                            type='email'
                            required
                            name='email'
                            placeholder='E-mail'
                            value={this.state.email}
                            onChange={this.handleUserInput}
                        />
                        <input
                            className={classes.pass}
                            type='password'
                            name='password'
                            placeholder='Пароль'
                            value={this.state.password}
                            onChange={this.handleUserInput}
                        />
                        <button className={classes.log_in} onClick={(e) => { this.clickLogin(e); }}>Войти</button>
                        {/* <div className={classes.forgot_pass}><a href="#">Забыли пароль?</a></div> */}
                    </form>
                    <div className={classes.registration}>
Нет аккаунта?
                        <Link to='/registration'> Зарегистрироваться</Link>
                    </div>
                </div>
                {/* </div> */}
            </div>
        );
    }
}

const mapStateToProps = store => ({
    token: store.auth.token,
});
export default connect(mapStateToProps)(Form);
