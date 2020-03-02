import React from "react";

export const planetCards = () => {
	return (
		<>
			<div className="text-center mt-5">
				<div>
					<input placeholder="Search for Star Wars" />
				</div>
				<a href="#" className="btn btn-warning">
					<i>“Do. Or do not. There is no try.” – Yoda</i>
				</a>
			</div>

			<div className="card-deck">
				<div className="card" style={{ width: "18rem" }}>
					<img src="..." className="card-img-top" alt="..." />
					<div className="card-body">
						<h1>Title</h1>
						<p className="card-text">Description and stuff</p>
					</div>
				</div>
				<div className="card" style={{ width: "18rem" }}>
					<img src="..." className="card-img-top" alt="..." />
					<div className="card-body">
						<h1>Title</h1>
						<p className="card-text">Description and stuff</p>
					</div>
				</div>
				<div className="card" style={{ width: "18rem" }}>
					<img src="..." className="card-img-top" alt="..." />
					<div className="card-body">
						<h1>Title</h1>
						<p className="card-text">Description and stuff</p>
					</div>
				</div>
			</div>
		</>
	);
};
