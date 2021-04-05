import React, {useState} from 'react';
import clas from './forthLayer.module.css'

import sky from './../../accets/sky.jpg'

const ForthLayer = () => {


    return (
        <div   className={clas.MainDiv} >
            <h1 className={clas.firsttext}>ט שנכתב כא</h1>
            <h1 className={clas.boxTittle}>- שנכתבשנכתבשנכתב כא   -</h1>

            <div className={clas.bigBox}>
                <div className={clas.box1}> <span>עבור תיבה 1 ו -2 טקסט כאן יהיה עבור תיבה 1 ו -2 טקסט כאן יהיה עבור תיבה 1 ו -2 טקסט כאן יהיה עבור תיבה 1 ו -2 טקסט כאן יהיהעבור תיבה 1 ו -2 טקסט כאן יהיה עבור תיבה 1 ו -2 טקסט כאן יהיה עבור תיבה 1 ו -2 טקסט כאן יהיה עבור תיבה 1 ו -2 טקסט כאן יהיה עבור תיבה 1 ו -2 טקסט כאן יהיה</span></div>
                <div className={clas.box2}><span>עבור תיבה 1 ו -2 טקסט כאן יהיה עבור תיבה 1 ו -2 טקסט כאן יהיהעבור תיבה 1 ו -2 טקסט כאן יהיה עבור תיבה 1 ו -2 טקסט כאן יהיה עבור תיבה 1 ו -2 טקסט כאן יהיה עבור תיבה 1 ו -2 טקסט כאן יהיהעבור תיבה 1 ו -2 טקסט כאן יהיה עבור תיבה 1 ו -2 טקסט כאן יהיה עבור תיבה 1 ו -2 טקסט כאן יהיה עבור תיבה 1 ו -2 טקסט כאן יהיה</span></div>
            </div>
        </div>
    );
};

export default ForthLayer;