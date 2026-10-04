export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="reveal">
          <p className="text-sm font-medium text-slateblue mb-4 tracking-wide uppercase">
            Halo, saya Salma 👋
          </p>
          <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight text-ink mb-6">
            Social Media Content &<br />
            Visual Graphic Designer
          </h1>
          <p className="text-base md:text-lg text-ink/70 leading-relaxed mb-8 max-w-lg">
            Lulusan Ilmu Komunikasi yang berpengalaman membuat konten end-to-end —
            mulai dari desain poster, editing video, hingga penulisan caption yang
            menyentuh audiens.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#portofolio"
              className="bg-slateblue text-white font-semibold px-6 py-3 rounded-full hover:bg-slateblue-dark transition-colors"
            >
              Lihat Karya
            </a>
            <a
              href="/CV-Salma-Sudaa-Saajidah.pdf"
              download
              className="border-2 border-ink/20 text-ink font-semibold px-6 py-3 rounded-full hover:border-ink/50 transition-colors"
            >
              Unduh CV
            </a>
          </div>
        </div>

        <div className="reveal flex justify-center md:justify-end">
          <div className="relative">
            <div className="absolute -inset-4 bg-slateblue/10 rounded-[2rem] rotate-3" />
            <img
              src="/public/profil.jpg"
              alt="Salma Su'daa Saajidah"
              className="relative w-72 h-80 md:w-80 md:h-96 object-cover rounded-[2rem] shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}