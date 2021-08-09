import { useContext, useEffect } from "react";
import PokemonContext from "../../context/pokemons";
import PokemonList from "./components/PokemonList";

export default function Home() {
    const {getPokemon, pokemons} = useContext(PokemonContext);
    useEffect(()=>{getPokemon().catch(null);},[]);
    return (
        <div>
            <PokemonList pokemons={pokemons}/>
        </div>
    );
}