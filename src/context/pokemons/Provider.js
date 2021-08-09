
import { useState } from "react";
import PokemonContext from ".";
import apiCall from "../../api";

export default function PokemonProvider({children}){
    const [pokemons,setPokemons] = useState([]);
    const [pokemonDetail, setPokemonDetail] = useState({});
    const [isLoading,setIsLoading] = useState(false);
    const [hasError,setHasError] = useState(false);
    const[errorMessage,setErrorMessage] = useState("");

    const getPokemon = async () => {
        try {
            setIsLoading(true);
            setHasError(false);
            setErrorMessage("");
            const pokemonResults = await apiCall({url:"https://pokeapi.co/api/v2/pokemon?limit=151"});
            setPokemons(pokemonResults.results);
        } catch (error) {
            setHasError(true);
            setErrorMessage("Ups, Algo ha ido mal");
            setPokemons([]);
        }finally{setIsLoading(false);}
    };

    const getPokemonDetail = async (id) =>{
        if(!id) Promise.reject("Id es requerido");

        try {
            setHasError(false);
            setErrorMessage("");
            setIsLoading(true);
            const pokemonDetail = await apiCall({url:`https://pokeapi.co/api/v2/pokemon/${id}`});
            setPokemonDetail(pokemonDetail);
        } catch (error) {
            setHasError(true);
            setErrorMessage("Ups, Algo ha ido mal");
            setPokemonDetail({});
        }finally{setIsLoading(false);}
    };
    return(
        <PokemonContext.Provider value = {{
            getPokemon, pokemons,
            getPokemonDetail, pokemonDetail, errorMessage,
            isLoading,hasError}}>
            {children}
        </PokemonContext.Provider>
    );
}
