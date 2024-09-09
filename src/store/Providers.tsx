'use client'

import {useEffect} from 'react';
import { Provider } from 'react-redux';
import {store} from './';
import { setFavouritePokemons } from './pokemons/pokemonsSlice';

interface Props {
    children: React.ReactNode;
}
export const Providers = ({children}:Props) => {
  useEffect(()=>{
    const favourites = JSON.parse(localStorage.getItem('favourite-pokemons') ?? '{}');
   //console.log('favourites', favourites)
      store.dispatch(setFavouritePokemons(favourites))
    }, []);
    
  return (
    <Provider store={store}>

      {children}
    </Provider>
  )
}


