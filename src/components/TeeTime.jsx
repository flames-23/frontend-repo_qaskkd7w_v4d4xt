import { useState } from 'react';
import { Calendar, Clock, Users } from 'lucide-react';

export default function TeeTime() {
  const [form, setForm] = useState({ date: '', time: '', players: '2' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="tee-time" className="py-20 bg-emerald-50/50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold text-emerald-900">Reserve a tee time</h2>
          <p className="mt-2 text-emerald-900/70">Plan your next round with a few quick details.</p>
        </div>

        <div className="mt-8 grid lg:grid-cols-2 gap-10 items-start">
          <form onSubmit={handleSubmit} className="rounded-2xl bg-white p-6 sm:p-8 shadow-sm ring-1 ring-emerald-200/60">
            <div className="grid sm:grid-cols-2 gap-5">
              <label className="block">
                <span className="text-sm text-emerald-900/70 flex items-center gap-2"><Calendar className="h-4 w-4 text-emerald-600"/>Date</span>
                <input
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full rounded-lg border border-emerald-200 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-500/50"
                />
              </label>

              <label className="block">
                <span className="text-sm text-emerald-900/70 flex items-center gap-2"><Clock className="h-4 w-4 text-emerald-600"/>Time</span>
                <input
                  type="time"
                  name="time"
                  value={form.time}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full rounded-lg border border-emerald-200 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-500/50"
                />
              </label>

              <label className="block sm:col-span-2">
                <span className="text-sm text-emerald-900/70 flex items-center gap-2"><Users className="h-4 w-4 text-emerald-600"/>Players</span>
                <select
                  name="players"
                  value={form.players}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-lg border border-emerald-200 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-500/50"
                >
                  <option value="1">1 Player</option>
                  <option value="2">2 Players</option>
                  <option value="3">3 Players</option>
                  <option value="4">4 Players</option>
                </select>
              </label>

              <button
                type="submit"
                className="sm:col-span-2 mt-2 rounded-full bg-emerald-600 text-white px-6 py-3 font-medium hover:bg-emerald-700 transition-colors"
              >
                Check availability
              </button>
            </div>

            {submitted && (
              <p className="mt-4 text-emerald-700">Thanks! We'll confirm availability shortly.</p>
            )}
          </form>

          <div className="rounded-2xl overflow-hidden ring-1 ring-emerald-200/60">
            <img
              alt="Green putting surface with flag"
              src="https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=1770&auto=format&fit=crop"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
