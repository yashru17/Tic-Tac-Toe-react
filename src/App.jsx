import { useState } from 'react'
import Header from './Components/Header'
import Board from './Components/Board'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Board />
    </>
  )
}

export default App
