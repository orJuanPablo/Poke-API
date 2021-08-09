import PokemonListItem from "./PokeonListItem";

export default function PokemonList({pokemons}){
   return(
    <div>
        {pokemons?.map((pokemon, index) => <PokemonListItem key={index} {...pokemon} /> )}
    </div>
   ); 
}