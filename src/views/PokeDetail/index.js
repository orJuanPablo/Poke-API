import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import PokemonContext from "../../context/pokemons";
import PokeStats from "./components/PokeStats.js";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";


export default function PokeDetail(){
    const {id} = useParams();
    const {getPokemonDetail, pokemonDetail, isLoading, hasError, errorMessage} = useContext(PokemonContext);
    
    useEffect(() => {
        /**
        * Cada vez que se cargue la pantalla o cada vez que
        * cambie el id
        * solicitar el detalle del pokemon
        */
        getPokemonDetail(id).catch(null);
    },[]);
    if(isLoading) return <Loading title="cargando pokemon..." />;
    return (
        <div>
            {hasError ? <ErrorMessage message={errorMessage} /> : (
                <>
                    <p>{`Nombre : ${pokemonDetail?.name}`}</p>
                    <p>{`Peso : ${pokemonDetail?.weight} Libras`}</p>
                    <p>{`Altura : ${pokemonDetail?.height} Pies`}</p>
                    <PokeStats stats={pokemonDetail?.stats ?? []}/>
                </>
            )}
            
        </div>
    );
}