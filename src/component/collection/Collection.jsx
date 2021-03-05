import React, { useEffect } from 'react';
import "../collection/Collection.css";
import Collection1 from "../../img/forweb2.jpg";
import Collection2 from "../../img/forweb3.jpg";
import hoverEffect from 'hover-effect';
import Distor from '../../img/10.jpg';
import Aos from "aos";

function Collection() {
   useEffect(()=>{
       Aos.init({duration:2000});
   })
    useEffect(() => { 
        Array.from(document.querySelectorAll('.collection__img-border')).forEach((e) => {
            const imgs = Array.from(e.querySelectorAll('img'));
          new hoverEffect({
                parent: e,
                intensity: 0.3,
                image1: imgs[0].getAttribute('src'),
                image2: imgs[1].getAttribute('src'),
                displacementImage: Distor,
            });
        });
    }, [])
    return (
        <div className="collection">
            <div className="collection--wrapper">
                <div className="collection__content" data-aos="fade-right">
                    <div className="col__content--head">
                        <p>IPAD COLLECTION</p>
                    </div>
                    <div className="col__content--middle">
                        <p>The Art - Classic Fusion</p>
                    </div>
                    <div className="col__content--h1">
                        <p>TOURBILLON POWER</p>
                    </div>
                    <div className="col__content--describe">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Inventore et labore consequuntur
                        iste necessitatibus tempore ut veniam,
                        consectetur ex non nam quod eveniet laborum modi laboriosam
                            fugiat adipisci dolorum. Sed.</p>
                    </div>
                    <div className="col__content--view">
                        <a href="/">view collection</a>
                    </div>
                </div>
                <div className="collection__img" data-aos="fade-left">
                    <div className="col__img__border-absolute"></div>
                    <div className="collection__img-border">
                        <img className="collection__img--single" src={Collection1} alt="collapse" />
                        <img className="collection__img--single" src={Collection2} alt="collapse2" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Collection;
