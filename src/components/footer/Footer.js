import React from 'react';
import footerM from './footer.module.css'


const Footer = ({name}) => {
    return (
        <div className={footerM.footer}>
            <h2>{name}</h2>
        </div>
    );
};

export default Footer;