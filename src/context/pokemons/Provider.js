
import { useState } from "react";
import PokemonContext from ".";
import apiCall from "../../api";

export default function PokemonProvider({children}){
    const [pokemons,setPokemons] = useState([]);
    const [pokemonDetail, setPokemonDetail] = useState({});
    const [isLoading,setIsLoading] = useState(false);

    const getPokemon = async () => {
        try {
            setIsLoading(true);
            const pokemonResults = await apiCall({url:"https://pokeapi.co/api/v2/pokemon?limit=151"});
            setPokemons(pokemonResults.results);
        } catch (error) {
            setPokemons([]);
        }finally{setIsLoading(false);}
    };

    const getPokemonDetail = async (id) =>{
        if(!id) Promise.reject("Id es requerido");

        try {
            setIsLoading(true);
            const pokemonDetail = await apiCall({url:`https://pokeapi.co/api/v2/pokemon/${id}`});
            setPokemonDetail(pokemonDetail);
        } catch (error) {
            setPokemonDetail({});
        }finally{setIsLoading(false);}
    };
    return(
        <PokemonContext.Provider value = {{
            getPokemon, pokemons,
            getPokemonDetail, pokemonDetail,
            isLoading}}>
            {children}
        </PokemonContext.Provider>
    );
}
