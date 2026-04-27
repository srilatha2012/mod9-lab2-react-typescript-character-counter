import { useState } from 'react'
import './App.css'
import { TextInput } from './components/TextInput/TextInput'

function App() {
  const[text, setText] = useState("");

  return (
    <div className='p-6'>
    <TextInput
      placeholder='type your message here'
      initialValue=""
      onTextChange={ (value) => setText(value)}
     />
      <p className='mt-4'>you typed: {text}</p>
    </div>
  )
}

export default App
