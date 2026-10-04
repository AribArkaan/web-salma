import { useState, useEffect } from 'react';

const links = [
  { name: 'Home', href: '#home' },
  { name: 'Tentang', href: '#tentang' },
  { name: 'Keahlian', href: '#keahlian' },
  { name: 'Pengalaman', href: '#pengalaman' },
  { name: 'Portofolio', href: '#portofolio' },
  { name: 'Kontak', href: '#kontak' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-paper shadow-sm' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="font-display text-xl font-bold text-ink">
          Salma Su'daa
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-ink/80">
          {links.map((l) => (
            <li key={l.name}>
              <a href={l.href} className="nav-link hover:text-ink transition-colors">
                {l.name}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="https://wa.me/6287724403560"
          target="_blank"
          rel="noreferrer"
          className="hidden md:inline-block bg-amber text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-amber-dark transition-colors"
        >
          Hubungi Saya
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-ink"
          aria-label="Menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-paper border-t border-ink/10 px-6 py-4">
          <ul className="flex flex-col gap-4 text-sm font-medium">
            {links.map((l) => (
              <li key={l.name}>
                <a href={l.href} onClick={() => setOpen(false)} className="text-ink/80 hover:text-ink">
                  {l.name}
                </a>
              </li>
            ))}
            <li>
              <a
                href="https://wa.me/6287724403560"
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-amber text-white px-5 py-2.5 rounded-full font-semibold"
              >
                Hubungi Saya
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}