import React, {useState, useEffect} from "react";
import styles from "./Header.module.css";
import logo from './img/logo.png'
import arrow from './img/arrow.png';
import line1 from './img/line1.png'
import line2 from './img/line3.png'
import line3 from './img/line2.png';
import arrow_input from './img/arrow_input.png'

import cross from './img/cross.png'

import dollar from './img/dollar_grey.png';
import euro from './img/euro_grey.png'
import rubble from './img/rubble_grey.png'
import dollar_grey_1 from './img/dollar_grey_1.png';

import qiwi from './img/qiwi.png'
import yandex from './img/yandex.png'
import visa from './img/visa.png'
import mastercard from './img/mastercard.png'
let currency = [
    {
        name: ""
    }
]

let Header = (props) => {
    let [openBurger, setOpenBurger] = useState(false);
    let [openPutBalance, setOpenPutBalance] = useState(false);
    let [selectedCurrency, setSelectedCurrency] = useState(false)
    let [selectedPayment, setSelectedPayment] = useState("QIWI");
    let [purseValue, setPurseValue] = useState("");
    let [isPayed, setIsPayed] = useState(false);
    let [isRefill, setIsRefill] = useState(false);

    let [isFocusSum, setIsFocusSum] = useState(false);
    let [isFocusPurse, setIsFocusPurse] = useState(false)

    let [errorSum, setErrorSum] = useState(false);

    let handleClick = (event) => {
        console.log(event.target.value)
        if (event.target.value === "+ 7 (") {
            setPurseValue("")
            event.target.value = "";
            return;
        }
        if (event.target.value.length === 8 && purseValue.length === 3) {
            setPurseValue('12')
            event.target.value = "+ 7 (12";
            return;
        }
        let text = event.target.value.replace("(", "")
            .replace(")","").replace("+","").replace(/\s/g, "");
        console.log('text = ' + "|" + text + "|")
        if (text.length !== 1) setPurseValue(event.target.value.replace("(", "").replace(")","")
            .replace("+","").replace(/\s/g, "").slice(1))
        else setPurseValue(event.target.value.replace("(", "").replace(")","")
            .replace("+","").replace(/\s/g, ""));


        // setPurseValue(event.target.value.replace("(", "").replace(")","")
        //     .replace("+","").replace(/\s/g, ""));
        // let text = event.target.value.replace("(", "")
        //     .replace(")","").replace("+","").replace(/\s/g, "");
        if (text.length !== 1) text = text.slice(1);
        console.log('upText = |' + text + "|")
        switch (text.length) {
            case 0: {
                event.target.value = "";
                break;
            }
            case 1: {
                event.target.value = `+ 7 (${text.slice(0, 1)}`;
                break;
            }
            case 2: {
                event.target.value = `+ 7 (${text.slice(0, 2)}`;
                break;
            }
            case 3: {
                event.target.value = `+ 7 (${text.slice(0, 3)})`;
                break;
            }
            case 4: {
                event.target.value = `+ 7 (${text.slice(0, 3)}) ${text.slice(3, 4)}`;
                break;
            }
            case 5: {
                event.target.value = `+ 7 (${text.slice(0, 3)}) ${text.slice(3, 5)}`;
                break;
            }
            case 6: {
                event.target.value = `+ 7 (${text.slice(0, 3)}) ${text.slice(3, 6)}`;
                break;
            }
            case 7: {
                event.target.value = `+ 7 (${text.slice(0, 3)}) ${text.slice(3, 6)} ${text.slice(6, 7)}`;
                break;
            }
            case 8: {
                event.target.value = `+ 7 (${text.slice(0, 3)}) ${text.slice(3, 6)} ${text.slice(6, 8)}`;
                break;
            }
            case 9: {
                event.target.value = `+ 7 (${text.slice(0, 3)}) ${text.slice(3, 6)} ${text.slice(6, 8)} ${text.slice(8, 9)}`;
                break;
            }
            case 10: {
                event.target.value = `+ 7 (${text.slice(0, 3)}) ${text.slice(3, 6)} ${text.slice(6, 8)} ${text.slice(8, 10)}`;
                break;
            }
            default: {
                event.target.value = `+ 7 (${text.slice(0, 3)}) ${text.slice(3, 6)} ${text.slice(6, 8)} ${text.slice(8, 10)}`;
                console.log('SHITHI')
            }
        }
    }

    return (
        <header className={styles.header}>
            {openPutBalance ?
            <div className={styles.balance__blur}
                 onClick={(event) => event.target.className === styles.block__select ? "" : setSelectedCurrency(false)}>
                <div className={styles.balance__container__active} style={{height: isPayed ? 567 : isRefill ? 700 : 647}}>
                    <div className={styles.balance__title}>{isRefill ? "Вывод средств" : "Пополнение баланса"}</div>
                    <img src={cross} alt="" className={styles.balance__exit} onClick={() => {
                        setOpenPutBalance(!openPutBalance)
                        setIsPayed(false);
                    }}/>
                    <div className={styles.balance__block}>
                        <div className={styles.b_block__title}>Валюта</div>
                        <div name="" id="" className={styles.block__select} onClick={() => setSelectedCurrency(!selectedCurrency)}
                             style={{border: selectedCurrency ? "1px solid #FFF" : "1px solid #595D6E"}}>
                            <div className={styles.block__header} value='1'>
                                <img src={euro} alt="" className={styles.currency__logo}/>
                                <span className={styles.currency__value}>10.99</span>
                            </div>
                            <div className={styles.block__header}>
                                <img src={arrow_input} alt="" style={{marginRight: 16, transform: selectedCurrency ? "rotate(180deg)" : "rotate(0deg)"}}/>
                            </div>
                        </div>
                        {selectedCurrency &&
                            <div className={styles.block__wrapper}>
                                <div className={styles.block__option}>
                                    <div className={styles.option__wrapper}>
                                        <img src={euro} alt="" className={styles.option__currency}/>
                                    </div>
                                    <span>8.05</span>
                                </div>
                                <div className={styles.block__option}>
                                    <div className={styles.option__wrapper}>
                                        <img src={dollar} alt="" className={styles.option__currency}/>
                                    </div>
                                    <span>20.55</span>
                                </div>

                                <div className={styles.block__option}>
                                    <div className={styles.option__wrapper}>
                                        <img src={rubble} alt="" className={styles.option__currency}/>
                                    </div>
                                    <span>10.99</span>
                                </div>
                            </div>
                        }
                    </div>
                    <div className={styles.balance__block}>
                        <div className={styles.b_block__title}>Платежная система</div>
                        <div className={styles.payment__wrapper}>
                            <div className={styles.payment__block}
                            style={{border: selectedPayment === "QIWI" ? "1px solid #FCB90B" : "1px solid #595D6E"}} onClick={() => setSelectedPayment("QIWI")}
                            >
                                <img src={qiwi} alt=""/>
                            </div>
                            <div className={styles.payment__block}
                             style={{border: selectedPayment === "YANDEX" ? "1px solid #FCB90B" : "1px solid #595D6E"}} onClick={() => setSelectedPayment("YANDEX")}
                            >
                                <img src={yandex} alt=""/>
                            </div>
                            <div className={styles.payment__block}
                             style={{border: selectedPayment === "VISA" ? "1px solid #FCB90B" : "1px solid #595D6E"}} onClick={() => setSelectedPayment("VISA")}
                            >
                                <img src={visa} alt=""/>
                                <img src={mastercard} alt="" style={{marginLeft: 5}}/>
                            </div>
                        </div>
                    </div>
                    <div className={styles.balance__block}>
                        <div className={styles.b_block__title} style={{color: isFocusSum ? "#FCB90B" : ""}}>Сумма</div>
                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                            <input type="text" className={styles.input} placeholder='5-100$'
                                   onFocus={() => setIsFocusSum(true)}
                                   onBlur={() => setIsFocusSum(false)}/>
                            <div className={styles.input__button}>
                                <span className={styles.input__line}></span>
                                <span className={styles.input__line}></span>
                            </div>
                        </div>
                        {isRefill &&
                            <div className={styles.wrapper__calc}>
                                <div className={styles.calc__list}>
                                    <span>Комиссия</span>
                                    <span className={styles.calc__value}>
                                        <span>0</span>
                                        <img src={dollar_grey_1} alt="" style={{marginLeft: 10}}/>
                                    </span>
                                </div>
                                <div className={styles.calc__list}>
                                    <span>Итоговая сумма</span>
                                    <span className={styles.calc__value}>
                                        <span>0</span>
                                        <img src={dollar_grey_1} alt="" style={{marginLeft: 10}}/>
                                    </span>
                                </div>
                            </div>
                        }
                    </div>
                    <div className={styles.balance__block} style={{display: !isPayed ? "block" : "none"}}>
                        <div className={styles.b_block__title} style={{color: isFocusPurse ? "#FCB90B" : ""}}>Номер кошелька</div>
                        <input type="text" className={styles.input} placeholder='Введите ваш номер кошелька' style={{width: '100%', textAlign: 'center'}}
                               onFocus={() => setIsFocusPurse(true)}
                               onBlur={() => setIsFocusPurse(false)}
                               onChange={(event) => handleClick(event)}/>
                    </div>
                    <div className={styles.payment__button} onClick={() => setIsPayed(true)}>Пополнить баланс</div>
                    <div className={styles.payed__message} style={{display: isPayed ? "flex" : "none"}}>
                        Сейчас вы будете перенаправлены на сайт платежной системы
                    </div>
                </div>
            </div> :
                <div className={styles.balance__blur__inactive}>
                    <div className={styles.balance__container__inactive}>
                        <div className={styles.balance__title}>Вывод средств</div>
                        <img src={cross} alt="" className={styles.balance__exit} onClick={() => setOpenPutBalance(!openPutBalance)}/>
                        <div className={styles.balance__block}>
                            <div className={styles.b_block__title}>Валюта</div>
                        </div>
                    </div>
                </div>}
            <div className={styles.header__sidebar}>
                <div className={styles.sidebar__topButton}>
                    <img src={line1} alt="" className={styles.sidebar__line}/>
                    <img src={line2} alt="" className={styles.sidebar__line}/>
                    <img src={line3} alt="" className={styles.sidebar__line}/>
                </div>
            </div>
            <div className={styles.burger__container} style={{background: openBurger ? 'rgba(37, 38, 50, 0.9)' : 'rgba(37, 38, 50, 0)',
                visibility: openBurger ? "visible" : "hidden"}}>
                <div className={styles.burger__wrapper} style={{opacity: openBurger ? 1 : 0}}>
                    <div className={styles.burger__item}>Все вставки</div>
                    <div className={styles.burger__item} onClick={() => {
                        setIsRefill(false);
                        setOpenPutBalance(!openPutBalance)
                    }}>Статистика команд</div>
                    <div className={styles.burger__item} onClick={() => {
                        setIsRefill(true);
                        setOpenPutBalance(!openPutBalance)
                    }}>Техподдержка</div>
                    <div className={styles.burger__item}>Контакты</div>
                    <div className={styles.burger__item}>
                        <div className={styles.burger__item_1}>
                            <div className={styles.header__language}>
                        <span className={styles.language__value}>
                            Ru
                        </span>
                                <img src={arrow} className={styles.arrow} alt=""/>
                            </div>
                            <div className={styles.header__currency}>
                                <img src={dollar} className={styles.currency__valute} alt=""/>
                                <img src={arrow} className={styles.arrow} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className={styles.burger__item_2}>
                        <div className={styles.header__login}>
                            Войти
                        </div>
                        <div className={styles.header__button}>
                            Зарегистрироваться
                        </div>
                    </div>
                </div>
            </div>
            <img src={logo} alt="" className={styles.header__logo}/>
            <div className={styles.header__container}>
                <div className={styles.header__list}>
                    <div className={styles.list__item}>
                        Все ставки
                    </div>
                    <div className={styles.list__item} onClick={() => {
                        setIsRefill(false);
                        setOpenPutBalance(!openPutBalance)
                    }}>
                        Статистика команд
                    </div>
                    <div className={styles.list__item} onClick={() => {
                        setIsRefill(true);
                        setOpenPutBalance(!openPutBalance)
                    }}>
                        Техподдержка
                    </div>
                    <div className={styles.list__item}>
                        Контакты
                    </div>

                </div>
                <div className={styles.header__right}>
                    <div className={styles.header__language}>
                        <span className={styles.language__value}>
                            Ru
                        </span>
                        <img src={arrow} className={styles.arrow} alt=""/>
                    </div>
                    <div className={styles.header__currency}>
                        <img src={dollar} className={styles.currency__valute} alt=""/>
                        <img src={arrow} className={styles.arrow} alt=""/>
                    </div>
                    <div className={styles.header__login}>
                        Войти
                    </div>
                    <div className={styles.header__button}>
                        Зарегистрироваться
                    </div>
                </div>
            </div>
            <div className={openBurger ? styles.burger_menu_active : styles.burger__menu} onClick={() => setOpenBurger(!openBurger)}
                 style={{position: openBurger ? "fixed": ""}}>
                <span></span>
                <span className={styles.middle_span_menu}></span>
                <span></span>
            </div>
        </header>
    )
}

export {Header};