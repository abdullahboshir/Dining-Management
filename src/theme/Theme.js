import React from 'react';
import './theme.css'

const Theme = () => {

    const setDarkMode = () => {
        document.querySelector('body').setAttribute('data-theme', 'dark')
    };

    const setLightMode = () => {
        document.querySelector('body').setAttribute('data-theme', 'light');
    };

    const toggoleTheme = e => {
        if(e.target.checked) setDarkMode();
        else setLightMode()
    };


    return (
        <div className='dark_mode'>
        <input className='dark_mode_input' type='checkbox' id='dark-toggole' onChange={toggoleTheme}/>
        </div>
    );
};

export default Theme;