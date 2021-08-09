import { useContext, useEffect } from "react";
import PokemonContext from "../../context/pokemons";

export default function FourOFour() {
    const {getPokemon, pokemons} = useContext(PokemonContext);
    //useEffect(()=>{getPokemon().catch(null);},[]);
    console.log(pokemons);
    return(
        <div>
            <p>Perdón, no hemos encontrado lo que está buscando</p>
        </div>
    )
}