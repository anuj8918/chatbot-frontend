import React from 'react'
import Chatbox from './components/Chatbox'
import logo from './assets/chatbot.png'

const App = () => {
  return (
    <main className="h-screen bg-[#020202] text-white overflow-hidden">
      <div className="relative flex h-full flex-col">

        <header className="flex w-full items-center justify-between px-16 py-4">

          <div className="flex items-center gap-2">
            <img
              src={logo}
              alt="Logo"
              className="w-10 h-10 object-contain"
            />

            <h1 className="text-xl font-semibold leading-none text-white/90">
              ChatCore
            </h1>
          </div>

        </header>

        <div className="flex-1 overflow-hidden">
          <Chatbox />
        </div>

      </div>
    </main>
  )
}

export default App