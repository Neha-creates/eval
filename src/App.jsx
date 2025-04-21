import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  async function fetchData(){
    let res = await fetch('https://fakestoreapi.com/products');
    let data = await res.json();
    console.log(data);
  }
  fetchData()
  return (
    <>
     <h2>Products</h2>
     
    <ul></ul>
    </>
  )
}

export default App
