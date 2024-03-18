import * as React from 'react';
import './RetroButton.scss';

interface IRetroButton {
    props: any
}

const RetroButton: React.FC<IRetroButton> = (props): React.JSX.Element => {

    return <div className={'RetroButtonWrapper'}>
        <div className={'RetroButton'}>
            <span className={'RetroButton__cell'}></span>
            <span className={'RetroButton__cell'}></span>
            <span className={'RetroButton__cell'}></span>
            <span className={'RetroButton__cell'}></span>
            <span className={'RetroButton__cell'}></span>
            <span className={'RetroButton__cell'}></span>
            <span className={'RetroButton__cell'}></span>
            <span className={'RetroButton__cell'}></span>
            <span className={'RetroButton__cell'}></span>
        </div>
    </div>


}


export default RetroButton;