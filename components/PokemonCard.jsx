import Link from 'next/link'
import Image from "next/image";

import { Pokemon } from '../interfaces'
import { useEffect } from 'react';

export default function PokemonCard(props) {
    const imgId = `img${props.index}`;

    async function fetchPokemon(props) {
        const res = await fetch(props.entry.url);
        const pokemon = await res.json();
        const type = Promise.resolve(pokemon.types[0].type.name);
        
        try {
          const value = await type;
          //console.log(value);
          document.querySelector('#'+imgId).classList.add(value);
          return value;
        } catch (err) {
          console.log(err);
        }
    }
    /*
    if (typeof document !== "undefined") {
        fetchPokemon(props);
    }
    */
    useEffect(() => {
      fetchPokemon(props);
    })
    

    return (
        <div className='pt-5 pb-10 border-2 rounded-md bg-slate-800 border-slate-900' key={props.index}>
        <Link href={"pokemon/" + props.entry.name}>
          <div className='flex px-10 pb-6'>
            <h2 className='flex text-2xl no-underline capitalize grow'>{props.entry.name}</h2>
            <p className='flex justify-end text-xl'>#{props.index+1}</p>
          </div>
          <Image
            id={imgId}
            className={`box-border mx-auto border-4 rounded-full border-slate-700 transition-colors ease-in duration-500 shadow-md`}
            src={`https://img.pokemondb.net/sprites/black-white/normal/${props.entry.name}.png`}
            alt={props.entry.name}
            width="96"
            height="96"
          />
        </Link>
      </div>
    )
}