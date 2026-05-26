import React from 'react'
import Chatbox from './components/Chatbox'

const App = () => {
  return (
    <main className="h-screen bg-[#020202] text-white overflow-hidden">
      <div className="relative flex h-full flex-col">
        <header className="flex w-full items-center justify-between px-16 py-4">
          <h1 className="text-lg font-medium text-white/90">
            ChatGPT
          </h1>
        </header>
        <div className="flex-1 overflow-hidden">
          <Chatbox />
        </div>
      </div>
    </main>
  )
}

export default App