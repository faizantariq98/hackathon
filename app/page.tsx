'use client'
import Hero from './components/Hero'
import Grid from './components/grid'
import Showcase from './components/showcase'
import { toast } from 'react-toastify'

export default function Home({searchParams}:{searchParams:{canceled:any,
 success:any
}}) {

  
  if(searchParams.canceled){
    toast.error(' We are sorry! Order could not be placed please order again', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }else if(searchParams.success){
    toast.success(' Order is succcesfully placed and will be deliverd soon', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      })
  }
  return (
    <div>
      <Hero/>
      <Grid/>
      <Showcase/>
    </div>
      )
}
