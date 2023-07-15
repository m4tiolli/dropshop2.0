import { useState } from 'react';
import './Cadastro.css'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';

function Cadastro() {
    const navigate = useNavigate()
    const [isVisible, setIsVisible] = useState(false);
    const [password, setPassword] = useState('');
    const [inputType, setInputType] = useState('password');

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const togglePasswordVisibility = () => {
        setIsVisible(!isVisible);
        setInputType(isVisible ? 'password' : 'text');
    };

    return (
        <div id='containerlogin'>
            <div id='blocklogin'>
                <h1 style={{ color: '#2b1c0f' }}>Criar Conta</h1>
                <div>
                    <div className='divinput'>
                        <input
                            id='nome'
                            className='input'
                            type='text'
                            onBlur={() => {
                                const span = document.getElementById('nome-span');
                                const input = document.getElementById('nome');
                                if (input.value !== '') {
                                    span.style.top = '-15px';
                                    span.style.transition = '0.4s';
                                    span.style.color = '#2b1c0f';
                                    span.style.fontSize = 'x-small';
                                } else {
                                    span.style.top = '0';
                                    span.style.transition = '0.4s';
                                    span.style.color = '#2b1c0f';
                                    span.style.fontSize = 'small';
                                }
                            }}
                        />
                        <label htmlFor='nome' id='nome-span' className='spaninput'>
                            Nome Completo
                        </label>
                        <span className='underline'></span>
                    </div>
                    <div className='divinput'>
                        <input
                            id='email'
                            className='input'
                            type='text'
                            onBlur={() => {
                                const span = document.getElementById('email-span');
                                const input = document.getElementById('email');
                                if (input.value !== '') {
                                    span.style.top = '-15px';
                                    span.style.transition = '0.4s';
                                    span.style.color = '#2b1c0f';
                                    span.style.fontSize = 'x-small';
                                } else {
                                    span.style.top = '0';
                                    span.style.transition = '0.4s';
                                    span.style.color = '#2b1c0f';
                                    span.style.fontSize = 'small';
                                }
                            }}
                        />
                        <label htmlFor='email' id='email-span' className='spaninput'>
                            E-mail
                        </label>
                        <span className='underline'></span>
                    </div>
                    <div className='divinput'>
                        <input
                            id='email'
                            className='input'
                            type='text'
                            onBlur={() => {
                                const span = document.getElementById('email-span');
                                const input = document.getElementById('email');
                                if (input.value !== '') {
                                    span.style.top = '-15px';
                                    span.style.transition = '0.4s';
                                    span.style.color = '#2b1c0f';
                                    span.style.fontSize = 'x-small';
                                } else {
                                    span.style.top = '0';
                                    span.style.transition = '0.4s';
                                    span.style.color = '#2b1c0f';
                                    span.style.fontSize = 'small';
                                }
                            }}
                        />
                        <label htmlFor='email' id='email-span' className='spaninput'>
                            E-mail
                        </label>
                        <span className='underline'></span>
                    </div>
                    <div className='divinput'>
                        <input
                            id='email'
                            className='input'
                            type='text'
                            onBlur={() => {
                                const span = document.getElementById('email-span');
                                const input = document.getElementById('email');
                                if (input.value !== '') {
                                    span.style.top = '-15px';
                                    span.style.transition = '0.4s';
                                    span.style.color = '#2b1c0f';
                                    span.style.fontSize = 'x-small';
                                } else {
                                    span.style.top = '0';
                                    span.style.transition = '0.4s';
                                    span.style.color = '#2b1c0f';
                                    span.style.fontSize = 'small';
                                }
                            }}
                        />
                        <label htmlFor='email' id='email-span' className='spaninput'>
                            E-mail
                        </label>
                        <span className='underline'></span>
                    </div>
                    <div className='divinput'>
                        <input
                            id='password'
                            className='input'
                            type={inputType}
                            value={password}
                            onChange={handlePasswordChange}
                            onBlur={() => {
                                const span = document.getElementById('password-span');
                                if (password !== '') {
                                    span.style.top = '-15px';
                                    span.style.transition = '0.4s';
                                    span.style.color = '#2b1c0f';
                                    span.style.fontSize = 'x-small';
                                } else {
                                    span.style.top = '0';
                                    span.style.transition = '0.4s';
                                    span.style.color = '#2b1c0f';
                                    span.style.fontSize = 'small';
                                }
                            }}
                        />
                        <label htmlFor='password' id='password-span' className='spaninput'>
                            Senha
                        </label>
                        {isVisible ? (
                            <AiOutlineEyeInvisible
                                className='button eye'
                                color='#2b1c0f'
                                onClick={togglePasswordVisibility}
                            />
                        ) : (
                            <AiOutlineEye
                                className='button eye'
                                color='#2b1c0f'
                                onClick={togglePasswordVisibility}
                            />
                        )}
                        <span className='underline'></span>
                    </div>
                </div>
                <button className='button entrar'>entrar</button>
                <div className='buttons'>
                <p className='esqueceu button' onClick={() => navigate("/login")}>já possui uma conta? entre aqui</p>
                </div>
            </div>
        </div>
    );
}

export default Cadastro;
