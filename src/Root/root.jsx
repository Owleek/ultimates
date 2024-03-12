import * as React from 'react';
import Button from "../components/Button/Button";
import {useEffect, useState} from "react";
const promo2 = require('../assets/photo_2023-11-28 01.45.50.jpeg');


const Promo = () => {
    return <img style={{width: 'auto', height: '400px', maxWidth: '100%'}} src={promo2}/>
}

const Root = () => {

    const [guideVisible, setGuideVisible] = useState(true);
    const cookies = document.cookie.split(';');

    const parsedCookies = cookies.map(str => ({
        key: str.split('=')[0],
        val: str.split('=')[1]
    }));

    const oldUser = parsedCookies.find(cookie => (cookie['key'] === 'user' && !!cookie['val']));

    const hideVideo = () => { document.cookie = "user=fer"; setGuideVisible(false) }

    return (
        <div className="Root" style={{height: '100%', width: '100%', backgroundImage: 'url(../assets/photo_2023-11-28 01.45.50.jpeg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>

            {/* Guide */}
            {
                !oldUser && guideVisible && <div className="startPage" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100%', width: '100%', }}>
                    <Promo/>
                    <Button onClick={hideVideo} style={{marginTop: '40px'}}>Пропустить</Button>
                </div>
            }
            {/* /Guide */}


            {/*  Set & Go  */}
            {
                // oldUser && !guideVisible &&
                <div className={"Sets"} style={{
                    width: '70vw',
                    height: '70wh',
                    alignSelf: 'center',
                    border: '1px solid black',
                    background: "white",
                    padding: '2rem'
                }}>
                    <p>
                        <p>Ultimates</p>

                        <div className={'select'}>
                            <div>
                                <input type="text" placeholder={'enter or scroll'}/>
                                <ul>
                                    <li>Black hole</li>
                                    <li>Chronosphere</li>
                                    <li>Doom</li>
                                    <li>Primal split</li>
                                    <li>Ravage</li>
                                </ul>
                            </div>
                            <div className={'plate'}>
                                <div>plate icon</div>
                                {/*<ul>*/}
                                {/*    <li>icon</li>*/}
                                {/*    <li>icon</li>*/}
                                {/*    <li>icon</li>*/}
                                {/*    <li>icon</li>*/}
                                {/*    <li>icon</li>*/}
                                {/*    <li>icon</li>*/}
                                {/*</ul>*/}
                            </div>
                        </div>
                    </p>
                    <p>
                        <label>
                            <input className={'checkbox'} type={'checkbox'}/>
                            <span>Power Runes</span>
                        </label>
                    </p>
                    <p>
                        <input type={'checkbox'}/>
                        <span>Wisdom Runes</span>
                    </p>
                    <p>
                        <input type={'checkbox'}/>
                        <span>Healing lotus</span>
                    </p>
                    <p>
                        <input type={'checkbox'}/>
                        <span>Observers</span>
                    </p>
                    <p>
                        <center>
                            <button className={'button'}>Start timer</button>
                        </center>
                    </p>
                </div>
            }


        </div>
    )
}

export default Root;



