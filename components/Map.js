import { memo, useEffect, useRef, useState } from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  ZoomControl,
  useMap,
} from "react-leaflet";
import { Button } from "primereact/button";
import { getLocalCoordinates } from "../lib/locationUtils";
import { Checkbox } from "primereact/checkbox";
import { formatData } from "../lib/formatUtils";

function MapController({ center, zoom = 12 }) {
  const map = useMap();
  map.setView(center, zoom);
}

const Map = ({ lat = 51.505, long = -0.09 }) => {
  const [checked, setChecked] = useState(false);
  const [data, setData] = useState([]);
  const localData = useRef([]);
  const globalData = useRef([]);

  async function getAndStoreData(isLocal) {
    let {
      coords: { latitude, longitude },
    } = await getLocalCoordinates();
    if (isLocal) {
      if (localData.current.length != 0) {
        return localData.current;
      } else {
        let res = await fetch("/api/localdata", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            center: { lat: latitude, long: longitude },
            radius: 100,
          }),
        });
        let data = await res.json();
        if (data.ok) return data.result;
      }
    } else {
      if (globalData.current.length != 0) {
        return globalData.current;
      } else {
        let res = await fetch("/api/localdata", {
          headers: { "Content-Type": "application/json" },
          method: "POST",
          body: JSON.stringify({
            center: { lat: latitude, long: longitude },
          }),
        });
        let data = await res.json();
        if (data.ok) return data.result;
      }
    }
  }

  useEffect(() => {
    // Geo Location

    getAndStoreData(true).then((data) => {
      if (!data) return;
      console.log({ localData: data });
      localData.current = formatData(data);
      setData(localData.current);
    });

    // Api fetch
    // fetch(`/api/localdata`, {
    //   method: "POST",
    //   body: JSON.stringify({
    //     center: ,
    //     radius: 100,
    //   }),
    //   headers: { "Content-Type": "application/json" },
    // })
    //   .then((response) => response.json())
    //   .then((actualData) => {
    //     if (actualData.ok) {
    //       let allReports = [];
    //       for (let reports of actualData.result) {
    //         if (reports?.reports) allReports.push(...reports.reports);
    //       }
    //       console.log({ data: allReports });
    //       setLocalData(allReports);
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }, []);
  const [Hover, setHover] = useState(null);

  return (
    <div style={{ width: "100%", height: "300px" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="field-checkbox">
          <Checkbox
            checked={checked}
            onChange={(e) => {
              if (e.checked) {
                getAndStoreData(false).then((data) => {
                  if (!data) return;
                  console.log({ globalData: data });
                  globalData.current = formatData(data);
                  setData(globalData.current);
                });
              } else {
                getAndStoreData(true).then((data) => {
                  if (!data) return;
                  console.log({ localData: data });
                  localData.current = formatData(data);
                  setData(localData.current);
                });
              }
              setChecked(e.checked);
            }}
          />
          <label htmlFor="binary">Show global data</label>
        </div>
      </div>
      <MapContainer zoom={12} zoomControl={false} scrollWheelZoom={false}>
        <MapController center={[lat, long]} />
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {data.map((key, ind) => {
          if (!isNaN(key.geoLocation.lat) && !isNaN(key.geoLocation.long))
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

export default memo(Map);
