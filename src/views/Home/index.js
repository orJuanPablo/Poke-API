import { useContext, useEffect } from "react";
import ErrorMessage from "../../components/ErrorMessage";
import Loading from "../../components/Loading";
import PokemonContext from "../../context/pokemons";
import PokemonList from "./components/PokemonList";

export default function Home() {
    const {getPokemon, pokemons, isLoading, hasError, errorMessage} = useContext(PokemonContext);
    useEffect(()=>{getPokemon().catch(null);},[]);
    if(isLoading){
        return <Loading title ="Cargando pokemons..." />;
    }
    return (
    <>
        {hasError ? <ErrorMessage message={errorMessage} /> : <PokemonList pokemons={pokemons}/>}
    </>);
}