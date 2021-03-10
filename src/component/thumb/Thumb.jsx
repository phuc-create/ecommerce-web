import React from 'react';
import "./Thumb.css";
import {SRLWrapper } from "simple-react-lightbox";

const imgs = [
    {id:1,source: '1.jpg'},
    {id:2,source:'2.jpg'},
    {id:3,source: '3.jpg'},
    {id:4,source: '4.jpg'},
    {id:5,source: '5.jpg'},
    {id:6,source: '6.jpg'},
]
function Thumb() {

    return (
    <SRLWrapper>
        <div className="thumb__container">
            {imgs.map((img)=>{
                return(
                    <div key={img.id} className="tb__single">
                        <a href={`/images/${img.source}`}>
                            <img src={`/images/${img.source}`} alt="galley"/>
                            </a>
                    </div>
                )
            })
            }     
        </div>
    </SRLWrapper>
    );
};
export default Thumb;
