import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleLogin = (event) => {
        event.preventDefault();
        
    };

    const handleRegistrationClick = () => {
        navigate('/registration');
    };

    return (
            <div className='form'>
                <h1>Вход</h1>
                <form onSubmit={handleLogin}>
                    <div>
                        <label className='login-name'>Почта:</label>
                        <input className='input-field'
                            type="email"
                            value={email}
                            onChange={handleEmailChange}
                            required
                        />
                    </div>
                    <div>
                        <label className='login-name'>Пароль:</label>
                        <input className='input-field'
                            type="password"
                            value={password}
                            onChange={handlePasswordChange}
                            required
                        />
                    </div>
                    <button className='btn-log-form' type="submit">Вход</button>
                </form>
                <p>
                    Нет аккаунта?{' '}
                    <button className='btn-reg-form' onClick={handleRegistrationClick}>Зарегистрироваться</button>
                </p>
            </div>
    );
}
