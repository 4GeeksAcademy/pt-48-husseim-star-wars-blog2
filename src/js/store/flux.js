const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			films: [],
			planets: [],
			species: [],
			favorites: [],
		},
		actions: {
			fetchCharacters: async () => {

				const store = getStore();

				const response = await fetch("https://www.swapi.tech/api/people/");
				const data = await response.json();
				console.log(data);

				const updatedStore = {
					characters: data.results
				};
				setStore(updatedStore);

			},
			fetchFilms: async () => {

				const store = getStore();

				const response = await fetch("https://www.swapi.tech/api/starships/");
				const data = await response.json();
				console.log(data);

				const updatedStore = {
					films: data.results
				};
				setStore(updatedStore);
			},
			fetchPlanets: async () => {

				const store = getStore();

				const response = await fetch("https://www.swapi.tech/api/planets/");
				const data = await response.json();
				console.log(data);

				const updatedStore = {
					planets: data.results
				};
				setStore(updatedStore);
			},
			fetchSpecies: async () => {

				const store = getStore();

				const response = await fetch("https://www.swapi.tech/api/species/");
				const data = await response.json();
				console.log(data);

				const updatedStore = {
					species: data.results
				};
				setStore(updatedStore);
			},
			addFavorites: (name) => {
				const store = getStore()
				console.log(name)
				setStore({ favorites: [...store.favorites, name] })
			},
			removeFavorite: (name) => {
				const store = getStore();
				const updatedFavorites = store.favorites.filter((favorite) => favorite !== name);
				setStore({ favorites: updatedFavorites });
			}
		}
	};
};

export default getState;
