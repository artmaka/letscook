import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function RegistrationForm() {
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handleRegister = (event) => {
        event.preventDefault();

    };

    const handleLoginClick = () => {
        navigate('/user/login');
    };

    return (
        <div className='form'>
            <h1>Регистрация</h1>
            <form onSubmit={handleRegister}>
                <div>
                    <label className='reg-name' >Никнейм:</label>
                        <input className='input-field'
                            type="text"
                            value={username}
                            onChange={handleUsernameChange}
                            required
                        />
                </div>
                <div>
                    <label className='reg-name'>Email:</label>
                    <input className='input-field'
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        required
                    />
                </div>
                <div>
                    <label className='reg-name'>Пароль:</label>
                    <input className='input-field'
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                        required
                    />
                </div>                       
                <button className='btn-reg-reg-form' type="submit">Зарегистрироваться</button>
            </form>
                <p>
                    Уже есть аккаунт?{' '}
                    <button className='btn-reg-log-form' onClick={handleLoginClick}>Войти</button>
                </p>
        </div>
    );
}
