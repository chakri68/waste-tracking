import { useEffect, useState } from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  ZoomControl,
  useMap,
} from "react-leaflet";

function MapController({ center, zoom = 12 }) {
  const map = useMap();
  map.setView(center, zoom);
}

const Map = () => {
  const [lat, setlat] = useState(51.505);
  const [long, setlong] = useState(-0.09);
  const [data, setdata] = useState([
    {
      geoLocation: { lat: -75.546518086577947, long: 45.467134581917357 },
      sinceDate: "12 - 3 - 23",
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
      <MapContainer zoom={12} zoomControl={false} scrollWheelZoom={false}>
        <MapController center={[lat, long]} />
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
                {Hover.sinceDate}
              </p>
              <img
                src={Hover.imageURL}
                style={{ height: "100px", width: "100%", objectFit: "contain" }}
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
