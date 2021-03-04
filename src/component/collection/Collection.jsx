import React from 'react';
import "../collection/Collection.css";

function Collection() {
    return (
        <div className="collection">
            <div className="collection__content">
            <div className="col__content--head">
                <p>MEN'S COLLECTION</p>
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
            <div className="collection__img">

            </div>
        </div>
    )
}

export default Collection;
