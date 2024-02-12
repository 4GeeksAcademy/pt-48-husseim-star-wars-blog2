import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Characters } from "./views/characters";
import { CharacterDetails } from "./views/CharacterDetails";
import { Planets } from "./views/planets";
import { PlanetDetails } from "./views/PlanetDetails";
import { Species } from "./views/species";
import { SpeciesDetails } from "./views/SpeciesDetails";
import { Films } from "./views/films";
import { FilmsDetails } from "./views/FilmsDetails";

import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

const Layout = () => {
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>

					<Navbar />

					<Routes>
						<Route path="/" element={<Home />} />

						<Route path="/characters" element={<Characters />} />
						<Route path="/character/:characterId" element={<CharacterDetails />} />

						<Route path="/planets" element={<Planets />} />
						<Route path="/planet/:planetId" element={<PlanetDetails />} />

						<Route path="/species" element={<Species />} />
						<Route path="/species/:speciesId" element={<SpeciesDetails />} />

						<Route path="/films" element={<Films />} />
						<Route path="/films/:filmId" element={<FilmsDetails />} />

						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>

					<Footer />

				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);