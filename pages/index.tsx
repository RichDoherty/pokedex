import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { Pokemon } from '../interfaces'
import PokemonCard from '../components/PokemonCard'

export default function Home({ pokemon }: any) {
  const { results } = pokemon;
  return (
    <div>
      <Head>
        <title>Pokédex</title>
        <meta name="description" content="Pokedex app created by Richard Doherty" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className='w-3/5 py-10 mx-auto'>
        <h1 className='mb-10 text-7xl'>Pokédex</h1>
        <div className='grid grid-cols-3 gap-4'>
          {results.map((entry: Pokemon, index: number) => (
            <PokemonCard entry={entry} index={index} key={index} />
          ))}
        </div>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
  const pokemon = await res.json();

  return {
      props: {
          pokemon,
      },
  }
}
