import React from 'react';
import './pin.scss';
import { Marker, Popup } from 'react-leaflet';

function Pin({ item }) {
    return (
        <Marker position={[item.latitude, item.longitude]}>
            <Popup>
                <div className="popupCotainer">
                    <img src={item.img} alt="" />
                    <div className="textContainer">
                        <link to={`/${item.id}`}>{item.title}</link>
                        <span className="bed">{item.bedroom} bedroom</span>
                        <b>${item.price}</b>
                    </div>
                </div>
            </Popup>
        </Marker>
    )
}

export default Pin
