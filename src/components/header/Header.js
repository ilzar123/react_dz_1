import React from 'react';
import headerM from './header.module.css'


const Header = ({name}) => {
    return (
        <div className={headerM.header}>
            <h2>{name}</h2>
        </div>
    );
};

export default Header;