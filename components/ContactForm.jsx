'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email.includes('@') || !form.message) return;
    // TODO: wire to Supabase — insert into `messages` table (see README)
    setSent(true);
  };

  return (
    <form onSubmit={submit} className="rv" noValidate>
      <div className="field">
        <label htmlFor="cf-name">Your name</label>
        <input id="cf-name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Ada Obi" required />
      </div>
      <div className="field">
        <label htmlFor="cf-email">Email</label>
        <input id="cf-email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@email.com" required />
      </div>
      <div className="field">
        <label htmlFor="cf-msg">Message</label>
        <textarea id="cf-msg" rows={6} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell us what you need…" required />
      </div>
      <button className="btn btn-gold btn-big" type="submit">Send message</button>
      {sent && <div className="sent">Message received — we'll reply to your email shortly. ✓</div>}
    </form>
  );
}
