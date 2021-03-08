import React from 'react';
import { AiOutlineHeart } from "react-icons/ai";
import { BsEye } from "react-icons/bs";



function CollecBx({ products }) {
    return (
        products.map((prod) => {
            return (
                <div className="fs__product--box" key={prod.id}>
                    <div className="fs-bx--top">
                        <span className="fs-uppercent">-13%</span>
                        <button className="fs-like-btn">
                            <AiOutlineHeart />
                        </button>
                        <a href="/">
                            <img src={prod.image} alt="demo" />
                        </a>
                        <span className="fs--quickv"><BsEye />&nbsp; view</span>
                    </div>
                    <div className="fs-bx--bot">
                        <a href="/">{prod.name}</a>
                        <span>{prod.price}$</span>
                    </div>
                </div>
            )
        }))
}

export default CollecBx;
