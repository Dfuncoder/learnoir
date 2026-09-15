'use client';
import { useState } from 'react';
import { supabase } from '../lib/supabase';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [state, setState] = useState('idle'); // idle | saving | done | error

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email.includes('@') || !form.message) return;
    if (!supabase) {
      setState('error');
      return;
    }
    setState('saving');
    const { error } = await supabase.from('messages').insert({
      name: form.name.trim(),
      email: form.email.trim().toLowerCase(),
      message: form.message.trim(),
    });
    setState(error ? 'error' : 'done');
  };

  if (state === 'done') {
    return (
      <div className="sent" role="status">
        Message received — we&rsquo;ll reply to your email shortly. ✓
      </div>
    );
  }

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
      <button className="btn btn-gold btn-big" type="submit" disabled={state === 'saving'}>
        {state === 'saving' ? 'Sending…' : 'Send message'}
      </button>
      {state === 'error' && (
        <div className="form-err" role="alert">
          Something went wrong — please email us directly at hello@learnoir.com and we&rsquo;ll pick it up from there.
        </div>
      )}
    </form>
  );
}
