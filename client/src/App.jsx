import { Navbar,Yellacome,Services,Transactions,Loader,Footer } from './components'
import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

const App = ()=>{
  const [count, setCount] = useState(0)

  return (
    <div className='min-h-screen'>
      <div className='gradient-bg-welcome'>
        <Navbar/>
        <Yellacome/>
      </div>
      <Services/>
      <Transactions/>
      <Footer/>
    </div>
  )
}

export default App
