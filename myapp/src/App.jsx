import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Fun from './components/Fun'
import FilterFun from "./components/FilterFun"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Fun></Fun>
      <FilterFun></FilterFun>
    </>
  )
}

export default App
