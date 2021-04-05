import React from 'react';
import clas from './button.module.css'

const Button = ({ButtonDisplay,changeDisplayHandler}) => {
    //style={{display: LoginDisplay}}
    return (
        <div style={{display: ButtonDisplay}} onClick={changeDisplayHandler}>
        <span   className={clas.pseudoButton}>מנכם למטכין נשואי מנורך. סחטיר בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם ברש</span>

        </div>
    );
};

export default Button;