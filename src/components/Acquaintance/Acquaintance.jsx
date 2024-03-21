import React from 'react';
import './Acquaintance.scss';

interface IAcquaintance {
    props: any;
}

const Acquaintance: React.FC<IAcquaintance> = (props): React.JSX.Element => {

    return <div className={'Acquaintance'}>

        <div className={'Acquaintance__Row'}>
            <div className={'Acquaintance__Column'}>
                <p className={'Acquaintance__MessageBox'}>
                    Hello, I would like to introduce you to the Dota 2 assistant.
                    Once you get to know him, I think you'll want to continue using him.
                    I’ll tell you about all this in the video below, it’s quite short, only 5 minutes.
                </p>
            </div>
            <div className={'Acquaintance__Column'}>
                <div className={'Acquaintance__Preview'}>
                    <div className={'VideoBox'}>
                        <iframe className={'Video'} src="https://www.youtube.com/embed/Z9sug_QuhVc?si=QuGgyPySbn7onYmD"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Acquaintance;