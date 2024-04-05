import "normalize.css";
import "./style.sass";
import { Fragment } from "react";
import Form from "./components/Form";
import Card from "./components/Card";

function App() {
	return (
		<Fragment>
			<header>
				<h1>IP Tracker</h1>
				<Form />
				<Card />
			</header>
			<main></main>
			<footer></footer>
		</Fragment>
	);
}

export default App;
