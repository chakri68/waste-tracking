import { memo, useState } from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvent,
} from "react-leaflet";

function LocationMarker({ onMarkerChange }) {
  const [position, setPosition] = useState(null);
  useMapEvent("click", (e) => {
    onMarkerChange(e.latlng);
    setPosition(e.latlng);
  });

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
}

function UtilMap({ lat = 51.505, lng = -0.09, onMarkerChange }) {
  return (
    <div className="map">
      <MapContainer center={{ lat, lng }} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker onMarkerChange={onMarkerChange} />
      </MapContainer>
    </div>
  );
}

export default memo(UtilMap);
