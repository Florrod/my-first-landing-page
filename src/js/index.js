//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { JumboTron } from "./component/jumboTron.js";
import { NavBar } from "./component/navBar.js";
import { OneCard } from "./component/card.js";
import { Footer } from "./component/footer.js";

//const numbers = [1, 2, 3, 4, 5];
//const doubled = numbers.map((number) => number * 2);
//console.log(doubled); ESTO SERÍA LO IDEAL PERO NO TENEMOS UN ARRAY POR LO QUE LO CREAMOS CON LOS TEXTOS DE LAS CARD

/*const arrayContenido = [
	"Some text",
	"Some text a",
	"Some text b",
	"Some text c"
];

const arrayCards = arrayContenido.map(texto => OneCard(texto));

const cardCards = <div className="row text-center">{arrayCards}</div>;

//render your react application*/

ReactDOM.render(
	<div>
		<NavBar />
		<div className="container">
			<JumboTron />
			<OneCard />
		</div>
		<Footer />
	</div>,
	document.querySelector("#app")
);
