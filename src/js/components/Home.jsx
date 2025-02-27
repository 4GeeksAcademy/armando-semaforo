import React, { useState } from "react";

//create your first component
const Home = () => {
	const [colorSeleccionado, setColorSeleccionado] = useState("verde");

	return (
		<div className="container">
			<div className="barra"></div>
			<div className="rectangulo">
				<div
				onClick={()=> setColorSeleccionado("roja")}
				className={"luz roja" + (colorSeleccionado === "roja" ? " brillo" : "")}>

				</div>
				<div
				onClick={()=> setColorSeleccionado("amarilla")}
				className={"luz amarilla" + (colorSeleccionado === "amarilla" ? " brillo" : "")}>

				</div>
				<div
				onClick={()=> setColorSeleccionado("verde")}
				className={"luz verde" + (colorSeleccionado === "verde" ? " brillo" : "")}>

				</div>
			</div>
		</div>
	);
};

export default Home;