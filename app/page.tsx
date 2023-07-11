import Image from 'next/image'
import {client} from '../sanity/lib/client'
import Hero from './components/Hero'
import Grid from './components/grid'
import Showcase from './components/showcase'
import ProductList from './[product]/productList'

interface ProductList {
  id:string|undefined
  productName:string|undefined,
  quantity:number|undefined,
  price:number|undefined,
  productype:string|undefined,
  size:string|undefined
}
export const productList:ProductList[]=[];

export default function Home() {

  return (
    <div>
      <Hero/>
      <Grid/>
      <Showcase/>
    </div>

      )
}
