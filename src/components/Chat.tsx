import { useState } from 'react'
import type { Message } from '../types/message.ts'
import MessageList from './MessageList.tsx'

export default function Chat() {
  const [messages] = useState<Message[]>([])

  return (
    <div className="h-dvh bg-stone-200">
      <div className="mx-auto flex h-full w-full max-w-2xl flex-col">
        <main className="min-h-0 flex-1 overflow-y-auto">
          <MessageList messages={messages} />
        </main>
      </div>
    </div>
  )
}
