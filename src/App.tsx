import { useState } from 'react'
import './App.css'
import Button from './components/button'

function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState(false)
  
  return (
   <main>
    <Button style={{
      backgroundColor: 'blue',
      fontSize: 30,
      border: 2,
      borderColor: 'white',
      margin: 4
    }} setCount={setCount} count={count} setText={setText} text={text}/>
   </main>
  )
}

export default App
