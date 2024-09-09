
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SimplePokemon } from '@/pokemons';

interface PokemonsState {
    [key: string]: SimplePokemon,
}

const getInitialState = (): PokemonsState => {
  const favourites = JSON.parse(localStorage.getItem('favourite-pokemons') ?? '{}');
  return favourites;
}

const initialState: PokemonsState = {
  ...getInitialState(),
  //   '1' : { id: '1', name: 'bulbasaur'},
  //   '3' : {id: '3', name: 'venusaur'},
  //  '5' : {id: '5', name: 'charmeleon'},
  //  '6' : {id: '6', name: 'charizard'},
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
        }else{
           // if pokemon not exits, to create it
            state[id] = pokemon;

        }
        //localStorage.setItem('favourite-pokemons', JSON.stringify(state));
       
    }
  }
});

export const {toggleFavourite} = pokemonsSlice.actions

export default pokemonsSlice.reducer