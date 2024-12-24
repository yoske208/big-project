import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import styles from "./Map.module.css";
import "leaflet/dist/leaflet.css";

interface LocationById {
  id: string;
  lat: number;
  lng: number;
  name: string;
  year: number;
  attacktype1_txt: string;
  targtype1_txt: string;
  target1: string;
  city: string;
  gname: string;
}

interface LocationByRegion {
  id?: string;
  name: string;
  lat: number;
  lng: number;
  casualties: number;
}

interface MapProps {
  type: "byId" | "byRegion";
  locations: LocationById[] | LocationByRegion[];
}

const DEFAULT_COORDINATES: { [key: string]: { lat: number; lng: number } } = {
  "Middle East & North Africa": { lat: 31.0461, lng: 34.8516 },
  "South Asia": { lat: 20.5937, lng: 78.9629 },
  "Sub-Saharan Africa": { lat: -1.2921, lng: 36.8219 },
  "Europe": { lat: 50.1109, lng: 8.6821 },
  "Central America & Caribbean": { lat: 15.7835, lng: -90.2308 },
  "East Asia": { lat: 35.6895, lng: 139.6917 },
  "Australasia & Oceania": { lat: -25.2744, lng: 133.7751 },
  "North America": { lat: 37.7749, lng: -122.4194 },
  "South America": { lat: -23.5505, lng: -46.6333 },
  "Unknown": { lat: 0, lng: 0 },
};

const Map1: React.FC<MapProps> = ({ type, locations }) => {
  return (
    <div className={styles.mapContainer}>
      <MapContainer center={[32.0853, 34.7818]} zoom={2} style={{ height: "90%", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {type === "byId" &&
          (locations as LocationById[]).map((location) => (
            <Marker key={location.id} position={[location.lat, location.lng]}>
              <Popup className={styles.popupText}>
                <p><strong>Location:</strong> {location.name}</p>
                <p><strong>Group Name:</strong> {location.gname}</p>
                <p><strong>Year:</strong> {location.year}</p>
                <p><strong>City:</strong> {location.city}</p>
                <p><strong>Attack Type:</strong> {location.attacktype1_txt}</p>
                <p><strong>Target Type:</strong> {location.targtype1_txt}</p>
                <p><strong>Target:</strong> {location.target1}</p>
              </Popup>
            </Marker>
          ))}
        {type === "byRegion" &&
          (locations as LocationByRegion[]).map((location) => {
            const coordinates = {
              lat: location.lat || DEFAULT_COORDINATES[location.name]?.lat || 0,
              lng: location.lng || DEFAULT_COORDINATES[location.name]?.lng || 0,
            };
            return (
              <Marker key={location.name} position={[coordinates.lat, coordinates.lng]}>
                <Popup className={styles.popupText}>
                  <p><strong>Region:</strong> {location.name}</p>
                  <p><strong>Casualties:</strong> {location.casualties}</p>
                </Popup>
              </Marker>
            );
          })}
      </MapContainer>
    </div>
  );
};

export default Map1;