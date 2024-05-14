import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { login } from "../http/userAPI"; // Импортируем функцию для выполнения входа

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

    const handleLogin = async () => { // Убираем параметр event, так как форма не отправляется через submit
        try {
            const response = await login(email, password); // Вызываем функцию для входа
            console.log(response.data); // Выводим данные ответа в консоль
            // Здесь можно добавить логику для перенаправления пользователя на другую страницу после успешного входа
        } catch (error) {
            console.error('Ошибка входа:', error); // Выводим ошибку в консоль
            // Здесь можно добавить логику для отображения сообщения об ошибке пользователю
        }
    };

    const handleRegistrationClick = () => {
        navigate('/registration');
    };

    return (
        <div className='form'>
            <h1>Вход</h1>
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
            <button className='btn-log-form' onClick={handleLogin}>Вход</button> {/* Вызываем handleLogin при нажатии кнопки */}
            <p>
                Нет аккаунта?{' '}
                <button className='btn-reg-form' onClick={handleRegistrationClick}>Зарегистрироваться</button>
            </p>
        </div>
    );
}
