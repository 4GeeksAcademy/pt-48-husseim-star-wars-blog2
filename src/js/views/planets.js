import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Planets = () => {
	const { store, actions } = useContext(Context);

	const buttonStyle = {
		padding: '0.5rem 1rem',
		fontSize: '1rem',
		lineHeight: '1.5',
		height: '38px',
	};

	return (
		<div className="container">
			<div className="row justify-content-center">
				{store.planets
					.filter(value => value.uid !== "1")
					.map((value, index) => (
						<div className="col-md-3 mb-4" key={index}>
							<div className="card people" style={{ "width": "100%" }}>
								<img src={`https://starwars-visualguide.com/assets/img/planets/${value.uid}.jpg`} className="card-img-top" alt="..." />
								<div className="container">
									<div className="card-body">
										<h5 className="card-title" style={{ textAlign: 'center' }}>{value.name}</h5>
									</div>
									<div className="container mb-3" style={{ textAlign: 'center' }}>
										<Link to={`/planet/${value.uid}`}>
											<button className="btn btn-outline-primary" style={buttonStyle}>Learn more!</button>
										</Link>
										<button onClick={() => actions.addFavorites(value.name)} className="btn btn-outline-danger m-1" style={buttonStyle}>
											♡
										</button>
									</div>
								</div>
							</div>
						</div>
					))}
			</div>
		</div>
	);
};