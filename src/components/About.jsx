const pendidikan = [
  { gelar: 'S1 Ilmu Komunikasi', tempat: 'Universitas Islam Bandung (UNISBA)', tahun: '2022 – 2026', note: 'IPK 3.64' },
  { gelar: 'SMA', tempat: 'SMAN 8 Bandung', tahun: '2019 – 2022' },
];

const minat = ['Desain Visual', 'Poster', 'Musik', 'Film'];

export default function About() {
  return (
    <section id="tentang" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal mb-14">
          <p className="text-sm font-semibold text-amber uppercase tracking-wider mb-2">
            Tentang
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-ink">
            Sedikit cerita tentang saya
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="reveal">
            <p className="text-ink/75 leading-relaxed mb-5">
              Saya <strong className="text-ink">Salma Su'daa Saajidah</strong>, lulusan Ilmu
              Komunikasi Universitas Islam Bandung dengan IPK <strong className="text-ink">3.64</strong>.
              Saya percaya bahwa komunikasi visual yang baik adalah jembatan antara pesan
              dan perasaan audiens.
            </p>
            <p className="text-ink/75 leading-relaxed mb-6">
              Selama kuliah, saya mendalami dunia desain grafis, produksi konten media
              sosial, dan storytelling visual — mulai dari merancang poster, mengedit
              video pendek, hingga menulis caption yang komunikatif.
            </p>

            <div>
              <p className="text-sm font-semibold text-ink mb-3">Minat</p>
              <div className="flex flex-wrap gap-2">
                {minat.map((m) => (
                  <span
                    key={m}
                    className="text-sm bg-paper border border-ink/10 text-ink/80 px-4 py-1.5 rounded-full"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="reveal">
            <p className="text-sm font-semibold text-ink mb-5">Riwayat Pendidikan</p>
            <div className="space-y-5">
              {pendidikan.map((p, i) => (
                <div key={i} className="border-l-2 border-slateblue pl-5">
                  <p className="font-display font-bold text-ink">{p.gelar}</p>
                  <p className="text-ink/70 text-sm mt-1">{p.tempat}</p>
                  <p className="text-ink/50 text-xs mt-1">
                    {p.tahun} {p.note && `• ${p.note}`}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}