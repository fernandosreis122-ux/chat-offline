import { useState } from 'react'
import type { Message, Sender } from '../types/message.ts'
import ChatInput from './ChatInput.tsx'
import MessageList from './MessageList.tsx'

function newId() {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID()
  }
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`
}

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([])
  const [sender, setSender] = useState<Sender>('user')

  function handleSend(text: string) {
    if (text.trim() === '') return
    const message: Message = { id: newId(), text, sender }
    setMessages((prev) => [...prev, message])
  }

  function toggleSender() {
    setSender((prev) => (prev === 'user' ? 'robot' : 'user'))
  }

  return (
    <div className="h-dvh bg-stone-200">
      <div className="mx-auto flex h-full w-full max-w-2xl flex-col">
        <main className="min-h-0 flex-1 overflow-y-auto">
          <MessageList messages={messages} />
        </main>
        <ChatInput sender={sender} onToggle={toggleSender} onSend={handleSend} />
      </div>
    </div>
  )
}
