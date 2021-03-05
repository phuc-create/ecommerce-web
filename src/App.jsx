import React from 'react';
import "../src/app.css";
import Carousel from './component/carousel/Carousel';
import Collection from './component/collection/Collection';
import Fhead from './component/firstHead/Fhead';
import Shead from './component/secondHead/Shead';
import Trend from './component/trend/Trend';

function App() {
    return (
        <div className="app">
            {/* <h1>LOAD PAGE</h1>
            <p>first header</p>
            <p>second header</p>
            <p>Main</p>
            <p>Carousel</p>
            <p>TOURBILLON POWER</p>
            <p>ĐANG LÀ XU HƯỚNG</p>
            <p>Video</p>
            <p>BỘ SƯU TẬP CỦA PHỤ NỮ</p>
            <p>permis count in 30 days</p>
            <p>news</p>
            <p>pictures</p>
            <p>footer</p>
            <p>Chinh sasch la bla</p> */}
            <Fhead />
            <Shead />
            <Carousel />
            <Collection />
            <Trend />
        </div>
    )
}

export default App;
