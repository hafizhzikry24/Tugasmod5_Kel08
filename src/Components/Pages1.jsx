import { useContext } from "react";
import { PokemonContext } from "./PokemonDatas";
import { Link } from 'react-router-dom';

function PokemonList() {
  const { pokemonList } = useContext(PokemonContext);

  return (
    <div>
      <div>
        <h2 >Pokemon Halaman 1</h2>

        {pokemonList.slice(0, 10).map((pokemon, index) => (
          <li key={index}>{pokemon.name}</li>
        ))}

      </div>

      <Link to="/halaman2">
        <div >
          <button style={{ alignItems: "center", backgroundColor: "aquamarine" }}>To Page 2</button>
        </div>
      </Link>
    </div>
  );
}

export default PokemonList;
