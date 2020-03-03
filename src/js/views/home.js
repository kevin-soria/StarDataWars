import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.scss";

export const Home = () => (
	<>
		<div className="text-center mt-5">
			<div>
				<input placeholder="Search for Star Wars" />
			</div>
			<a href="#" className="btn btn-warning">
				<i>“Do. Or do not. There is no try.” – Yoda</i>
			</a>
		</div>
		<div>
			<div className="container">
				<div className="row">
					<div className="card" style={{ width: "18 rem" }}>
						<div className="card-header">Types</div>
						<ul className="list-group list-group-flush">
							<Link to="/planetCards">
								<li className="list-group-item">Planets</li>
							</Link>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</>
);
