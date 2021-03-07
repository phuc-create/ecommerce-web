import React, { useEffect, useState } from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";
import Aos from "aos";
import "./Timer.css";

function Timer() {

    const [time, setTime] = useState([{ d: '00', h: '00', m: '00', m2: '00' }]);

    const showTime = () => {
        var d = new Date().getDate();
        var h = new Date().getHours();
        var m = new Date().getMinutes();
        var m2 = new Date().getSeconds();

        setTime({ d: d, h: h, m: m, m2: m2 });
    }

    setInterval(showTime, 1000);
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])

    return (
        <div className="c-down">
            <div className="c-down__wrapper" data-aos="fade-right">
                <div className="c-d__title">
                    <p>Sale <span>30%</span> Off</p>
                    <h1>deal of the day</h1>
                </div>
                <div className="c-d__container">
                    <div className="c-d__block">
                        <div className="c-d-square">
                            <p>{time.d}</p>
                            <span>days</span>
                        </div>
                        <div className="c-d-square">
                            <p>{time.h}</p>
                            <span>hours</span>
                        </div>
                        <div className="c-d-square">
                            <p>{time.m}</p>
                            <span>minutes</span>
                        </div>
                        <div className="c-d-square">
                            <p>{time.m2}</p>
                            <span>seconds</span>
                        </div>
                    </div>
                    <a href="/">Shop now &nbsp;<FaLongArrowAltRight /> </a>
                </div>
            </div>
        </div>
    )
}

export default Timer;
