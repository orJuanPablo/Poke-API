import create from "zustand";
import apiCall from "../../api";

const usePokemonsStore = create((set, get)=> ({
    getPokemons: async () => {
    try {
        set({hasError: false, isLoading: true, errorMessage: ""});
        console.log("Buscando Lista con zustand");
        const pokemonResults = await apiCall({url:"https://pokeapi.co/api/v2/pokemon?limit=151"});
        set({pokemons : pokemonResults.results});
    } catch (error) {
        set({pokemons: [], hasError: true, errorMessage: "ups, Algo ha ido mal"});    
    }finally{
        set({isLoading: false});
    }
    },
    getPokemonDetail: async (id) => {
        if(!id) return;
        try {
            set({hasError: false, isLoading: true, errorMessage: ""});
            console.log("Buscando detalles con zustand");
            const pokemonDetail = await apiCall({url: `https://pokeapi.co/api/v2/pokemon/${id}`});
            set({pokemonDetail})

        } catch (error) {
            set({pokemonDetail: {}, hasError: true, errorMessage: "ups, Algo ha ido mal"});   
        }finally{
            set({isLoading: false});
        }
    },
    pokemons: [],
    pokemonDetail:{},
    isLoading: false,
    hasError:false,
    errorMessage: "",    
}));

export default usePokemonsStore;