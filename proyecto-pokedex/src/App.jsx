import { useState } from 'react'
import BigCard from './components/big-card/index.jsx'


function App() {
  const [id, setId] = useState(1)

  return (
    <>
   < BigCard id={id}/>
    </>
  )
}

export default App
