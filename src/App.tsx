import { useState } from 'react'
import './App.css'
import { TextInput } from './components/TextInput/TextInput'
import type { TextStats } from './types';
import { StatsDisplay } from './components/StatsDisplay/StatsDisplay';
import { CharacterCounter } from './components/CharacterCounter/CharacterCounter';

function App() {
  const [text, setText] = useState("");

  const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

  const stats: TextStats = {
    characterCount: text.length,
    wordCount: wordCount,
    readingTime: Math.ceil(wordCount / 200),
  }

  return (
    <main className="min-h-screen bg-black text-white p-6">
      <div className="max-w-4xl mx-auto space-y-6" >
        <TextInput
          placeholder='type your message here'
          initialValue=""
          onTextChange={(value) => setText(value)}
        />
        <StatsDisplay stats={stats} showReadingTime={true} />
        <CharacterCounter minWords={25} maxWords={200} targetReadingTime={1} />
      </div>
    </main>
  )
}

export default App
