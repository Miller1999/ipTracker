import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = ({ geolocation }) => {
	const lat = geolocation?.location.lat;
	const lng = geolocation?.location.lng;
	return (
		<main id="map">
			<MapContainer center={[lat, lng]} zoom={13}>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<Marker position={[lat, lng]}></Marker>
			</MapContainer>
		</main>
	);
};

export default Map;
