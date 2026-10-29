import { useEffect, useRef, useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Bot, Headphones, Mail, MessageCircle, Phone, Send, X } from 'lucide-react'

type ChatMessage = {
  id: number
  sender: 'assistant' | 'visitor'
  text: string
  action?: { label: string; to: string }
}

const suggestions = ['Solar services', 'Lift services', 'Get a quote']

function getReply(message: string): Pick<ChatMessage, 'text' | 'action'> {
  const query = message.toLowerCase()

  if (/emergency|urgent|breakdown|stuck/.test(query)) {
    return {
      text: 'For urgent assistance, please call our emergency line. For other enquiries, our team can also help by phone or email.',
      action: { label: 'Call emergency line', to: 'tel:+923314889979' },
    }
  }

  if (/solar|panel|photovoltaic|pv\b/.test(query)) {
    return {
      text: 'We provide solar PV solutions for homes and businesses. Explore our solar services or contact us to discuss your project.',
      action: { label: 'Explore solar services', to: '/services/solar' },
    }
  }

  if (/lift|elevator/.test(query)) {
    return {
      text: 'We help with lift and elevator installation, modernization, and maintenance. Visit our service page to learn more.',
      action: { label: 'Explore lift services', to: '/services/lifts' },
    }
  }

  if (/quote|price|pricing|cost|estimate/.test(query)) {
    return {
      text: 'Tell us about your project using our quote request form, and our team can follow up with you.',
      action: { label: 'Request a quote', to: '/quote' },
    }
  }

  if (/electrical|mechanical|hvac|plumbing|building|project/.test(query)) {
    return {
      text: 'Our engineering team can help with electrical, mechanical, HVAC, and building services. See our services or get in touch with your requirements.',
      action: { label: 'Explore engineering services', to: '/services/other' },
    }
  }

  return {
    text: 'I can point you in the right direction for solar, lift, and engineering services. For a specific enquiry, contact our team and they’ll be happy to help.',
    action: { label: 'Contact our team', to: '/contact' },
  }
}

