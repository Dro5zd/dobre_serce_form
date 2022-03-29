import React from 'react';
import './App.module.css';
import s from './App.module.css'
import PanToolOutlinedIcon from '@mui/icons-material/PanToolOutlined';
import CheckroomOutlinedIcon from '@mui/icons-material/CheckroomOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

function App() {
    return (
        <div className={s.App}>
            <div className={s.container}>
                <div className={s.formContainer}>
                    <h2>Заповніть форму</h2>
                    <div className={s.btnFormGroup}>
                        <button type="button">Физ. особа</button>
                        <button type="button">Юр. особа</button>
                    </div>
                    <div className={s.inputsGroup}>
                        <div className={s.leftInputGroup}>
                            <div className={s.inline}>
                                <div>
                                    <h5>Ім'я</h5>
                                    <input type="text"/>
                                </div>
                                <div>
                                    <h5>Фамілія</h5>
                                    <input type="text"/>
                                </div>
                            </div>

                            <div>
                                <h5>Назва компаніі/організаціі</h5>
                                <input type="text"/>
                            </div>
                            <div>
                                <h5>Email-адрес</h5>
                                <input type="text"/>
                            </div>
                            <div>
                                <h5>Номер телефону</h5>
                                <input type="text"/>
                            </div>
                        </div>
                        <div className={s.rightInputGroup}>
                            <div>
                                <h5>Країна</h5>
                                <input type="text"/>
                            </div>
                            <div className={s.inline}>
                                <div>
                                    <h5>Місто</h5>
                                    <input type="text"/>
                                </div>
                                <div>
                                    <h5>Штат, район</h5>
                                    <input type="text"/>
                                </div>
                            </div>
                            <div>
                                <h5>Адреса</h5>
                                <input type="text"/>
                            </div>
                            <div className={s.inlineInput}>
                                <h5>Поштовій індекс</h5>
                                <input type="text"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={s.typeContainer}>
                    <h2>Види допомоги</h2>
                    <span>Ви можете змінити вид допомоги</span>
                    <div className={s.btnsGroup}>
                        <div className={s.btnGroup}>
                            <button className={s.btn}>
                                <AccountBalanceWalletOutlinedIcon style={{fontSize: 60, color: 'white'}}/>
                            </button>
                            <h3>Зробити</h3>
                        </div>
                        <div className={s.btnGroup}>

                            <button className={s.btn}>
                                <PanToolOutlinedIcon style={{fontSize: 60, color: 'white'}}/>
                            </button>
                            <h3>Фінансова допомога</h3>
                        </div>
                        <div className={s.btnGroup}>
                            <button className={s.btn}>
                                <CheckroomOutlinedIcon style={{fontSize: 60, color: 'white'}}/>
                            </button>
                            <h3>Матеріальна допомога</h3>
                        </div>
                        <div className={s.btnGroup}>

                            <button className={s.btn}>
                                <FavoriteBorderOutlinedIcon style={{fontSize: 60, color: 'white'}}/>
                            </button>
                            <h3>Волонтерство</h3>
                        </div>
                    </div>
                    <div className={s.paymentMethodContainer}>
                        <div>
                            <h5>Спосіб оплати</h5>
                            <div className={s.paymentBtnGroup}>
                                <div className={s.handBtn}>
                                    <button><h3>Карта VISA/Mastercard</h3></button>
                                </div>
                                <div className={s.walletBtn}>
                                    <button><h3>Приват24</h3></button>

                                </div>
                                <div className={s.clothesBtn}>
                                    <button><h3>Термінали України</h3></button>

                                </div>
                                <div className={s.heartBtn}>
                                    <button><h3>WebMoney</h3></button>

                                </div>
                                <div className={s.heartBtn}>
                                    <button><h3>PayPal</h3></button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h5>Введіть наступні данні</h5>
                            <div className={s.paymentInputGroup}>
                                <div className={s.creditCardNumber}>
                                    <span>Номер картки</span>
                                    <input/>
                                    <input/>
                                    <input/>
                                    <input/>
                                </div>

                                <div className={s.creditCardData}>
                                    <div>
                                        <span>Термін дії</span>
                                        <input/>
                                    </div>
                                    <div>
                                        <span>CVC/CVV</span>
                                        <input/>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div>
                        <button className={s.helpBtn}>Допомогти</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
