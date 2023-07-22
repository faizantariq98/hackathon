import Image from 'next/image'
import {client} from '../sanity/lib/client'
import Hero from './components/Hero'
import Grid from './components/grid'
import Showcase from './components/showcase'

export default function Home() {

  return (
    <div>
      <Hero/>
      <Grid/>
      <Showcase/>
    </div>

      )
}
