import { Instagram, Facebook, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-emerald-100 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 grid md:grid-cols-2 gap-8">
        <div>
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-emerald-600 grid place-items-center text-white font-semibold">G</div>
            <span className="text-lg font-semibold tracking-tight text-emerald-900">GreenFair Golf</span>
          </div>
          <p className="mt-3 text-emerald-900/70 max-w-md">
            100 Fairway Ave, Fairview • Open daily 6am – 8pm
          </p>
        </div>
        <div className="flex md:justify-end items-center gap-3">
          <a href="#" className="p-2 rounded-full border border-emerald-200 text-emerald-900 hover:bg-emerald-50"><Instagram className="h-5 w-5"/></a>
          <a href="#" className="p-2 rounded-full border border-emerald-200 text-emerald-900 hover:bg-emerald-50"><Facebook className="h-5 w-5"/></a>
          <a href="mailto:info@greenfair.golf" className="p-2 rounded-full border border-emerald-200 text-emerald-900 hover:bg-emerald-50"><Mail className="h-5 w-5"/></a>
        </div>
      </div>
      <div className="text-center text-sm text-emerald-900/60 py-6">© {new Date().getFullYear()} GreenFair Golf. All rights reserved.</div>
    </footer>
  );
}
