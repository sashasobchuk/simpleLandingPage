import React, {useState} from 'react';
import clas from './secondLayer.module.css'

const SecondLayer = () => {
    return (
        <div   className={clas.MainDiv} >
        <span className={clas.spanTittle}>טקסט שנכתב כאן, טקסט שנכתב כאן, טקסט שנכתב כאן,</span>
        </div>
    );
};

export default SecondLayer;