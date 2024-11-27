import React from 'react';
import './pin.scss';
import { Marker, Popup } from 'react-leaflet';
import { Link } from "react-router-dom";
import L from "leaflet";

const customIcon = L.icon({
    iconUrl: "/pin.png",  // Path to your custom icon image
    iconSize: [25, 41],   // Specifies the size of the icon (width x height in pixels)
    iconAnchor: [12, 41], // Specifies the anchor point of the icon (relative to the top-left corner)
    popupAnchor: [1, -34] // Specifies where the popup appears relative to the marker
});


function Pin({ item }) {
    return (
        <Marker position={[item.latitude, item.longitude]} icon={customIcon}>
            <Popup>
                <div className="popupContainer">
                    <img src={item.images[0]} alt="" />
                    <div className="textContainer">
                        <Link to={`/${item.id}`}>{item.title}</Link>
                        <span>{item.bedroom} bedroom</span>
                        <b>₹ {item.price}</b>
                    </div>
                </div>
            </Popup>
        </Marker>
    );
}

export default Pin;