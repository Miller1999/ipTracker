import "normalize.css";
import "./style.sass";
import { Fragment } from "react";
import Form from "./components/Form";
import Card from "./components/Card";
import Map from "./components/Map";

function App() {
	return (
		<Fragment>
			<header>
				<h1>IP Tracker</h1>
				<Form />
				<Card />
			</header>
			<Map />
			<footer></footer>
		</Fragment>
	);
}

export default App;
