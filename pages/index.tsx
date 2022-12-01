import Head from 'next/head'

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

      <main className='w-10/12 py-10 mx-auto lg:w-3/5'>
        <h1 className='mb-10 text-5xl md:text-7xl'>Pokédex</h1>
        <div className='grid grid-cols-2 gap-4 sm:grid-cols-3'>
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
