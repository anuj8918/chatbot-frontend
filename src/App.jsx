import Chatbox from './components/Chatbox'

function App() {
  return (
    <main className="h-screen bg-[#020202] text-white overflow-hidden">
      <div className="relative flex h-full flex-col">

        <header className="flex w-full items-center justify-between px-16 py-4">

          {/* Left aligned with AI messages */}
          <h1 className="text-lg font-medium text-white/90">
            ChatGPT
          </h1>

          {/* Right aligned with user messages
          <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
            Temporary Chat
          </div> */}

        </header>

        {/* Chat Area */}
        <div className="flex-1 overflow-hidden">
          <Chatbox />
        </div>

      </div>
    </main>
  )
}

export default App