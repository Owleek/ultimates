import React from 'react';
import Input from '../Input/Input';
import './Configuration.scss';
import video from '../../assets/Bounty.mp4';

interface IConfiguration {
    props: any;
}

const Configuration: React.FC<IConfiguration> = (props): React.JSX.Element => {

    return <div className={'Configuration'}>

        <div className={'MessageBox'}>
            Hello, I would like to introduce you to the Dota 2 assistant.
            Once you get to know him, I think you'll want to continue using him.
            I’ll tell you about all this in the video below, it’s quite short, only 5 minutes.
        </div>

        <div className={'VideoBox'}>
            <video className={'video'} src={video} controls={true}></video>
        </div>

        {/*<Input type="text" placeholder={'enter or scroll'}/>*/}
        {/*<Input className={'checkbox'} type={'checkbox'}/>*/}
        {/*<button className={'button'}>Start timer</button>*/}
    </div>
}

export default Configuration;