import React from 'react';
import btnBlock from './button.module.css'


const Button = ({btn}) => {

    const click = () => {
        alert('Works')
    }

    return (
        <div className={btnBlock.btn}>
            <button onClick={click}>{btn}</button>
        </div>
    );
};

export default Button;