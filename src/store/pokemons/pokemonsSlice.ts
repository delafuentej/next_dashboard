
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SimplePokemon } from '@/pokemons';

interface PokemonsState {
    [key: string]: SimplePokemon,
}

const initialState: PokemonsState = {
    '1' : { id: '1', name: 'bulbasaur'},
    '3' : {id: '3', name: 'venusaur'},
   '5' : {id: '5', name: 'charmeleon'},
   '6' : {id: '6', name: 'charizard'},
}

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    toggleFavourite(state, action: PayloadAction<SimplePokemon>){
        const pokemon = action.payload;
        const {id} = pokemon;
      // if pokemon exits, to delete it=> !!state[id]
        if(!!state[id]){
          delete state[id];
          return;
        }
        // if pokemon not exits, to create it
        state[id] = pokemon;
    }
  }
});

export const {toggleFavourite} = pokemonsSlice.actions

export default pokemonsSlice.reducer