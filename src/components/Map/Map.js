import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useState, useEffect } from "react";

export const MapPage = () => {
  const [point, setPoint] = useState([5.0145889, 7.942669]);
  useEffect(() => {
    let success = (position) => {
      console.log(position);
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;

      setPoint([lat, lon]);
    };
    navigator.geolocation.getCurrentPosition(success, () => {
      alert("location access denied");
    });
  }, []);

  return (
    <MapContainer center={point} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      ></TileLayer>
      <Marker position={point}>
        <Popup>This is your current location</Popup>
      </Marker>
    </MapContainer>
  );
};
