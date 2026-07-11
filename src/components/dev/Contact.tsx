'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { formConfig } from '@/config/form';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

const EASE_OUT: [number, number, number, number] = [0.23, 1, 0.32, 1];

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, ease: EASE_OUT },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE_OUT } },
};

const inputClasses =
  'w-full rounded-sm border bg-transparent px-4 py-3 text-sm outline-none transition-colors duration-200 ease-out placeholder:text-[var(--color-muted)] focus:border-[var(--color-accent)]';

export default function DevContact() {
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
      className="py-16 px-6"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.12)' }}
      aria-labelledby="contact-heading"
    >
      <motion.div
        className="mx-auto max-w-5xl"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="grid gap-12 md:grid-cols-[1fr_1.4fr] md:items-start">
          <motion.div variants={itemVariants}>
            <h2
              id="contact-heading"
              className="font-serif text-4xl md:text-5xl"
              style={{ color: 'var(--color-white)' }}
            >
              Let&apos;s talk.
            </h2>

            <p
              className="mt-3 text-sm leading-relaxed"
              style={{ color: 'var(--color-muted)' }}
            >
              Have a project in mind? Reach out.
            </p>

            <a
              href="mailto:omar.seogears@gmail.com"
              className="mt-4 inline-block text-sm underline decoration-white/20 underline-offset-2 transition-opacity duration-150 ease-out hover:opacity-70"
              style={{ color: 'var(--color-white)' }}
            >
              omar.seogears@gmail.com
            </a>
          </motion.div>

          <motion.div variants={itemVariants}>
            {status === 'success' ? (
              <div
                className="rounded-sm border p-6 text-center"
                style={{ borderColor: 'var(--color-accent)' }}
              >
                <p
                  className="text-sm font-medium"
                  style={{ color: 'var(--color-accent)' }}
                >
                  Message sent. I&apos;ll be in touch soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="sr-only">
                      Name
                    </label>
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
                    <label htmlFor="email" className="sr-only">
                      Email
                    </label>
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
                </div>

                <div>
                  <label htmlFor="message" className="sr-only">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={3}
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
                  className="rounded-sm px-8 py-3 text-sm font-semibold uppercase tracking-wider transition-transform duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] hover:brightness-110 active:scale-[0.97] disabled:opacity-50"
                  style={{
                    backgroundColor: 'var(--color-accent)',
                    color: 'var(--color-black)',
                  }}
                >
                  {status === 'submitting' ? 'Sending\u2026' : 'Send message'}
                </button>

                {status === 'error' && (
                  <p className="text-sm text-red-400">
                    Something went wrong. Please try again or email directly.
                  </p>
                )}
              </form>
            )}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
