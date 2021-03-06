import React from 'react';

import "./Trend.css";
import TrendBx from './TrendBx';


function Trend() {
 
    return (
        <div className="trend">
            <div className="trend__content">
                <p className="trend__cont--now">
                    trending now
                </p>
                <p className="trend__context">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum 
                    sequi dolorum reiciendis adipisci ducimus at soluta quis quidem fuga fugit?
                </p>
            </div>
            <div className="trend__products">
                <div className="trend__products--wrapper">
                    <TrendBx />
                </div>
            </div>
        </div>
    )
}

export default Trend;
