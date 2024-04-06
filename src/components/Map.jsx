import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";

const Map = ({ geolocation }) => {
	const lat = geolocation?.location.lat;
	const lng = geolocation?.location.lng;
	const customIcon = new Icon({
		iconUrl: "https://www.svgrepo.com/show/476893/marker.svg",
		iconSize: [50, 50],
	});
	return (
		<main id="map">
			<MapContainer center={[lat, lng]} zoom={13}>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<Marker position={[lat, lng]} icon={customIcon}></Marker>
			</MapContainer>
		</main>
	);
};

export default Map;
