import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

interface MarkerData {
  lat: number;
  lng: number;
  info: string;
}

interface MapProps {
  markersData: MarkerData[] | null;
  singleMarker: MarkerData | null;
  showAll: boolean;
}

const Map: React.FC<MapProps> = ({ markersData, singleMarker, showAll }) => {
  const defaultPosition: [number, number] = [32.0853, 34.7818];

  // קובע את מרכז המפה
  const mapCenter = showAll
    ? markersData && markersData.length > 0
      ? [markersData[0].lat, markersData[0].lng]
      : defaultPosition
    : singleMarker
    ? [singleMarker.lat, singleMarker.lng]
    : defaultPosition;

  return (
    <MapContainer center={mapCenter} zoom={13} style={{ height: "400px", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {showAll && markersData ? (
        // הצגת כל הנקודות
        markersData.map((marker, index) => (
          <Marker key={index} position={[marker.lat, marker.lng]}>
            <Popup>{marker.info}</Popup>
          </Marker>
        ))
      ) : singleMarker ? (
        // הצגת נקודה יחידה
        <Marker position={[singleMarker.lat, singleMarker.lng]}>
          <Popup>{singleMarker.info}</Popup>
        </Marker>
      ) : (
        // במקרה שאין נקודות
        <Marker position={defaultPosition}>
          <Popup>תל אביב - מידע לדוגמה</Popup>
        </Marker>
      )}
    </MapContainer>
  );
};


export default Map;







 
    


