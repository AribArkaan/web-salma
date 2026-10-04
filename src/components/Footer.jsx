export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink text-white py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-display text-lg font-bold">Salma Su'daa Saajidah</p>

        <div className="flex items-center gap-5 text-sm">
          <a href="https://instagram.com/Salmassjaa" target="_blank" rel="noreferrer" className="hover:text-amber transition-colors">
            Instagram
          </a>
          <a href="https://wa.me/6287724403560" target="_blank" rel="noreferrer" className="hover:text-amber transition-colors">
            WhatsApp
          </a>
          <a href="mailto:salmassaajidah@gmail.com" className="hover:text-amber transition-colors">
            Email
          </a>
        </div>

        <p className="text-xs text-white/50">
          © {year} Salma Su'daa. All rights reserved.
        </p>
      </div>
    </footer>
  );
}