import { useState, type FormEvent } from 'react'
import './ContactForm.css'

type Status = 'idle' | 'submitting' | 'success' | 'error'
type FieldErrors = Partial<Record<'name' | 'email' | 'phone' | 'message', string>>

// FormSubmit.co needs no signup/API key — a POST here is relayed straight to
// that inbox. The FIRST submission triggers a one-time confirmation email to
// contact@precision-edge.in that has to be clicked before delivery goes live;
// until then submissions are silently held by FormSubmit, not lost.
const FORM_ENDPOINT = 'https://formsubmit.co/ajax/contact@precision-edge.in'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/
const PHONE_RE = /^[+\d][\d\s().-]{6,19}$/

function validate(data: FormData): FieldErrors {
  const errors: FieldErrors = {}
  const name = String(data.get('name') || '').trim()
  const email = String(data.get('email') || '').trim()
  const phone = String(data.get('phone') || '').trim()
  const message = String(data.get('message') || '').trim()

  if (!name) errors.name = 'Please enter your name.'
  if (!email) errors.email = 'Please enter your email.'
  else if (!EMAIL_RE.test(email)) errors.email = 'Enter a valid email address.'
  if (phone && !PHONE_RE.test(phone)) errors.phone = 'Enter a valid phone number.'
  if (!message) errors.message = 'Please add a short message.'
  else if (message.length < 10) errors.message = 'Please add a few more details (10 characters or more).'

  return errors
}

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [errors, setErrors] = useState<FieldErrors>({})

  function clearError(field: keyof FieldErrors) {
    setErrors((prev) => {
      if (!prev[field]) return prev
      const next = { ...prev }
      delete next[field]
      return next
    })
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)

    const validationErrors = validate(data)
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) return

    // Spam honeypot: real visitors never fill this (it's visually hidden);
    // FormSubmit silently drops submissions where it's non-empty.
    if (String(data.get('_honey') || '')) return

    setStatus('submitting')

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: data.get('name'),
          email: data.get('email'),
          phone: data.get('phone') || 'Not provided',
          message: data.get('message'),
          _subject: 'New enquiry — Precision Edge website',
          _template: 'table',
          _captcha: 'false',
        }),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('success')
      setErrors({})
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="pe-contact-form__success">
        <p className="pe-contact-form__success-title">Thanks — your message is on its way.</p>
        <p className="pe-contact-form__success-body">
          Our team will get back to you shortly.
        </p>
        <button
          type="button"
          className="pe-contact-form__reset"
          onClick={() => setStatus('idle')}
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form className="pe-contact-form" onSubmit={handleSubmit} noValidate>
      <div className="pe-contact-form__field">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Your name"
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? 'name-error' : undefined}
          onChange={() => clearError('name')}
        />
        {errors.name && (
          <p className="pe-contact-form__error" id="name-error">{errors.name}</p>
        )}
      </div>

      <div className="pe-contact-form__field">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@company.com"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? 'email-error' : undefined}
          onChange={() => clearError('email')}
        />
        {errors.email && (
          <p className="pe-contact-form__error" id="email-error">{errors.email}</p>
        )}
      </div>

      <div className="pe-contact-form__field">
        <label htmlFor="phone">
          Phone number <span>(optional)</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder="+91 00000 00000"
          aria-invalid={Boolean(errors.phone)}
          aria-describedby={errors.phone ? 'phone-error' : undefined}
          onChange={() => clearError('phone')}
        />
        {errors.phone && (
          <p className="pe-contact-form__error" id="phone-error">{errors.phone}</p>
        )}
      </div>

      <div className="pe-contact-form__field">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Tell us about your project, required deliverables and schedule…"
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'message-error' : undefined}
          onChange={() => clearError('message')}
        />
        {errors.message && (
          <p className="pe-contact-form__error" id="message-error">{errors.message}</p>
        )}
      </div>

      {/* Honeypot — left blank by real visitors, hidden from view and from
          the tab order so it doesn't trip up keyboard/screen-reader users. */}
      <input
        type="text"
        name="_honey"
        tabIndex={-1}
        autoComplete="off"
        className="pe-contact-form__honey"
        aria-hidden="true"
      />

      {status === 'error' && (
        <p className="pe-contact-form__error pe-contact-form__error--general">
          Something went wrong sending your message. Please try again, or email us directly at{' '}
          <a href="mailto:contact@precision-edge.in">contact@precision-edge.in</a>.
        </p>
      )}

      <button type="submit" className="pe-btn pe-btn--primary" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Sending…' : 'Send message'}
      </button>
    </form>
  )
}
