import React,{useState} from 'react';
import ImgCarousel from "../../img/ipad1.jpg";
import ImgCarousel2 from "../../img/ipad3.jpg";
import "../carousel/Carousel.css";
import {AiOutlineDoubleLeft,AiOutlineDoubleRight} from "react-icons/ai";

function Carousel() {
    const [slider,setSlider] = useState(false);
    return (
        <div className="carousel">
            <div className="carousel-btn prev" onClick={()=>{
                setSlider(false);
            }}><AiOutlineDoubleLeft /></div>
            <div className="carousel-btn next" onClick={()=>{
                setSlider(true);
            }}><AiOutlineDoubleRight /></div>
        <div className={slider ? 'carousel-wrap next' :'carousel-wrap'}>
                <div className="carousel__box">
                    <div className="carousel__box--img">
                        <img src={ImgCarousel} alt="ImgCarousel" className="inspired"/>
                    </div>
                    <div className="carousel__box--content">
                        <p className="inspired">Inspired from TableTab</p>
                    </div>
                </div>
                <div className="carousel__box">
                    <div className="carousel__box--img">
                        <img src={ImgCarousel2} alt="ImgCarousel2" className="carousel2"/>
                    </div>
                    <div className="carousel__box--content two">
                        <p className="south-america">explore with us</p>
                    </div>
                </div>
        </div>
        <div className="carousel__dots">
        <div className={slider  ? 'carousel-dot active' : 'carousel-dot'} onClick={()=>{
                setSlider(false);
            }}></div>
            <div className={slider  ? 'carousel-dot' : 'carousel-dot active'} onClick={()=>{
                setSlider(true);
            }}></div>
            </div>
        </div>
    )
}

export default Carousel;
