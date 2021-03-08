import React, { useEffect } from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";
import "./Collec2.css";
import CollecBx from './CollecBx';
import { products } from './products';
import Aos from "aos";

function Collec2() {
    useEffect(() => {

        Aos.init({ duration: 1500 });

    }, [])
    return (
        <div className="fashion">
            <div className="fs__title-img" data-aos="fade-right">
                <div className="fs__img-bg"></div>
                <h1>Fashion Collection</h1>
                <a className="fs__ref" href="/">Shop now &nbsp; <FaLongArrowAltRight /></a>
            </div>
            <div className="fs__left-side" data-aos="fade-up">
                <div className="fs__side--wrapper">
                    <CollecBx products={products} />
                </div>
            </div>
        </div>
    )
}

export default Collec2;
