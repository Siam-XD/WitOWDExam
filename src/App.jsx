import React from 'react'
import Bannner from './components/Bannner'
import Shop from './components/Shop'
import prod1 from './assets/prod1.png'
import prod2 from './assets/prod2.png'
import prod3 from './assets/prod3.png'
import prod4 from './assets/prod4.png'
import prod5 from './assets/prod5.png'
import prod6 from './assets/prod6.png'



const App = () => {
  const products = [
    { id: 1, name: 'Chamos Set', price: 500, src: prod1 },
    { id: 2, name: 'K. Accessories', price: 600, src: prod2 },
    { id: 3, name: 'Home Cooker', price: 600, src: prod3 },
    { id: 4, name: 'Cap', price: 800, src: prod4 },
    { id: 5, name: 'Dress', price: 700, src: prod5 },
    { id: 6, name: 'Shoes', price: 900, src: prod6 },
  ]

  return (
    <div>
      <header></header>
      <main>
        <Bannner />
        <Shop products={products} />
      </main>
      <footer></footer>
    </div>
  )
}

export default App
