import React, { useEffect } from 'react';
import Vd from "../../img/mp44.mp4";
import "./Video.css";
import Aos from "aos";
function Video() {
    useEffect(() => {

        Aos.init({ duration: 1500 });

    }, [])
    return (
        <div className="video__bg">
            <div className="video__bg--title">
                <h1>Ipad pro 2021</h1>
            </div>
            <div className="video__bg-wrapper">
                <video loop={true} controls muted data-aos="fade-right">
                    <source src={Vd} type="video/mp4" />
                </video>
                <div className="video__wrapper-bot" data-aos="fade-left">
                    <h1>The Ipad of your choice</h1>
                    <p>Bring for you the best products</p>
                    <a href="/">Explore Now</a>
                </div>
            </div>
        </div>
    )
}
export default Video;
