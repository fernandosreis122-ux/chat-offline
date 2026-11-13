import type { Sender } from '../types/message.ts'

type SenderToggleProps = {
  sender: Sender
  onToggle: () => void
}

export default function SenderToggle({ sender, onToggle }: SenderToggleProps) {
  const isRobot = sender === 'robot'
  

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label="Alternar remetente"
      className="flex shrink-0 items-center gap-1.5 rounded-lg px-2 py-1.5 text-sm font-medium text-stone-600 hover:bg-stone-100 focus-visible:ring-2 focus-visible:ring-stone-500 focus-visible:outline-none"
    >
      {isRobot ? (
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
          <rect x="5" y="8" width="14" height="11" rx="2" />
          <path d="M12 8V4" />
          <circle cx="12" cy="3" r="1" />
          <path d="M9 13h.01" />
          <path d="M15 13h.01" />
          <path d="M9 16h6" />
        </svg>
      ) : (
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
          <circle cx="12" cy="8" r="4" />
          <path d="M4 21v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1" />
        </svg>
      )}
      
    </button>
  )
}
