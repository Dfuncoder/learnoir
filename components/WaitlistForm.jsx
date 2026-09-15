'use client';
import { useState } from 'react';
import { supabase } from '../lib/supabase';

export default function WaitlistForm() {
  const [form, setForm] = useState({ name: '', email: '' });
  const [state, setState] = useState('idle'); // idle | saving | done | dupe | error

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email.includes('@')) return;
    if (!supabase) {
      setState('error');
      return;
    }
    setState('saving');
    const { error } = await supabase
      .from('waitlist')
      .insert({ name: form.name.trim(), email: form.email.trim().toLowerCase() });
    if (!error) setState('done');
    else if (error.code === '23505') setState('dupe');
    else setState('error');
  };

  if (state === 'done' || state === 'dupe') {
    return (
      <div className="sent" role="status">
        {state === 'done'
          ? "You're on the list! We'll email you the moment the first cohort opens. ✓"
          : "You're already on the waitlist — we've got you. ✓"}
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="rv" noValidate>
      <div className="field">
        <label htmlFor="wl-name">Your name</label>
        <input id="wl-name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Ada Obi" required />
      </div>
      <div className="field">
        <label htmlFor="wl-email">Email</label>
        <input id="wl-email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@email.com" required />
      </div>
      <button className="btn btn-gold btn-big" type="submit" disabled={state === 'saving'}>
        {state === 'saving' ? 'Joining…' : 'Join the waitlist'}
      </button>
      {state === 'error' && (
        <div className="form-err" role="alert">
          Something went wrong — please try again, or email hello@learnoir.com and we'll add you ourselves.
        </div>
      )}
    </form>
  );
}
