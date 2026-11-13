import type { Message } from '../types/message.ts'

type MessageBubbleProps = {
  message: Message
}

export default function MessageBubble({ message }: MessageBubbleProps) {
  const isUser = message.sender === 'user'
  const alignment = isUser ? 'justify-end' : 'justify-start'
  const bubbleColor = isUser ? 'bg-stone-100' : 'bg-white'

  return (
    <div className={`flex ${alignment}`}>
      <p className={`max-w-[80%] rounded-lg ${bubbleColor} px-3 py-2 text-stone-900 whitespace-pre-wrap break-words`}>
        {message.text}
      </p>
    </div>
  )
}
