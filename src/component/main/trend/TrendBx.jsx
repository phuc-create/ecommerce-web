import React, { useEffect } from 'react';
import { AiOutlineHeart } from "react-icons/ai";
import { BsEye } from "react-icons/bs";
import Aos from "aos";

import "./Trend.css";



function TrendBx({ products }) {
    useEffect(() => {

        Aos.init({ duration: 1500 })


    }, [])
    return (
        products.map((prod) => {
            return (
                <div className="trend__product--box" key={prod.id} data-aos="fade-up">
                    <div className="trend_pd-bx--top">
                        <span className="trend_pd-uppercent">-13%</span>
                        <button className="trend_bx-like-btn">
                            <AiOutlineHeart />
                        </button>
                        <a href="/">
                            <img src={prod.image} alt="demo" />
                        </a>
                        <span className="trend_pd--quickv"><BsEye />&nbsp; view</span>
                    </div>
                    <div className="trend_pd-bx--bot">
                        <a href="/">{prod.name}</a>
                        <span>{prod.price} $</span>
                    </div>
                </div>
            )
        }))
}



export default TrendBx;
