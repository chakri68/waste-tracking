import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const Map = () => {
  const [lat, setlat] = useState("-75.546518086577947");
  const [long, setlong] = useState("45.467134581917357");
  const [data, setdata] = useState([
    {
      user_id: "1234567",
      coordinates: [-75.546518086577947, 45.467134581917357],
      date: 12 - 3 - 23,
      img: "./logo1",
      name: "chaitanya",
    },
  ]);
  useEffect(() => {
    // Geo Location
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log(position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
      setlat(position.coords.latitude);
      setlong(position.coords.longitude);
    });
    // Api fetch
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        return response.json();
      })
      .then((actualData) => setdata(actualData))
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  const [Hover, setHover] = useState(null);
  console.log(Hover);

  return (
    <div style={{ width: "100%", height: "300px" }}>
      <MapContainer center={[lat, long]} zoom={12} scrollWheelZoom={false}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {data.map((key) => (
          <Marker
            key={key.user_id}
            position={[key.coordinates[1], key.coordinates[0]]}
            eventHandlers={{ click: () => setHover(key) }}
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
              {/* <h4>{Hover.name}</h4> */}
              <p style={{ textAlign: "center", fontSize: "1rem" }}>
                <strong>Since :</strong>
                {""}
                {Hover.date}
              </p>
              <img
                src="./Waste.webp"
                style={{ height: "100px", width: "130px" }}
              />
            </div>
          </Popup>
        )}
      </MapContainer>
    </div>
  );
};

export default Map;
