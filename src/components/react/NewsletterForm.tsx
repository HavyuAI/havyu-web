// ✅ [FEATURE]: Newsletter signup — React island, inserts into Supabase.
// Goes at: src/components/react/NewsletterForm.tsx
// Requires: the `newsletter_signups` table + insert RLS policy (see project SQL),
// and PUBLIC_SUPABASE_URL / PUBLIC_SUPABASE_ANON_KEY in .env.
import { useState, type FormEvent } from 'react';
import { supabase } from '../../lib/supabase';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!EMAIL_RE.test(email)) {
      setStatus('error');
      setMessage('Enter a valid email address.');
      return;
    }

    if (!supabase) {
      setStatus('error');
      setMessage('Signup isn’t configured yet. Add your Supabase keys to .env.');
      return;
    }

    setStatus('submitting');
    setMessage('');

    const { error } = await supabase.from('newsletter_signups').insert({ email });

    // 23505 = unique violation → already subscribed, treat as success.
    if (error && error.code !== '23505') {
      setStatus('error');
      setMessage('Something went wrong. Try again in a moment.');
      return;
    }

    setStatus('success');
    setMessage(
      error?.code === '23505'
        ? "You're already on the list."
        : "You're in. We'll be in touch.",
    );
    setEmail('');
  }

  if (status === 'success') {
    return (
      <p
        role="status"
        aria-live="polite"
        className="mx-auto inline-flex items-center gap-2 rounded-full bg-success/10 px-6 py-4 font-display font-bold text-forest"
      >
        <span aria-hidden="true">✓</span> {message}
      </p>
    );
  }

  return (
    <div className="mx-auto max-w-md">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="you@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-full border border-border bg-surface px-5 py-3 text-espresso placeholder:text-espresso-faded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-chestnut"
        />
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="shrink-0 rounded-full bg-forest px-6 py-3 font-display font-bold tracking-wide text-surface transition hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-chestnut disabled:translate-y-0 disabled:opacity-60"
        >
          {status === 'submitting' ? 'Joining…' : 'Sign up'}
        </button>
      </form>

      {status === 'error' && (
        <p role="alert" className="mt-3 text-sm text-red-700">
          {message}
        </p>
      )}

      <p className="mt-3 text-xs text-espresso-faded">
        Training insights and product updates. No spam, unsubscribe anytime.
      </p>
    </div>
  );
}
