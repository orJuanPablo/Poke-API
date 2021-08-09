import create from "zustand/vanilla";
import apiCall from "../../api";

const usePokemonsStore = create((set, get)=> ({
    getPokemons: async () => {
    try {
        set({hasError: false, isLoading: true, errorMessage: ""});
        const pokemonResults = await apiCall({url:"https://pokeapi.co/api/v2/pokemon?limit=151"});
        set({pokemons : pokemonResults.results});
    } catch (error) {
        set({pokemons: [], hasError: true, errorMessage: "ups, Algo ha ido mal"});    
    }finally{
        set({isLoading: false});
    }
    },
    pokemons: [],
    getPokemonDetail: async (id) => {
        if(!id) return;
        try {
            set({hasError: false, isLoading: true, errorMessage: ""});
            const pokemonDetail = await apiCall({url: `https://pokeapi.co/api/v2/pokemon/${id}`});
            set({pokemonDetail})

        } catch (error) {
            set({pokemonDetail: {}, hasError: true, errorMessage: "ups, Algo ha ido mal"});   
        }finally{
            set({isLoading: false});
        }
    },
    pokemonDetail:{},
    isLoading: false,
    errorMessage: "",
    hasError:false
}));

export default usePokemonsStore;