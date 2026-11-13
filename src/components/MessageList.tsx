import { useEffect, useRef } from 'react'
import type { Message } from '../types/message.ts'
import MessageBubble from './MessageBubble.tsx'

type MessageListProps = {
  messages: Message[]
}

export default function MessageList({ messages }: MessageListProps) {
  const endRef = useRef<HTMLUListElement>(null)

  // Invariante: o pai do <ul> deve ser o container scrollável do histórico (Chat.tsx <main>).
  useEffect(() => {
    const scroller = endRef.current?.parentElement
    if (scroller) scroller.scrollTo({ top: scroller.scrollHeight, behavior: 'smooth' })
  }, [messages])

  if (messages.length === 0) {
    return <p className="p-4 text-center text-stone-600">Nenhuma mensagem ainda. Envie a primeira!</p>
  }

  return (
    <ul
      ref={endRef}
      aria-live="polite"
      aria-relevant="additions"
      aria-label="Histórico de mensagens"
      className="flex flex-col gap-2 p-4"
    >
      {messages.map((message) => (
        <li key={message.id}>
          <MessageBubble message={message} />
        </li>
      ))}
    </ul>
  )
}
