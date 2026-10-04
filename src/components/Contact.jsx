import { useState } from 'react';

const kontak = [
  {
    label: 'Email',
    value: 'salmassaajidah@gmail.com',
    href: 'mailto:salmassaajidah@gmail.com',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 6 9-6" />
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    value: '0877-2440-3560',
    href: 'https://wa.me/6287724403560',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    value: '@Salmassjaa',
    href: 'https://instagram.com/Salmassjaa',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
      </svg>
    ),
  },
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    e.target.reset();
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="kontak" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal mb-14">
          <p className="text-sm font-semibold text-amber uppercase tracking-wider mb-2">
            Kontak
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-ink">
            Mari bekerja sama
          </h2>
          <p className="text-ink/60 mt-3 max-w-xl">
            Punya proyek desain, video, atau konten media sosial? Kirim pesan atau hubungi
            saya langsung.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          <form onSubmit={handleSubmit} className="reveal md:col-span-3 space-y-4">
            <div>
              <label className="block text-sm font-medium text-ink mb-1.5">Nama</label>
              <input
                type="text"
                required
                className="w-full bg-paper border border-ink/10 rounded-lg px-4 py-3 text-ink placeholder-ink/40 focus:outline-none focus:border-slateblue transition-colors"
                placeholder="Nama kamu"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-ink mb-1.5">Email</label>
              <input
                type="email"
                required
                className="w-full bg-paper border border-ink/10 rounded-lg px-4 py-3 text-ink placeholder-ink/40 focus:outline-none focus:border-slateblue transition-colors"
                placeholder="email@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-ink mb-1.5">Pesan</label>
              <textarea
                required
                rows="5"
                className="w-full bg-paper border border-ink/10 rounded-lg px-4 py-3 text-ink placeholder-ink/40 focus:outline-none focus:border-slateblue transition-colors resize-none"
                placeholder="Tulis pesan kamu..."
              />
            </div>
            <button
              type="submit"
              className="bg-amber text-white font-semibold px-6 py-3 rounded-full hover:bg-amber-dark transition-colors"
            >
              Kirim Pesan
            </button>
            {sent && (
              <p className="text-sm text-slateblue font-medium">
                Terima kasih! Pesan kamu sudah terkirim.
              </p>
            )}
          </form>

          <div className="reveal md:col-span-2 space-y-4">
            {kontak.map((k) => (
              <a
                key={k.label}
                href={k.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 bg-paper border border-ink/10 rounded-xl p-5 hover:border-slateblue transition-colors group"
              >
                <div className="w-11 h-11 rounded-full bg-slateblue text-white flex items-center justify-center flex-shrink-0 group-hover:bg-amber transition-colors">
                  {k.icon}
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-ink/50 uppercase tracking-wide">{k.label}</p>
                  <p className="text-sm font-medium text-ink truncate">{k.value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}