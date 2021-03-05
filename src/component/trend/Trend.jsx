import React from 'react';
import {AiOutlineHeart} from "react-icons/ai";
import {BsEye} from "react-icons/bs";
import {  products} from "./products";
import "../../component/trend/Trend.css";
import Demo from "../../img/demo.png";


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
                    <div className="trend__product--box">
                        <div className="trend_pd-bx--top">
                            <span className="trend_pd-uppercent">-13%</span>
                            <button className="trend_bx-like-btn">
                                <AiOutlineHeart />
                            </button>
                            <a href="/">
                            <img src={Demo} alt="demo" />
                            </a>
                            <span className="trend_pd--quickv"><BsEye />&nbsp; view</span>
                        </div>
                        <div className="trend_pd-bx--bot">
                            <a href="/">Ipad pro 2020</a>
                            <span>20.00 $</span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Trend;
