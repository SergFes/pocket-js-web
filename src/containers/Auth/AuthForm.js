import React from 'react';
import { Link } from 'react-router-dom';

const authForm = () => {
    return (
        <div>
            <h2>Форма авторизации</h2>
            <Link to='/register'>Форма регистрации </Link>
        </div>
    );
}

export default authForm;