import * as React from 'react';
import Button from "../components/Button/Button";
import {useEffect, useState} from "react";
// import promo from '../assets/photo_2023-11-28 01.45.50.jpeg';
const promo2 = require('../assets/photo_2023-11-28 01.45.50.jpeg');


const Promo = () => {
    useEffect(() => { document.cookie = "user=9" }, []);
    return <img style={{width: 'auto', height: '400px', maxWidth: '100%'}} src={promo2}/>
}

const Root = () => {

    const cookies = document.cookie.split(';');

    const parsedCookies = cookies.map(str => ({
        key: str.split('=')[0],
        val: str.split('=')[1]
    }));

    const oldUser = parsedCookies.find(cookie => (cookie['key'] === 'user' && !!cookie['val']))


    return (
        <div className="Root" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100%', width: '100%', backgroundImage: 'url(../assets/photo_2023-11-28 01.45.50.jpeg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
            { !oldUser && <Promo/> }
            <Button style={{marginTop: '40px'}}>Приступить</Button>
        </div>
    )
}

export default Root;



