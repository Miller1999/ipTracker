import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = () => {
	//Just for how to markers array
	//TODO Continue the tutorial for leaftet in this point im on markers point
	const markers = [
		{
			geocode: [48.86, 2.3522],
			popUp: "Hello, I am pop up 1",
		},
		{
			geocode: [48.85, 2.3522],
			popUp: "Hello, I am pop up 2",
		},
		{
			geocode: [48.855, 2.34],
			popUp: "Hello, I am pop up 3",
		},
	];
	return (
		<main id="map">
			<MapContainer center={[48.8566, 2.3522]} zoom={13}>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				{markers.map((marker) => (
					<Marker key={marker.geocode} position={marker.geocode}>
						<Popup>
							<p>{marker.popUp}</p>
						</Popup>
					</Marker>
				))}
			</MapContainer>
		</main>
	);
};

export default Map;
