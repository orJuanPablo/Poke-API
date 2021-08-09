import { useContext, useEffect, useReducer } from "react";
import shallow from "zustand/shallow";
import ErrorMessage from "../../components/ErrorMessage";
import Loading from "../../components/Loading";
import PokemonContext from "../../context/pokemons";
import usePokemonsStore from "../../zustand/stores/pokemon";
import PokemonList from "./components/PokemonList";

export default function Home() {
    //Para utilizar con use context
    //const {getPokemons, pokemons, isLoading, hasError, errorMessage} = useContext(PokemonContext);
    //Para utilizar con zustand
    const {getPokemons
        , pokemons
        , isLoading
        , hasError
        , errorMessage} = usePokemonsStore(state => ({
            getPokemons: state.getPokemons,
            pokemons: state.pokemons,
            isLoading: state.isLoading, 
            hasError: state.hasError, 
            errorMessage: state.errorMessage}),shallow);
    
    useEffect(()=>{getPokemons().catch(null);},[]);
    if(isLoading){
        return <Loading title ="Cargando pokemons..." />;
    }
    return (
    <>
        {hasError ? <ErrorMessage message={errorMessage} /> : <PokemonList pokemons={pokemons}/>}
    </>);
}