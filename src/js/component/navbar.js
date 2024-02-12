import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/navbar.css";

export const Navbar = () => {

	const { store, actions } = useContext(Context);
	const favorites = store.favorites;

	const removeFavorite = (name) => {
		actions.removeFavorite(name);
	};

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<div>
				<Link to="/">
					<span className="navbar-brand mb-0 p-3 h1 ms-5 navbar-brand-custom">Star Wars API</span>
				</Link>
			</div>

			<div className="ml-auto">
				<Link to="/characters" className="m-2">
					<button className="btn btn-dark">Characters</button>
				</Link>
				<Link to="/planets" className="m-2">
					<button className="btn btn-dark">Planets</button>
				</Link>
				<Link to="/species" className="m-2">
					<button className="btn btn-dark">Species</button>
				</Link>
				<Link to="/films" className="m-2">
					<button className="btn btn-dark">Starships</button>
				</Link>
			</div>
			<div className="ml-auto">
				<div className="dropdown">
					<button
						className="btn btn-dark dropdown-toggle me-5"
						type="button"
						id="favoritesDropdown"
						data-bs-toggle="dropdown"
						aria-expanded="false"
					>
						Favorite items <span className="badge btn-dark">{favorites.length}</span>
					</button>
					<ul className="dropdown-menu custom-dropdown-menu" aria-labelledby="favoritesDropdown">
						{favorites.length === 0 ? (
							<li>
								<span className="dropdown-item">No favorites added</span>
							</li>
						) : (
							favorites.map((favorite, index) => (
								<li key={index}>
									<span className="dropdown-item">
										{favorite}
										<button
											className="btn btn-sm btn-danger ms-2"
											onClick={() => removeFavorite(favorite)}
										>
											X
										</button>
									</span>
								</li>
							))
						)}
					</ul>
				</div>
			</div>
		</nav>
	);
};