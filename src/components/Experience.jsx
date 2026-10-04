const tugas = [
  'Merancang desain poster, feed Instagram, dan infografis untuk kebutuhan publikasi instansi.',
  'Melakukan editing video untuk konten reels dan dokumentasi kegiatan.',
  'Menulis caption yang komunikatif dan sesuai dengan tone instansi.',
  'Menyelaraskan visual dengan identitas dan branding Dinas Arsip dan Perpustakaan Kota Bandung.',
];

export default function Experience() {
  return (
    <section id="pengalaman" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal mb-14">
          <p className="text-sm font-semibold text-amber uppercase tracking-wider mb-2">
            Pengalaman
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-ink">
            Pengalaman kerja & magang
          </h2>
        </div>

        <div className="reveal bg-paper border border-ink/10 rounded-2xl p-8 md:p-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-6">
            <div>
              <h3 className="font-display text-xl md:text-2xl font-bold text-ink">
                Magang — Dinas Arsip dan Perpustakaan Kota Bandung
              </h3>
              <p className="text-ink/60 text-sm mt-1">Divisi Publikasi & Konten Media Sosial</p>
            </div>
            <span className="inline-block bg-slateblue text-white text-xs font-semibold px-4 py-1.5 rounded-full self-start md:self-auto">
              Magang
            </span>
          </div>

          <ul className="space-y-3">
            {tugas.map((t, i) => (
              <li key={i} className="flex gap-3 text-ink/75 leading-relaxed">
                <span className="text-amber font-bold mt-0.5">—</span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}