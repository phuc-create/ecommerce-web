import React,{useState,useEffect} from 'react';
import ImgCarousel from "../../img/ipad4.jpg";
import ImgCarousel2 from "../../img/ipad5.jpg";
import "../carousel/Carousel.css";
import {AiOutlineDoubleLeft,AiOutlineDoubleRight} from "react-icons/ai";
import Aos from "aos";
import "aos/dist/aos.css";

function Carousel() {
    const [slider,setSlider] = useState(false);
    useEffect(()=>{
        Aos.init({duration:1500});
    },[])
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
                    <div className="carousel__box--content aaaa" data-aos="fade-right">
                        <p className="inspired">Inspired from TableTab</p>
                    </div>
                    <div className="shop-btn" data-aos="fade-right">
                        <a href="/">view</a>
                    </div>
                </div>
                <div className="carousel__box">
                    <div className="carousel__box--img">
                        <img src={ImgCarousel2} alt="ImgCarousel2" className="carousel2"/>
                    </div>
                    <div className="carousel__box--content two" data-aos="fade-right">
                        <p className="south-america">explore with us</p>
                    </div>
                    <div className="shop-btn" data-aos="fade-right">
                        <a href="/" >explore</a>
                    </div>
                </div>
        </div>
        <div className="carousel__dots">
        <div className={slider  ? 'carousel-dot active' : 'carousel-dot'} onClick={()=>{
                setSlider(false);
            }}></div>
            <div className={slider ? 'carousel-dot' : 'carousel-dot active'} onClick={()=>{
                setSlider(true);
            }}></div>
            </div>
        </div>
    )
}

export default Carousel;
