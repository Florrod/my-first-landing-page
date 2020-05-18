import React from "react";

export class NavBar extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
				<a className="navbar-brand" href="#">
					Bootstrap
				</a>
				<button
					class="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarText"
					aria-controls="navbarText"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span class="navbar-toggler-icon" />
				</button>
				<div
					className="collapse navbar-collapse justify-content-end"
					id="navbarText">
					<div className="navbar-nav">
						<a className="nav-item nav-link active" href="#">
							Home <span className="sr-only">(current)</span>
						</a>
						<a className="nav-item nav-link" href="#">
							About
						</a>
						<a className="nav-item nav-link" href="#">
							Service
						</a>
						<a className="nav-item nav-link disabled" href="#">
							Contact
						</a>
					</div>
				</div>
			</nav>
		);
	}
}
