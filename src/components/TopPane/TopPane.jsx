import React from 'react';
import './TopPane.scss';

interface ITopPane {
    props: any;
}

const TopPane: React.FC<ITopPane> = (props): React.JSX.Element => {

    return <div className={'TopPane'}>

        <div className={'LangView'}>
            <span className={'LangView__Text'}>Eng</span>
            <span className={'Icon'}>
                <svg version="1.1"
                     viewBox="10 30 80 28"
                     baseProfile="full"
                     xmlns="http://www.w3.org/2000/svg">
                    <path d="M 22,30 L 78,30 Q 90,32 80,40 L 55,55 Q 50,58 45,55 L 20,40 Q 10,32 22,30" fill="white" />
                </svg>
            </span>
        </div>


    </div>
}

export default TopPane;