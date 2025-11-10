import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-28">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-50 via-white to-white" />
      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-10 items-center">
        <div className="py-16">
          <p className="text-emerald-700 font-semibold tracking-wide">Timeless Golf, Modern Comfort</p>
          <h1 className="mt-3 text-4xl sm:text-5xl font-semibold leading-tight text-emerald-900">
            A modern and clean golf experience
          </h1>
          <p className="mt-4 text-emerald-900/70 max-w-xl">
            Welcome to GreenFair Golf — a classy country club vibe with pristine fairways, elevated 
            service, and effortless tee time booking.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#tee-time"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-600 text-white px-6 py-3 font-medium hover:bg-emerald-700 transition-colors"
            >
              Book a tee time <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-200 text-emerald-900 px-6 py-3 font-medium hover:bg-emerald-50 transition-colors"
            >
              Learn more
            </a>
          </div>
          <dl className="mt-10 grid grid-cols-3 gap-6 max-w-lg">
            <div>
              <dt className="text-sm text-emerald-900/60">Holes</dt>
              <dd className="text-2xl font-semibold text-emerald-900">18</dd>
            </div>
            <div>
              <dt className="text-sm text-emerald-900/60">Par</dt>
              <dd className="text-2xl font-semibold text-emerald-900">72</dd>
            </div>
            <div>
              <dt className="text-sm text-emerald-900/60">Est.</dt>
              <dd className="text-2xl font-semibold text-emerald-900">1998</dd>
            </div>
          </dl>
        </div>
        <div className="relative h-[420px] sm:h-[520px] rounded-3xl overflow-hidden ring-1 ring-emerald-200/60">
          <img
            alt="Lush golf course fairway"
            src="https://images.unsplash.com/photo-1468376566517-5467fe6bb42a?q=80&w=1860&auto=format&fit=crop"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/10 to-transparent" />
        </div>
      </div>
    </section>
  );
}
