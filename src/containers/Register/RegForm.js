import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { registerUser } from '../../store/actions';
import FormValidator from '../../components/UI/FieldError/FormValidator';
import validations from '../../components/UI/FieldError/validations';
import styles from './RegForm.module.css';

class RegForm extends Component {
    constructor() {
        super();

        this.validator = new FormValidator(validations.register_rules);

        this.state = { // Здесь хранится актуальное состояние формы регистрации
            name: '',
            email: '',
            password: '',
            password_confirmation: '',
            validation: this.validator.valid(),
            cancelButtonHovered: false,
            regButtonHovered: false,
        };
        this.submitted = false;
    }

    CancelButtonHover = () => {
        this.setState({
            cancelButtonHovered: !this.state.cancelButtonHovered,
        });
    }

    RegButtonHover = () => {
        this.setState({
            regButtonHovered: !this.state.regButtonHovered,
        });
    }

    handleInputChange = (event) => {
        event.preventDefault();

        this.setState({
            [event.target.name]: event.target.value,
        });
    }

      handleFormSubmit = (event) => {
          event.preventDefault();

          const validation = this.validator.validate(this.state);
          this.setState({ validation });
          this.submitted = true;

          if (validation.isValid) {
              this.props.dispatch(registerUser(this.state.email, this.state.password, this.state.name));
          }
      }

    clickCancelHandler = (event) => {
        event.preventDefault();
        this.props.history.push('/auth');
    }

    render() {
        const validation = this.submitted // если форма была отправлена хотя бы 1 раз
            ? this.validator.validate(this.state) // проверять каждый раз, после нажания кнопки Регистрация
            : this.state.validation; // проверять то, что введено
        // console.log(this.state);
        return (
            <div className={styles.Main}>
                <div className={styles.EllipseBig}>
                    <div className={styles.Title}>
                        Pocket Messenger
                    </div>
                    <div className={styles.Subtitle}>
                        For geeks by geeks
                    </div>
                    <div className={styles.EllipseSmall} />
                </div>

                <form className={styles.inputBox} action='true'>
                    <div className={`${styles.formItems} ${styles.Name}`}>
                        <input
                            type='text'
                            name='name'
                            onChange={this.handleInputChange}
                            value={this.state.name}
                            placeholder='Ваш никнейм'
                            className={styles.Input}
                            title='Имя должно содержать от 2 до 32 символов'
                        />
                    </div>
                    <span className={styles.errorForm}>{validation.name.message}</span>
                    <div className={`${styles.formItems} ${styles.Mail}`}>
                        <input
                            type='text'
                            name='email'
                            onChange={this.handleInputChange}
                            value={this.state.email}
                            placeholder='E-mail'
                            className={styles.Input}
                            required
                        />
                    </div>
                    <span className={styles.errorForm}>{validation.email.message}</span>
                    <div className={`${styles.formItems} ${styles.Pass}`}>
                        <input
                            type='password'
                            name='password'
                            onChange={this.handleInputChange}
                            value={this.state.password}
                            placeholder='Пароль'
                            className={styles.Input}
                            title='Пароль должен содержать от 8 до 32 символов'
                        />
                    </div>
                    <span className={styles.errorForm}>{validation.password.message}</span>
                    <div className={`${styles.formItems} ${styles.passRepeat}`}>
                        <input
                            type='password'
                            name='password_confirmation'
                            onChange={this.handleInputChange}
                            value={this.state.password_confirmation}
                            placeholder='Повторите пароль'
                            className={styles.Input}
                            required
                        />
                    </div>
                    <span className={styles.errorForm}>{validation.password_confirmation.message}</span>
                    <div className={styles.formItemsCheck}>
                        {/* <div className={styles.Checkbox}> */}
                        <input
                            type='checkbox'
                            onChange={this.handleCheckbox}
                            className={styles.Checkbox}
                            checked
                        />
                        {/* </div> */}
                        <p className={styles.Text}>
Настоящим подтверждаю, что я ознакомлен и согласен с условиями политики конфиденциальности.
                            <a className={styles.KnowMore} href='/#'>Узнать больше</a>
                        </p>
                    </div>
                    <button
                        onClick={this.handleFormSubmit}
                        className={styles.ButtonOk}
                    >
РЕГИСТРАЦИЯ
                    </button>
                </form>
            </div>
        );
    }
}

export default connect()(withRouter(RegForm));