export default function CustomerServiceChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [draft, setDraft] = useState('')
  const [callbackOpen, setCallbackOpen] = useState(false)
  const [callbackName, setCallbackName] = useState('')
  const [callbackPhone, setCallbackPhone] = useState('')
  const [callbackDetails, setCallbackDetails] = useState('')
  const [callbackUrl, setCallbackUrl] = useState('')
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 0,
      sender: 'assistant',
      text: 'Hi there! Welcome to Elektra Engineering Services. What can I help you with today?',
    },
  ])
  const nextId = useRef(1)
  const conversationRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isOpen) return

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false)
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [isOpen])

  useEffect(() => {
    conversationRef.current?.scrollTo({
      top: conversationRef.current.scrollHeight,
      behavior: 'smooth',
    })
  }, [messages, isOpen])

  const sendMessage = (text: string) => {
    const trimmed = text.trim()
    if (!trimmed) return

    const visitorMessage: ChatMessage = {
      id: nextId.current++,
      sender: 'visitor',
      text: trimmed,
    }
    const reply = getReply(trimmed)
    const assistantMessage: ChatMessage = {
      id: nextId.current++,
      sender: 'assistant',
      ...reply,
    }

    setMessages((current) => [...current, visitorMessage, assistantMessage])
    setDraft('')
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    sendMessage(draft)
  }

  const handleCallbackSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const latestEnquiry = messages
      .filter((message) => message.sender === 'visitor')
      .at(-1)?.text
      .slice(0, 200)
    const details = [
      `Name: ${callbackName.trim()}`,
      `Phone: ${callbackPhone.trim()}`,
      callbackDetails.trim() && `Details: ${callbackDetails.trim()}`,
      latestEnquiry && `Chat enquiry: ${latestEnquiry}`,
    ].filter(Boolean).join('\n')
    const message = `Hello Elektra Engineering Services, I would like a callback.\n\n${details}`

    setCallbackUrl(`https://wa.me/923218400045?text=${encodeURIComponent(message)}`)
  }

  return (
    <div className="fixed bottom-5 right-5 z-[60] flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      {isOpen && (
        <section
          aria-labelledby="customer-chat-title"
          className="flex h-[min(34rem,calc(100dvh-7rem))] w-[min(23rem,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.22)]"
        >
          <header className="flex items-center justify-between bg-[#172554] px-5 py-4 text-white">
            <div className="flex min-w-0 items-center gap-3">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-white/15">
                <Headphones className="h-5 w-5" aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <h2 id="customer-chat-title" className="font-semibold leading-tight">
                  Elektra Support
                </h2>
                <p className="mt-1 text-xs text-blue-100">Virtual assistant</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
              className="rounded-full p-2 text-white/80 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </header>

          <div
            ref={conversationRef}
            role="log"
            aria-live="polite"
            aria-label="Chat conversation"
            className="flex-1 space-y-4 overflow-y-auto bg-slate-50 p-4"
          >
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex items-end gap-2 ${message.sender === 'visitor' ? 'justify-end' : 'justify-start'}`}
              >
                {message.sender === 'assistant' && (
                  <span className="mb-1 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-[#1e40af]">
                    <Bot className="h-4 w-4" aria-hidden="true" />
                  </span>
                )}
                <div
                  className={`max-w-[85%] rounded-2xl px-3.5 py-3 text-sm leading-relaxed ${
                    message.sender === 'visitor'
                      ? 'rounded-br-md bg-[#1e40af] text-white'
                      : 'rounded-bl-md border border-slate-200 bg-white text-slate-700 shadow-sm'
                  }`}
                >
                  <p>{message.text}</p>
                  {message.action && (
                    message.action.to.startsWith('tel:') ? (
                      <a
                        href={message.action.to}
                        className="mt-3 inline-flex items-center gap-1 font-semibold text-[#1e40af] hover:underline"
                      >
                        {message.action.label}
                        <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </a>
                    ) : (
                      <Link
                        to={message.action.to}
                        onClick={() => setIsOpen(false)}
                        className="mt-3 inline-flex items-center gap-1 font-semibold text-[#1e40af] hover:underline"
                      >
                        {message.action.label}
                        <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </Link>
                    )
                  )}
                </div>
              </div>
            ))}

            {messages.length === 1 && (
              <div className="flex flex-wrap gap-2 pl-9">
                {suggestions.map((suggestion) => (
                  <button
                    key={suggestion}
                    type="button"
                    onClick={() => sendMessage(suggestion)}
                    className="rounded-full border border-blue-200 bg-white px-3 py-1.5 text-xs font-medium text-[#1e40af] transition-colors hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1e40af]"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="border-t border-slate-200 bg-white p-3">
            {!callbackOpen && (
              <div className="mb-3 flex items-center justify-center gap-5">
              <a
                href="tel:+923218400045"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 transition-colors hover:text-[#1e40af]"
              >
                <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                Call us
              </a>
              <a
                href="mailto:elektraengineering01@gmail.com"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 transition-colors hover:text-[#1e40af]"
              >
                <Mail className="h-3.5 w-3.5" aria-hidden="true" />
                Email us
              </a>
              </div>
            )}
            {callbackOpen ? (
              callbackUrl ? (
                <div className="space-y-3 text-center">
                  <p className="text-sm font-medium text-slate-700">Your callback request is ready.</p>
                  <a
                    href={callbackUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1fb957] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#128C7E]"
                  >
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    Open WhatsApp to send
                  </a>
                  <p className="text-[11px] leading-relaxed text-slate-500">
                    WhatsApp will open with your details ready. Your request is sent only after you press Send there.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setCallbackUrl('')
                      setCallbackOpen(false)
                    }}
                    className="text-xs font-medium text-slate-500 underline underline-offset-2 hover:text-[#1e40af]"
                  >
                    Back to chat
                  </button>
                </div>
              ) : (
                <form onSubmit={handleCallbackSubmit} className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-semibold text-slate-800">Request a callback</h3>
                    <button
                      type="button"
                      onClick={() => setCallbackOpen(false)}
                      className="text-xs font-medium text-slate-500 hover:text-[#1e40af]"
                    >
                      Back to chat
                    </button>
                  </div>
                  <label className="sr-only" htmlFor="customer-callback-name">Your name</label>
                  <input
                    id="customer-callback-name"
                    type="text"
                    value={callbackName}
                    onChange={(event) => setCallbackName(event.target.value)}
                    placeholder="Your name"
                    autoComplete="name"
                    maxLength={100}
                    required
                    className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none transition-colors placeholder:text-slate-400 focus:border-[#1e40af]"
                  />
                  <label className="sr-only" htmlFor="customer-callback-phone">Your phone number</label>
                  <input
                    id="customer-callback-phone"
                    type="tel"
                    value={callbackPhone}
                    onChange={(event) => setCallbackPhone(event.target.value)}
                    placeholder="Your phone number"
                    autoComplete="tel"
                    maxLength={30}
                    required
                    className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none transition-colors placeholder:text-slate-400 focus:border-[#1e40af]"
                  />
                  <label className="sr-only" htmlFor="customer-callback-details">What should we know?</label>
                  <textarea
                    id="customer-callback-details"
                    value={callbackDetails}
                    onChange={(event) => setCallbackDetails(event.target.value)}
                    placeholder="What should we know? (optional)"
                    maxLength={300}
                    rows={2}
                    className="w-full resize-none rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none transition-colors placeholder:text-slate-400 focus:border-[#1e40af]"
                  />
                  <button
                    type="submit"
                    className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1fb957] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#128C7E]"
                  >
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    Continue to WhatsApp
                  </button>
                  <p className="text-center text-[10px] leading-relaxed text-slate-500">
                    Your details will be added to a WhatsApp message to +92 321 8400045. Nothing is sent until you press Send in WhatsApp.
                  </p>
                </form>
              )
            ) : (
              <>
                <button
                  type="button"
                  onClick={() => setCallbackOpen(true)}
                  className="mb-2 inline-flex min-h-9 w-full items-center justify-center gap-2 rounded-lg border border-slate-200 text-xs font-semibold text-[#1e40af] transition-colors hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1e40af]"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  Request a callback on WhatsApp
                </button>
                <form onSubmit={handleSubmit} className="flex items-center gap-2 rounded-xl bg-slate-100 p-1.5 pl-3">
                  <label className="sr-only" htmlFor="customer-chat-message">Your message</label>
                  <input
                    id="customer-chat-message"
                    value={draft}
                    onChange={(event) => setDraft(event.target.value)}
                    placeholder="Type your message..."
                    autoComplete="off"
                    className="min-w-0 flex-1 bg-transparent py-2 text-sm text-slate-800 outline-none placeholder:text-slate-400"
                  />
                  <button
                    type="submit"
                    disabled={!draft.trim()}
                    aria-label="Send message"
                    className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-[#1e40af] text-white transition-colors hover:bg-[#172554] disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <Send className="h-4 w-4" aria-hidden="true" />
                  </button>
                </form>
                <p className="mt-2 text-center text-[10px] text-slate-400">
                  Automated assistant · For a personal response, call or email us
                </p>
              </>
            )}
          </div>
        </section>
      )}

      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-label={isOpen ? 'Close customer support chat' : 'Open customer support chat'}
        aria-expanded={isOpen}
        className="group flex h-14 w-14 items-center justify-center rounded-full bg-[#1e40af] text-white shadow-[0_8px_24px_rgba(30,64,175,0.38)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#172554] hover:shadow-[0_10px_28px_rgba(30,64,175,0.45)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1e40af] sm:h-16 sm:w-16"
      >
        {isOpen ? (
          <X className="h-6 w-6" aria-hidden="true" />
        ) : (
          <MessageCircle className="h-7 w-7 transition-transform group-hover:scale-105" aria-hidden="true" />
        )}
      </button>
    </div>
  )
}
