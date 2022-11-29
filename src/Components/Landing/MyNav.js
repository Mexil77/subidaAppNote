import React from "react";
import { Link } from "react-router-dom";

import "./MyNav.scss";

export default function MyNav() {
	return (
		<nav className="navbar">
			<Link to={"/"} id={"logoNav"}>
				<p>App Notes</p>
			</Link>
			<button className="btn navbar_loginbutton">Login</button>
		</nav>
	);
}
