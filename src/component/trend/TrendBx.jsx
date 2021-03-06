import React from 'react';
import {AiOutlineHeart} from "react-icons/ai";
import {BsEye} from "react-icons/bs";
import Demo from "../../img/demo.png";
import "./Trend.css";
import { products} from "./products";

function TrendBx() {
    return (
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
    )
}

export default TrendBx;
