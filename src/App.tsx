import React from 'react';
import './App.module.css';
import s from './App.module.css'

function App() {
    return (
        <div className="App">
            <div className={s.container}>
                <div className={s.formContainer}>'Заповнить форму'</div>
                <div className={s.typeContainer}>'Види допомоги'</div>
            </div>
        </div>
    );
}

export default App;
