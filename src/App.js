import * as React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</div>
	);
};

export default App;
