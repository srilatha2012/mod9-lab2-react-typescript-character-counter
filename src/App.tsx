import { useState } from 'react'
import './App.css'
import { TextInput } from './components/TextInput/TextInput'
import type { TextStats } from './types';
import { StatsDisplay } from './components/StatsDisplay/StatsDisplay';

function App() {
  const[text, setText] = useState("");

  const wordCount = text.trim() === "" ? 0: text.trim().split(/\s+/).length; 
  
  const stats : TextStats = {
    characterCount : text.length,
    wordCount : wordCount,
    readingTime : Math.ceil(wordCount / 200),
  }

  return (
    <div className='p-6'>
    <TextInput
      placeholder='type your message here'
      initialValue=""
      onTextChange={ (value) => setText(value)}
     />
      <StatsDisplay stats={stats} showReadingTime = {true}/>
    </div>
  )
}

export default App
