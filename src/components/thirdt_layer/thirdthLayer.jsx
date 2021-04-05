import React from 'react';
import clas from './thirdthLayer.module.css'
const ThirdthLayer = () => {

    return (
        <div   className={clas.MainDiv} >
            <h1 className={clas.onTittle}>ט שנכתב כא</h1>
            <div >
                <div className={clas.mainInfo}>
                    <span className={clas.firstSpan} >italic span italic text here</span><br/>
                    <span className={clas.secondSpan}>טקסט שנכתב כאן, טקסט שנכתב כאן, טקסט שנכתב כאן,</span>

                </div>
            </div>
            <h1 className={clas.underTittle}>ט שנכתב כא</h1>

        </div>
    );
};

export default ThirdthLayer;