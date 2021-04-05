import React, {useEffect, useState} from 'react';
import Frame from "./iFrame/Frame";
import Button from "./button/button";
import clas from './fifthLayer.module.css'

const FifthLayer = () => {
    // const source = 'https://codepen.io/TurboTodd2k/pen/zxWBzK';
    //    /*display: inline-block;*/

    let [ButtonDisplay,changeButtonDisplay] = useState('block')
    const changeDisplayHandler=() =>{
        changeButtonDisplay('none')
        changeiFrameDisplay('block')
    }
    let [iFrameDisplay,changeiFrameDisplay] = useState('none')


    useEffect(()=>{},[])
    let Sourse = 'https://meshulam.co.il/purchase?b=ad95f0b743f86b72754a0dc7419fc689'
    return (
        <div>
            <Button ButtonDisplay={ButtonDisplay} changeDisplayHandler={changeDisplayHandler} />
            <div className={clas.frame} style={{display: iFrameDisplay}}  >
                <Frame source={Sourse} />

            </div>
        </div>
    );
};

export default FifthLayer;