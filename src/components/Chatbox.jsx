import { useEffect, useRef, useState } from 'react'
import { sendChatMessage } from '../api/chat'
import { ArrowUp, Plus } from 'lucide-react'

import React from 'react'

const Chatbox = () => {
    const [messages, setMessages] = useState([{ role: 'assistant', text: 'Hey! How can I help you today?' }])
    const [input, setInput] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const messagesEndRef = useRef(null)

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({
            behavior: 'smooth',
        })
    }, [messages])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const trimmed = input.trim()
        if (!trimmed) return
        setError(null)
        setMessages((current) => [...current, { role: 'user', text: trimmed }])
        setInput('')
        setLoading(true)

        try {
            const reply = await sendChatMessage(trimmed)
            setMessages((current) => [...current, { role: 'assistant', text: reply }])
        } catch (err) {
            setError(err?.message || 'Unable to connect to backend.')
        } finally {
            setLoading(false)
        }
    }
    return (
        <div className="flex h-full flex-col">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-8 sm:px-8">
                <div className="mx-auto flex max-w-3xl flex-col gap-5">
                    {messages.map((message, index) => {
                        const isUser = message.role === 'user'
                        return (
                            <div key={index} className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-6 shadow-lg 
                                ${isUser
                                        ? 'bg-[#1f1f1f] text-white border border-white/10'
                                        : 'bg-[#111111] text-white border border-white/10'
                                    }`}
                                >
                                    {message.text}
                                </div>
                            </div>
                        )
                    })}
                    {loading && (<div className="flex justify-start">
                        <div className="text-sm text-slate-200">
                            Thinking...
                        </div>
                    </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>
            </div>
            {/* Bottom Input */}
            <div className="sticky bottom-0 bg-[#020202] pb-6 pt-4">
                <form onSubmit={handleSubmit} className="mx-auto flex max-w-3xl items-center gap-3 rounded-3xl border border-white/10 bg-white/5 px-4 py-3 shadow-lg">
                    <button type="button" className="flex h-9 w-9 items-center justify-center rounded-full text-white/70 transition hover:bg-white/10">
                        <Plus size={18} />
                    </button>
                    <input type="text" placeholder="Ask anything..." value={input} onChange={(e) => setInput(e.target.value)} disabled={loading} className="flex-1 bg-transparent px-2 py-2 text-sm text-white outline-none placeholder:text-white/40" />
                    <button type="submit" disabled={loading} className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-black transition hover:bg-gray-200">
                        <ArrowUp size={17} />
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Chatbox