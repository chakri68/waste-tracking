import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const VolunteerMap = () => {
  const [lat, setlat] = useState("-75.546518086577947");
  const [long, setlong] = useState("45.467134581917357");
  const [data, setdata] = useState([
    {
      user_id: "1234567",
      coordinates: [-75.546518086577947, 45.467134581917357],
      name: "chaitanya",
    },
  ]);
  useEffect(() => {
    // Geo Location
    navigator.geolocation.getCurrentPosition(function (position) {
      setlat(position.coords.latitude);
      setlong(position.coords.longitude);
    });
    // Api Fetch
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
            <div style={{ height: "30px", width: "50px" }}>
              {/* <h4>{Hover.name}</h4> */}
              <img
                src="./avatar.png"
                style={{
                  height: "90px",
                  width: "90px",
                  position: "absolute",
                  marginTop: "-80px",
                  marginLeft: "-20px",
                }}
              />
              <p style={{ textAlign: "center", fontSize: "1rem" }}>
                <strong>Name</strong>
              </p>
            </div>
          </Popup>
        )}
      </MapContainer>
    </div>
  );
};

export default VolunteerMap;
