import { useEffect, useState } from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  ZoomControl,
} from "react-leaflet";

const Map = () => {
  const [lat, setlat] = useState(null);
  const [long, setlong] = useState(null);
  const [data, setdata] = useState([
    {
      geoLocation: { lat: -75.546518086577947, long: 45.467134581917357 },
      date: "12 - 3 - 23",
      imageURL: "./logo1",
    },
  ]);
  useEffect(() => {
    // Geo Location
    navigator.geolocation.getCurrentPosition(function (position) {
      setlat(position.coords.latitude);
      setlong(position.coords.longitude);
    });
    // Api fetch
    fetch(`/api/reports`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((actualData) => {
        if (actualData.ok) {
          let allReports = [];
          for (let reports of actualData.result) {
            if (reports?.reports) allReports.push(...reports.reports);
          }
          console.log({ data: allReports });
          setdata(allReports);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const [Hover, setHover] = useState(null);
  console.log(Hover);

  return (
    <div style={{ width: "100%", height: "300px" }}>
      <MapContainer
        center={lat && long ? [lat, long] : undefined}
        zoom={12}
        zoomControl={false}
        scrollWheelZoom={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {data.map((key, ind) => {
          return (
            <Marker
              key={ind}
              position={[
                parseFloat(key.geoLocation.lat),
                parseFloat(key.geoLocation.long),
              ]}
              eventHandlers={{ click: () => setHover(key) }}
            />
          );
        })}
        {Hover && (
          <Popup
            position={[
              parseFloat(Hover.geoLocation.lat),
              parseFloat(Hover.geoLocation.long),
            ]}
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
        <ZoomControl style={{ zIndex: 3 }} />
      </MapContainer>
    </div>
  );
};

export default Map;
