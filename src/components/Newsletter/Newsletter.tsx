import { useState, type FormEvent } from 'react'
import './Newsletter.scss'

type Status = { type: 'idle' } | { type: 'error'; message: string } | { type: 'success' }

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function Newsletter() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [accepted, setAccepted] = useState(false)
  const [status, setStatus] = useState<Status>({ type: 'idle' })

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!name.trim()) {
      setStatus({ type: 'error', message: 'Informe o seu nome.' })
    } else if (!EMAIL_PATTERN.test(email)) {
      setStatus({ type: 'error', message: 'Informe um e-mail válido.' })
    } else if (!accepted) {
      setStatus({ type: 'error', message: 'Aceite os termos e condições para continuar.' })
    } else {
      setStatus({ type: 'success' })
      setName('')
      setEmail('')
      setAccepted(false)
    }
  }

  return (
    <section className="newsletter" aria-labelledby="newsletter-titulo">
      <div className="newsletter__inner">
        <div className="newsletter__text">
          <h2 id="newsletter-titulo" className="newsletter__title">
            Inscreva-se na nossa newsletter
          </h2>
          <p>
            Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.
          </p>
        </div>

        <form className="newsletter__form" onSubmit={handleSubmit} noValidate>
          <div className="newsletter__fields">
            <label className="sr-only" htmlFor="newsletter-nome">
              Nome
            </label>
            <input
              id="newsletter-nome"
              type="text"
              autoComplete="name"
              placeholder="Digite seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label className="sr-only" htmlFor="newsletter-email">
              E-mail
            </label>
            <input
              id="newsletter-email"
              type="email"
              autoComplete="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" className="newsletter__submit">
              Inscrever
            </button>
          </div>

          <label className="newsletter__terms" htmlFor="newsletter-termos">
            <input
              id="newsletter-termos"
              type="checkbox"
              checked={accepted}
              onChange={(e) => setAccepted(e.target.checked)}
            />
            Aceito os termos e condições
          </label>

          <p
            className={`newsletter__feedback${status.type === 'error' ? ' newsletter__feedback--error' : ''}`}
            role="status"
          >
            {status.type === 'error' && status.message}
            {status.type === 'success' && 'Inscrição realizada com sucesso!'}
          </p>
        </form>
      </div>
    </section>
  )
}
