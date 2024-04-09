import React from 'react';
import './Configuration.scss';
import '../Input/Input.scss';
import Button from "../Button/Button";

interface IConfiguration {
    props: any;
}

const Configuration: React.FC<IConfiguration> = (props): React.JSX.Element => {

    return <div className={'Configuration'}>
        <div className="Configuration__Frame">
            <div className="Configuration__Header">
                <h1 className="Configuration__Tittle">Configuration</h1>
            </div>
            <b/>
            <b/>
            <label>
                <input type={'checkbox'} className={'checkbox'}/>
            </label>
            <Button className={'Configuration__Button'}>Start</Button>
        </div>
        {/*<Input type="text" placeholder={'enter or scroll'}/>*/}
        {/*<Input className={'checkbox'} type={'checkbox'}/>*/}
        {/*<button className={'button'}>Start timer</button>*/}
    </div>
}

export default Configuration;