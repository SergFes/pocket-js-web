import validator from 'validator';

const passwordMatch = (confirmation, state) => (state.password === confirmation);

export default {

    // валидация для регистрации пользователя
    register_rules: [
        {
            field: 'name',
            method: validator.isEmpty,
            validWhen: false,
            message: 'Никнейм верный.',
        },
        {
            field: 'name',
            method: validator.matches,
            args: [/^.{2,32}$/u],
            validWhen: true,
            message: 'Никнейм должен состоять от 2 до 32 символов',
        },
        {
            field: 'email',
            method: validator.isEmpty,
            validWhen: false,
            message: 'Email верный.',
        },
        {
            field: 'email',
            method: validator.matches,
            args: [/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i],
            validWhen: true,
            message: 'Указан неверный email',
        },
        {
            field: 'password',
            method: validator.isEmpty,
            validWhen: false,
            message: 'Пароль не заполнен',
        },
        {
            field: 'password',
            method: validator.matches,
            args: [/^.{8,32}$/u],
            validWhen: true,
            message: 'Пароль должен состоять от 8 до 32 символов',
        },
        {
            field: 'password_confirmation',
            method: validator.isEmpty,
            validWhen: false,
            message: 'Пароль не совпадает.',
        },
        {
            field: 'password_confirmation',
            method: passwordMatch,
            validWhen: true,
            message: 'Пароль не совпадает.',
        },
    ],
};
