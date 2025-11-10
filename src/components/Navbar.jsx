import { useState } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'Tee Time', href: '#tee-time' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-white/80 border-b border-emerald-100">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-emerald-600 grid place-items-center text-white font-semibold">G</div>
          <span className="text-xl font-semibold tracking-tight text-emerald-900">GreenFair Golf</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-emerald-900/70 hover:text-emerald-900 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-3 text-sm text-emerald-900/70">
            <MapPin className="h-4 w-4 text-emerald-600" />
            <span>100 Fairway Ave</span>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-600 text-white px-5 py-2.5 text-sm font-medium hover:bg-emerald-700 transition-colors"
          >
            <Phone className="h-4 w-4" />
            Contact
          </a>
        </div>

        <button
          className="md:hidden p-2 rounded-md border border-emerald-200 text-emerald-900"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-emerald-100 bg-white">
          <div className="px-6 py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-2 text-emerald-900/80"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 text-white px-5 py-2.5 text-sm font-medium"
            >
              <Phone className="h-4 w-4" /> Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
