import React from 'react';
import mainPage from './mainPage.module.css'
import Button from "../button/Button";


const MainPage = ({name}) => {
    return (
        <div className={mainPage.main}>
            <h2>{name}</h2>
            <Button btn='Click'/>
        </div>
    );
};

export default MainPage;