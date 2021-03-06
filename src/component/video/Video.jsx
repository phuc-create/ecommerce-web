import React from 'react';
import ReactPlayer from "react-video-js-player";
import Vd from "../../img/vd.mp4";
import "./Video.css";
function Video() {
    return (
        <div className="video__bg">
            <ReactPlayer autoplay={true} src={Vd} />
        </div>
    )
}

export default Video;
