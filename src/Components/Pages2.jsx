import { useContext } from "react";
import { PokemonContext } from "./PokemonDatas";
import { Link } from 'react-router-dom'; 

function PokemonPage() {
	const { pokemonList } = useContext(PokemonContext);

	return (

	<div>
		<div className="content2">
			<h2 >Pokemon Halaman 2</h2>
			
				{pokemonList.slice(10, 20).map((pokemon, index) => (
					<li key={index}>{pokemon.name}</li>
				))}
			
		</div>

		<Link to="/">
			<div >
				<button style={{ textAlign: "center", backgroundColor: "yellow" }}>To Page 1</button>
			</div>
		</Link>
	</div>
	);
}

export default PokemonPage;