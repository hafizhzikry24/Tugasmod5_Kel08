/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import axios from "axios";

export const PokemonContext = React.createContext();

export function PokemonData({ children }) {
	const [pokemonList, setPokemonList] = useState([]);

	useEffect(() => {
		async function getPokemonList() {
		  try {
			const res = await axios.get("https://pokeapi.co/api/v2/pokemon/");
			const responseData = res.data.results; 
			setPokemonList(responseData);
		  } catch (error) {
			console.log(error);
			window.alert(error);
		  }
		}
		getPokemonList();
	  }, []);

	return (
		<PokemonContext.Provider value={{ pokemonList }}>
			{children}
		</PokemonContext.Provider>
	);
}