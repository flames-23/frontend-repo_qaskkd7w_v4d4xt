export default function About() {
  const features = [
    {
      title: 'Championship course',
      desc: 'A beautifully maintained 18-hole, par-72 layout designed for all levels.'
    },
    {
      title: 'Practice facilities',
      desc: 'Driving range, short-game area, and putting greens to fine-tune your swing.'
    },
    {
      title: 'Clubhouse & dining',
      desc: 'Relax after your round with refined dining and panoramic terrace views.'
    },
  ];

  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold text-emerald-900">About GreenFair</h2>
          <p className="mt-2 text-emerald-900/70">Classic golf heritage with a modern, minimalist aesthetic.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-emerald-200/70 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-emerald-900">{f.title}</h3>
              <p className="mt-2 text-emerald-900/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
