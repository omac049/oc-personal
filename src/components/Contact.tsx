'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { formConfig } from '@/config/form';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4 },
};

const inputClasses =
  'w-full rounded-sm border bg-transparent px-4 py-3 text-base outline-none transition-colors placeholder:text-[var(--color-muted)]';

export default function Contact() {
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(formConfig.formspree.url, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section
      id="contact"
      className="py-24"
      style={{ backgroundColor: 'var(--color-surface)' }}
      aria-labelledby="contact-heading"
    >
      <motion.div className="mx-auto max-w-2xl px-6" {...fadeIn}>
        <h2
          id="contact-heading"
          className="font-serif text-4xl md:text-6xl"
          style={{ color: 'var(--color-white)' }}
        >
          Let&apos;s talk.
        </h2>

        <p className="mt-4 text-lg" style={{ color: 'var(--color-muted)' }}>
          Have a project in mind? I&apos;d love to hear about it.
        </p>

        {status === 'success' ? (
          <div className="mt-10 rounded-sm border p-8 text-center" style={{ borderColor: 'var(--color-accent)' }}>
            <p className="text-lg font-medium" style={{ color: 'var(--color-accent)' }}>
              Message sent. I&apos;ll be in touch soon.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-10 space-y-6">
            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Name"
                className={inputClasses}
                style={{
                  borderColor: 'var(--color-border)',
                  color: 'var(--color-white)',
                }}
              />
            </div>

            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="Email"
                className={inputClasses}
                style={{
                  borderColor: 'var(--color-border)',
                  color: 'var(--color-white)',
                }}
              />
            </div>

            <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Message"
                className={`${inputClasses} resize-none`}
                style={{
                  borderColor: 'var(--color-border)',
                  color: 'var(--color-white)',
                }}
              />
            </div>

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full rounded-sm px-8 py-3 text-sm font-semibold uppercase tracking-wider transition-colors duration-200 hover:brightness-110 disabled:opacity-50"
              style={{
                backgroundColor: 'var(--color-accent)',
                color: 'var(--color-black)',
              }}
            >
              {status === 'submitting' ? 'Sending…' : 'Send message'}
            </button>

            {status === 'error' && (
              <p className="text-sm text-red-400">
                Something went wrong. Please try again or email directly.
              </p>
            )}
          </form>
        )}

        <p className="mt-8 text-sm" style={{ color: 'var(--color-muted)' }}>
          Or email directly:{' '}
          <a
            href="mailto:omar.seogears@gmail.com"
            className="underline transition-colors"
            style={{ color: 'var(--color-white)' }}
          >
            omar.seogears@gmail.com
          </a>
        </p>
      </motion.div>
    </section>
  );
}
