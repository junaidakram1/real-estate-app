import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";
import "./Map.scss";
import Pin from "../Pins/Pin";

function Map({ items }) {
  const firstItem = items[0];
  const latitude = firstItem ? parseFloat(firstItem.latitude) : 30.0;
  const longitude = firstItem ? parseFloat(firstItem.longitude) : 70.0;

  const position = [latitude, longitude];
  return (
    <MapContainer
      center={position}
      zoom={7}
      scrollWheelZoom={false}
      className="map"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {items.map((item) => (
        <Pin item={item} key={item.id} />
      ))}
    </MapContainer>
  );
}

export default Map;
