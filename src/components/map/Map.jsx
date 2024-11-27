import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "./map.scss";
import "leaflet/dist/leaflet.css";
import Pin from "../pin/Pin";
import React from "react";

function FitBounds({ items }) {
  const map = useMap();

  React.useEffect(() => {
    const bounds = items.map(item => [item.latitude, item.longitude]);
    if (bounds.length) {
      map.fitBounds(bounds); // Automatically adjust the view to fit all pins
    }
  }, [items, map]);

  return null;
}

function Map({ items }) {
  return (
    <MapContainer
      center={[20.5937, 78.9629]} // Geographic center of India
      zoom={5} // Default zoom
      scrollWheelZoom={false}
      className="map"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <FitBounds items={items} />
      {items.map((item) => (
        <Pin item={item} key={item.id} />
      ))}
    </MapContainer>
  );
}

export default Map;
