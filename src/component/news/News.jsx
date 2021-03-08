import React, { useEffect } from 'react';
import F1 from "../../img/f1.jpg";
import F2 from "../../img/f2.jpg";
import F3 from "../../img/f3.jpg";
import "./News.css";
import Aos from "aos";
function News() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    })
    return (
        <div className="news">
            <div className="news__head">
                <h1>latest news</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam recusandae veritatis dolorem illum
                     ex maiores neque ea laudantium, cum dolores.</p>
            </div>
            <div className="news__footer">
                <div className="news__f-box" data-aos="fade-right">
                    <a href="/" className="__f-box--img">
                        <img src={F1} alt="new" />
                    </a>
                    <div className="__f-box--content">
                        <h4>on your desk</h4>
                        <p>llam fuga quae enim dignissimos temporibus laboriosam doloribus delectus corporis?</p>
                    </div>
                </div>
                <div className="news__f-box" data-aos="fade-up">
                    <a href="/" className="__f-box--img">
                        <img src={F2} alt="new" />
                    </a>
                    <div className="__f-box--content">
                        <h4>make it beauty</h4>
                        <p>llam fuga quae enim dignissimos temporibus laboriosam doloribus delectus corporis?</p>
                    </div>
                </div>
                <div className="news__f-box" data-aos="fade-left">
                    <a href="/" className="__f-box--img">
                        <img src={F3} alt="new" />
                    </a>
                    <div className="__f-box--content">
                        <h4>Ipad pro 2021</h4>
                        <p>llam fuga quae enim dignissimos temporibus laboriosam doloribus delectus corporis?</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default News;
