import React, {useState} from 'react';
import clas from './firstLayer.module.css'

import cats from './../../accets/kats.mp4'

const FirstLayer = () => {
    let  [display,changeDisplay] = useState('block')
    let  [scroll,changeSkroll] = useState(0)
    const onScrollHandler =(e)=>{
        if(e.deltaY>0){
            changeSkroll(scroll++)
        }
        // else changeSkroll(scroll--)
        if(scroll >1     ){
            changeDisplay('none')
        }
        // else changeDisplay('block')
        console.log(scroll)
    }

    return (
        <div   className={clas.MainDiv}  style={{display: display}} onWheel={(e)=>onScrollHandler(e)}>
            <video autoPlay='true' loop muted width='100%'>

                <source  src={cats} type="video/mp4"/>
            </video>
        </div>
    );
};

export default FirstLayer;