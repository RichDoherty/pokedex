import Image from "next/image";

import { Pokemon } from '../../../interfaces'

export default function pokemon({ pokemon }: any) {
    return (
        <main className="w-11/12 p-10 mx-auto xl:w-1/3">
        <h1 className="text-4xl text-center capitalize lg:text-7xl">{pokemon.name}</h1>

        <div>
          <Image
            className="py-5 mx-auto"
            src={pokemon.sprites.other["official-artwork"].front_default}
            alt={pokemon.name}
            width="200"
            height="200"
          />
          <div className="grid grid-cols-2 grid-rows-2 gap-4 mx-auto text-md sm:text-xl">
            <p className="grid justify-center">Height: {pokemon.height / 10} m</p>
            <p className="grid justify-center">Weight: {pokemon.weight / 10} kg</p>
            {pokemon.types.map((slot: any, index: number) => (
              <p className="grid justify-center mt-1 capitalize" key={slot.type.name}><span className={`${slot.type.name} w-24 px-2 pb-1 rounded-lg text-center`}>{slot.type.name}</span></p>
            ))}
          </div>
        </div>
      </main>
    );
}

export async function getServerSideProps(context: any) {
    const id = context.params.id;
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemon = await res.json();

    return {
      props: { pokemon },
    };
}