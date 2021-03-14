import React, { useEffect } from 'react';
import "../src/app.css";
import Carousel from './component/main/carousel/Carousel';
import Collection from './component/main/collection/Collection';
import Collec2 from './component/main/collection2/Collec2';
import Fhead from './component/main/firstHead/Fhead';
import News from './component/main/news/News';
import Shead from './component/main/secondHead/Shead';
import Timer from './component/main/timer/Timer';
import Trend from './component/main/trend/Trend';
import Video from './component/main/video/Video';
import Thumb from "./component/main/thumb/Thumb";
import SimpleReactLightbox from "simple-react-lightbox";
import Aos from "aos";
import "aos/dist/aos.css";
import Footer from './component/footer/Footer';

function App() {
    useEffect(() => {
        Aos.init({ duration: 800 });
    }, []);
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
            <SimpleReactLightbox>
                <Thumb />
            </SimpleReactLightbox>
            <Footer />
        </div>

    )
}

export default App;
