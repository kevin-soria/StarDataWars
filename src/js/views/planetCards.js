import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const planetCards = () => {
	const { store, actions } = useContext(Context);

	// console.log("here people", store.people);

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
			<div className="container">
				<div className="row">
					{!store.planets
						? "loading..."
						: store.planets.map((item, index) => {
								return (
									<div key={index} className="card col-3">
										<img src="..." className="card-img-top" alt="..." />
										<div className="card-body">
											<h1>{item.name}</h1>
											<div className="card-text">
												<p>{item.population}</p>
												<p>{item.climate}</p>
												<p>{item.diameter}</p>
											</div>
										</div>
										{/* <button
											type="button"
											onClick={() => {
												addToFav();
												// console.log({ favCards });
											}}
											className="btn btn-primary btn-sm">
											Favorite
										</button> */}
									</div>
								);
						  })}
				</div>
			</div>
		</>
	);
};
