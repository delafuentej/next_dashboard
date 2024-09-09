
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SimplePokemon } from '@/pokemons';

interface PokemonsState {
  favourites: {[key: string]: SimplePokemon},
    // [key: string]: SimplePokemon,
}

// const getInitialState = (): PokemonsState => {
//   //if(typeof localStorage === 'undefined') return {};
//   const favourites = JSON.parse(localStorage.getItem('favourite-pokemons') ?? '{}');
//   return favourites;
// }

const initialState: PokemonsState = {
  favourites: {},
  // ...getInitialState(),

  //   '1' : { id: '1', name: 'bulbasaur'},
  //   '3' : {id: '3', name: 'venusaur'},
  //  '5' : {id: '5', name: 'charmeleon'},
  //  '6' : {id: '6', name: 'charizard'},
}

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    setFavouritePokemons(state, action: PayloadAction<{[key: string]: SimplePokemon}>){
        state.favourites = action.payload;
    },

    toggleFavourite(state, action: PayloadAction<SimplePokemon>){
        const pokemon = action.payload;
        const {id} = pokemon;
      // if pokemon exits, to delete it=> !!state[id]
        if(!!state.favourites[id]){
          delete state.favourites[id];
          return;
        }else{
           // if pokemon not exits, to create it
            state.favourites[id] = pokemon;

        }
        localStorage.setItem('favourite-pokemons', JSON.stringify(state.favourites));
    }

   

  }
});

export const {toggleFavourite, setFavouritePokemons} = pokemonsSlice.actions

export default pokemonsSlice.reducer