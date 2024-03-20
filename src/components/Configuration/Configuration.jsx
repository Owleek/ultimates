import React from 'react';
import Input from '../Input/Input';
import './Configuration.scss';

interface IConfiguration {
    props: any;
}

const Configuration: React.FC<IConfiguration> = (props): React.JSX.Element => {

    return <div className={'Configuration'}>
        {/*<Input type="text" placeholder={'enter or scroll'}/>*/}
        {/*<Input className={'checkbox'} type={'checkbox'}/>*/}
        {/*<button className={'button'}>Start timer</button>*/}
    </div>
}

export default Configuration;