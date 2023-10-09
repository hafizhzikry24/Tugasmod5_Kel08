import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom'; 

function PokemonList() {
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
