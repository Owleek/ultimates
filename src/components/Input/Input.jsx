import * as React from 'react';
import './Input.scss';

interface IInput {
    props: any
}

const Input: React.FC<IInput> = (props): React.JSX.Element => {

    return <div className={'Input'}>
        <input {...props} className={'Input__Field'}/>
    </div>
}


export default Input;