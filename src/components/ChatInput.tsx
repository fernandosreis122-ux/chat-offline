import { useLayoutEffect, useRef, useState } from 'react'
import type { KeyboardEvent } from 'react'
import type { Sender } from '../types/message.ts'
import SenderToggle from './SenderToggle.tsx'

type ChatInputProps = {
  sender: Sender
  onToggle: () => void
  onSend: (text: string) => void
}

export default function ChatInput({ sender, onToggle, onSend }: ChatInputProps) {
  const [text, setText] = useState('')
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  // Auto-resize: mede o conteúdo e deixa o teto de ~6 linhas para o CSS (max-h-40).
  useLayoutEffect(() => {
    const el = textareaRef.current
    if (!el) return
    el.style.height = 'auto'
    el.style.height = `${el.scrollHeight}px`
  }, [text])

  function submit() {
    if (text.trim() === '') return
    onSend(text)
    setText('')
    textareaRef.current?.focus()
  }

  function handleKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key.toLowerCase() === 'enter' && !event.shiftKey && !event.nativeEvent.isComposing) {
      event.preventDefault()
      submit()
    }
  }

  return (
    <div className="shrink-0 p-4">
      <div
        className={`flex items-end gap-2 rounded-xl border-2 bg-white p-2 shadow-sm ${
          sender === 'robot' ? 'border-purple-500' : 'border-transparent'
        }`}
      >
        <SenderToggle sender={sender} onToggle={onToggle} />
        <textarea
          ref={textareaRef}
          value={text}
          onChange={(event) => setText(event.target.value)}
          onKeyDown={handleKeyDown}
          rows={1}
          placeholder="Digite uma mensagem..."
          aria-label="Mensagem"
          className="max-h-40 flex-1 resize-none overflow-y-auto rounded-lg border-none bg-transparent px-2 py-1.5 text-stone-900 outline-none placeholder:text-stone-400 focus-visible:ring-2 focus-visible:ring-stone-400"
        />
        <button
          type="button"
          onClick={submit}
          disabled={text.trim() === ''}
          aria-label="Enviar"
          className="shrink-0 rounded-lg bg-stone-800 px-3 py-2 text-white hover:bg-stone-700 focus-visible:ring-2 focus-visible:ring-stone-500 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <path d="M12 19V5" />
            <path d="m5 12 7-7 7 7" />
          </svg>
        </button>
      </div>
    </div>
  )
}
