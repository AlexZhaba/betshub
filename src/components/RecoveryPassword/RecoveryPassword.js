import React from "react";
import './../../App.css';
import {NavLink} from "react-router-dom";
import styles from './RecoveryPassword.module.css';
import font from './img/fon.png';
let RecoveryPassword = (props) => {
    return (
        <div className='page'>
        <div className={'global_container ' + styles.recovery__container}>
            <div className={styles.container__recovery}>
                <div className={styles.recovery__title}>Восстановление пароля</div>
                <div className={styles.recovery__subtitle}> Если у вас есть аккаунт, мы отправим вам ссылку для создания нового пароля.</div>
                <div className={styles.input__block}>
                    <div className={styles.input__title}>Логин или E-Mail</div>
                    <input className={styles.input} placeholder='Введите ваш логин/e-mail'/>
                </div>
                <div className={styles.input__container}>
                    <span className={styles.input__forgotPassword}>
                        <NavLink to='/sign/'>
                            Вспомнили пароль?
                        </NavLink>
                    </span>
                </div>
                <NavLink to='/changePassword'>
                <div className={styles.recovery__button}>Восстановить пароль</div>
                </NavLink>
            </div>
        </div>
        </div>
    )
}

export {RecoveryPassword}