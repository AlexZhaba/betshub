import React, {useState} from "react";
import styles from './Sign.module.css';
import './../../App.css';
import {NavLink} from "react-router-dom";

import steam_logo from './img/steam_logo.png';
import steam_logo_circle from './img/steam_logo_circle.png';
import eye__active from './img/eye.svg';
import eye__inactive from './img/eye.png'
import Polygon from './img/Polygon.png'
let Sign = (props) => {
    let [rememberMe, setRememberMe] = useState(false);
    let [acceptTAC, setAcceptTAC] = useState(false);
    let [rememberMeLogin, setRememberMeLogin] = useState(false);
    let [showPassword, setShowPassword] = useState(false)
    let [showAgainPassword, setAgainShowPassword] = useState(false)
    let [equalPasswords, setEqualPasswords] = useState(true);
    let [showPasswordLogin, setShowPasswordLogin] = useState(false);
    //value
    let [login, setLogin] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState('')
    let [password2, setPassword2] = useState('')
    let [activePage, setActivePage] = useState(0)  // 0 - registration ; 1 - login


    let handleClick = (type) => {

        if (type == 1 - activePage) {
            setEqualPasswords(true);
            setLogin("");
            setEmail("");
            setPassword("");
            if (type == 1 - activePage) setActivePage(1 - activePage)
        }
    }
    return (
        <div className='page'>
        <div className={`global_container ${styles.container_sign}`}>
            <div className={styles.container__login} style={{height: activePage ? 426 : 626}}>
                <div className={styles.login__title}>
                    <span className='' style={{color: activePage === 0 ? "#FFF" : "#595D6E", cursor: "pointer", transition: ".2s all"}} onClick={() => handleClick(0)}>Регистрация</span> /
                    <span style={{marginLeft: 5, color: activePage === 1 ? "#FFF" : "#595D6E", cursor: "pointer", transition: ".2s all"}} onClick={() => handleClick(1)}>Вход</span>
                </div>
                <div className={styles.login__ways}>
                    <div className={styles.login__steam}>
                        <img src={steam_logo} alt="" className={styles.steam__img}/>
                        <img src={steam_logo_circle} className={styles.steam__img__circle} alt=""/>
                        <span className={styles.steam__text}>Войти через Steam</span>
                    </div>
                    <div className={styles.login__or}>или</div>
                </div>
                {activePage === 0 ?
                    <div>
                        <div className={styles.input__block}>
                            <div className={styles.input__title}>Логин</div>
                            <input className={styles.input} placeholder='Введите ваш логин' onChange={(event) => setLogin(event.target.value)} value={login}/>
                        </div>
                        <div className={styles.input__block}>
                            <div className={styles.input__title}>E-Mail</div>
                            <input className={styles.input} placeholder='Введите ваш E-Mail' onChange={(event) => setEmail(event.target.value)} value={email}/>
                        </div>
                        <div className={styles.input__block}>
                            <div className={styles.input__title}>Пароль</div>
                            <input type={showPassword ? "text" : "password"} className={styles.input}
                                   placeholder='Введите ваш пароль'
                                   onChange={(event) => setPassword(event.target.value)}
                                   onBlur={() => password2 !== "" && setEqualPasswords(password === password2)}
                            />
                            <img src={showPassword ? eye__active : eye__inactive} alt="" className={styles.password__eye}
                                 onClick={() => setShowPassword(!showPassword)}/>
                        </div>
                        <div className={styles.input__block}>
                            <div className={styles.input__title}>Повторите пароль</div>
                            <input type={showAgainPassword ? "text" : "password"} placeholder='Введите ваш пароль ещё раз'
                                   onBlur={() => {
                                       console.log(password, ' ', password2)
                                       if (password2 !== "") setEqualPasswords(password === password2)
                                   }}
                                   onChange={(event) => {
                                       console.log('ROFL ', event.target.value === "", equalPasswords)
                                       setEqualPasswords(true);
                                       setPassword2(event.target.value)
                                   }}
                                   className={equalPasswords || password2 === "" ? styles.input : styles.input__error}
                            />
                            <img src={showAgainPassword ? eye__active : eye__inactive} alt=""
                                 className={styles.password__eye} onClick={() => setAgainShowPassword(!showAgainPassword)}/>
                            <div className={styles.error}
                                 style={{opacity: equalPasswords || password2 === "" ? "0" : "1"}}>Неверно введён пароль
                            </div>
                        </div>
                        <div className={styles.input__container}>
                            <div className={rememberMe ? styles.checkbox_true : styles.checkbox_false}
                                 onClick={() => setRememberMe(!rememberMe)}/>
                            <span>Запомнить меня</span>
                            <span className={styles.input__forgotPassword}>
                                <NavLink to='/recoveryPassword/'>
                                    Забыли пароль?
                                </NavLink>
                            </span>
                        </div>
                        <div className={styles.input__container}>
                            <div className={acceptTAC ? styles.checkbox_true : styles.checkbox_false}
                                 onClick={() => setAcceptTAC(!acceptTAC)}/>
                            <div style={{width: 271}}> I am 18 years old. I have read and accept <span
                                style={{color: '#FFF', cursor: 'pointer'}}>
                        Terms and Condition</span> & <span
                                style={{color: '#FFF', cursor: 'pointer'}}>Privacy Policy</span></div>
                        </div>
                        <div className={styles.input__container} style={{marginTop: 49}}>
                            <div className={styles.button_reg_active}>
                                Зарегистрироваться
                            </div>
                            <div className={styles.button_log_inactive}>
                                Войти
                            </div>
                        </div>
                    </div>
                        :
                    <div>
                        <div className={styles.input__block}>
                            <div className={styles.input__title}>Логин или E-Mail</div>
                            <input className={styles.input} placeholder='Введите ваш Логин или E-Mail' value={login} onChange={(event) => setLogin(event.target.value)}/>
                        </div>
                        <div className={styles.input__block}>
                            <div className={styles.input__title}>Пароль</div>
                            <input type={showPasswordLogin ? "text" : "password"} className={styles.input}
                                   placeholder='Введите ваш пароль'
                                   value = {password}
                                   onChange={(event) => setPassword(event.target.value)}
                            />
                            <img src={showPasswordLogin ? eye__active : eye__inactive} alt="" className={styles.password__eye}
                                 onClick={() => setShowPasswordLogin(!showPasswordLogin)}/>
                        </div>
                        <div className={styles.input__container}>
                            <div className={rememberMeLogin ? styles.checkbox_true : styles.checkbox_false}
                                 onClick={() => setRememberMeLogin(!rememberMeLogin)}></div>
                            <span>Запомнить меня</span>
                            <span className={styles.input__forgotPassword}>
                                <NavLink to='/recoveryPassword/'>
                                    Забыли пароль?
                                </NavLink>
                            </span>
                        </div>
                        <div className={styles.input__container} style={{marginTop: 49}}>
                            <div className={styles.button_reg_inactive}>
                                Зарегистрироваться
                            </div>
                            <div className={styles.button_log_active}>
                                Войти
                            </div>
                        </div>
                    </div>
                    }
            </div>
        </div>
        </div>
    )
}

export {Sign};