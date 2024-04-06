import "normalize.css";
import "./style.sass";
import { Fragment, useEffect, useState } from "react";
import Form from "./components/Form";
import Card from "./components/Card";
import Map from "./components/Map";
import axios from "axios";
import Logo from "/icon.svg";

function App() {
	const [value, setValue] = useState("");
	const [geolocation, setGeolocation] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	function validarDireccionIP(ip) {
		const patron = /^(?:[0-9]{1,3}.){3}[0-9]{1,3}$/;
		return patron.test(ip);
	}

	const fetchGeolocation = async () => {
		setIsLoading(true);
		try {
			if (value === "") {
				const response = await axios.get(
					`https://geo.ipify.org/api/v2/country,city?apiKey=at_1MPmHpfin1EtxUFEwBaL8lQniyDxc`
				);
				setGeolocation(response.data);
			} else if (validarDireccionIP(value)) {
				const response = await axios.get(
					`https://geo.ipify.org/api/v2/country,city?apiKey=at_1MPmHpfin1EtxUFEwBaL8lQniyDxc&ipAddress=${value}`
				);
				setGeolocation(response.data);
			} else {
				const response = await axios.get(
					`https://geo.ipify.org/api/v2/country,city?apiKey=at_1MPmHpfin1EtxUFEwBaL8lQniyDxc&domain=${value}`
				);
				setGeolocation(response.data);
			}
		} catch (error) {
			console.error("Error fetching geolocation data:", error);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchGeolocation();
	}, []);

	return (
		<Fragment>
			{isLoading ? (
				<div className="loader">
					<img src={Logo} alt="Logo" />
				</div>
			) : geolocation ? (
				<Fragment>
					<header>
						<h1>IP Tracker</h1>
						<Form
							value={value}
							setValue={setValue}
							isLoading={isLoading}
							fetchGeolocation={fetchGeolocation}
						/>
						<Card geolocation={geolocation} />
					</header>
					<Map geolocation={geolocation} />
					<footer></footer>
				</Fragment>
			) : (
				<p>Error</p>
			)}
		</Fragment>
	);
}

export default App;
