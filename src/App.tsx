import React from 'react';
import './App.module.css';
import s from './App.module.css'

function App() {
    return (
        <div className="App">
            <div className={s.container}>
                <div className={s.formContainer}>
                    <h2>Заповнить форму</h2>
                    <button>Физ. особа</button>
                    <button>Юр. особа</button>
                    <div className={s.leftInputGroup}>
                        <input type="text"/>
                        <input type="text"/>
                        <input type="text"/>
                        <input type="text"/>
                        <input type="text"/>
                    </div>
                    <div className={s.rightInputGroup}>
                        <input type="text"/>
                        <input type="text"/>
                        <input type="text"/>
                        <input type="text"/>
                        <input type="text"/>
                    </div>
                </div>
                <div className={s.typeContainer}>
                    <h2>Види допомоги</h2>
                    <h4>Ви можете змінити вид допомоги</h4>
                </div>

            </div>
        </div>
    );
}

export default App;
