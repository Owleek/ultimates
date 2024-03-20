import React from 'react';
import './Acquaintance.scss';

interface IAcquaintance {
    props: any;
}

const Acquaintance: React.FC<IAcquaintance> = (props): React.JSX.Element => {

    return <div className={'Acquaintance'}>

        <div className={'Acquaintance__Row'}>
            <div className={'Acquaintance__Column'}>
                <div className={'MessageBox'}>
                    Hello, I would like to introduce you to the Dota 2 assistant.
                    Once you get to know him, I think you'll want to continue using him.
                    I’ll tell you about all this in the video below, it’s quite short, only 5 minutes.
                </div>
            </div>
            <div className={'Acquaintance__Column'}>
                <div className={'proba'}>
                    <div className={'VideoBox'}>
                        <iframe className={'Video'} width="560" height="315" src="https://www.youtube.com/embed/Z9sug_QuhVc?si=QuGgyPySbn7onYmD"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen></iframe>
                    </div>
                </div>
            </div>
        </div>
        <button className={'Acquaintance__button'}>Skip >></button>
    </div>
}

export default Acquaintance;