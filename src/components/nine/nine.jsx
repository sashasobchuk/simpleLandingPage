import React from 'react';
import clas from './nine.module.css'
import img from '../../accets/no_avatar.png'
const Nine = () => {
    return (
        <div className={clas.fullDiv}>
            <div className={clas.box1}><img src={img} alt=""/>
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dignissimos dolorem molestiae
                nostrum officia possimus quidem soluta, sunt temporibus vel? </span>
            </div>

            <div className={clas.box12}><img src={img} alt=""/>
            <span> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, iste! </span>\
            </div>
        </div>
    );
};

export default Nine;