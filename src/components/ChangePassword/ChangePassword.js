import React, {useState} from "react";
import styles from './ChangePassword.module.css';
import './../../App.css'
import eye__active from "../Sign/img/eye.svg";
import eye__inactive from "../Sign/img/eye.png";
let ChangePassword = () => {
    let [showPassword, setShowPassword] = useState(false)
    let [showAgainPassword, setAgainShowPassword] = useState(false)
    let [equalPasswords, setEqualPasswords] = useState(true);


    let [password, setPassword] = useState('')
    let [password2, setPassword2] = useState('')
    return (
        <div className='page'>
        <div className={`global_container ${styles.recovery__container}`}>
            <div className={styles.change__container}>
                <div className={styles.change__title}>Смена пароля</div>
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
                <div className={styles.change__button}>Сменить пароль</div>
            </div>
        </div>
        </div>
    )
}

export {ChangePassword};