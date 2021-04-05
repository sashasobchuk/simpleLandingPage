import React from 'react';
import clas from './sixth.module.css'
import watsUp from '../../accets/w7.png'
import messanger from '../../accets/mesenger.png'
const Sixth = () => {
    return (
        <div className={clas.divIcons}>
            <a href="https://web.whatsapp.com/" className={clas.hrefMes}>
                <img src={messanger} alt="" className={clas.img}/>
            </a>
            <a href="https://web.whatsapp.com/" className={clas.hrefWat}>
                <img src={watsUp} alt="" className={clas.img}/>
            </a>

        </div>
    );
};

export default Sixth;