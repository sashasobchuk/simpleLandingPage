import React from 'react';
import clas from './iFrame.module.css'
import Iframe from 'react-iframe'

const Frame = ({source}) => {

    if (!source) {
        return <div>Loading...</div>;
    }
    //"http://www.youtube.com/embed/xDMP3i36naA"
    // const src = source;
    return (
            <Iframe url={source}
                    width="90%"
                    height="800px"
                    // id="myId"
                    className={clas.iFrame}
                    display="initial"
                    position="relative"/>
    )
};

export default Frame;