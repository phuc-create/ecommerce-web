import React from 'react';
import "../src/app.css";
import Carousel from './component/carousel/Carousel';
import Collection from './component/collection/Collection';
import Collec2 from './component/collection2/Collec2';
import Fhead from './component/firstHead/Fhead';
import News from './component/news/News';
import Shead from './component/secondHead/Shead';
import Timer from './component/timer/Timer';
import Trend from './component/trend/Trend';
import Video from './component/video/Video';

function App() {
    return (
        <div className="app">
            {/* <h1>LOAD PAGE</h1>
            
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
            <Video />
            <Collec2 />
            <Timer />
            <News />
        </div>
    )
}

export default App;
