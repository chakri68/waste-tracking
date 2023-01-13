import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const Map = () => {
  const data = [
    {
      user_id: user,
      coordinates: [-75.546518086577947, 45.467134581917357],
      img: image,
      date: date,
    },
  ];
  return (
    <div style={{ width: "300px", height: "300px" }}>
      const [Hover, setHover] = useState(null);
      <MapContainer center={[45.4, -75.7]} zoom={12} scrollWheelZoom={false}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {data.map((key) => (
          <Marker
            key={key.user_id}
            position={[key.coordinates[1], key.coordinates[0]]}
            onClick={() => {
              setHover(key);
            }}
            icon={icon}
          />
        ))}
        {Hover && (
          <Popup
            position={[Hover.coordinates[1], Hover.coordinates[0]]}
            onClose={() => {
              setHover(null);
            }}
          >
            <div>
              <h2>{Hover.name}</h2>
              <p>{Hove.date}</p>
            </div>
          </Popup>
        )}
      </MapContainer>
      );
    </div>
  );
};

export default Map;
