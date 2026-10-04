import { useState, useEffect } from 'react';

/* =========================================================
   DATA: Karya Instagram (semua ditampilkan, tidak di-hide)
========================================================= */
const instagramProjects = [
    {
        title: 'Yuk uji seberapa Sunda kamu hari ini!',
        category: 'Graphic Design',
        link: 'https://www.instagram.com/p/DMfechqzqQI/',
        desc: 'Desain poster untuk quiz by posting IG.',
        tag: 'bg-slateblue',
        cover: '/quiz.jpg',
    },
    {
        title: 'Tipe-Tipe Pengunjung Perpustakaan',
        category: 'Video Editing',
        link: 'https://www.instagram.com/bdg.disarpus/reel/DM4BTjST25j/',
        desc: 'Editing video reels tentang tipe-tipe pengunjung perpustakaan.',
        tag: 'bg-amber',
        cover: '/tipe tipe.jpg',
    },
    {
        title: 'Sama Sama Seru, Tapi Vibes-nya Beda Banget!',
        category: 'Video Editing',
        link: 'https://www.instagram.com/reel/DL_X3vazbut/',
        desc: 'Konten reels untuk promosi kegiatan instansi.',
        tag: 'bg-amber',
        cover: '/Tim mana.jpg',
    },
    {
        title: '5 Spot Favorit di DISARPUS',
        category: 'Video Editing',
        link: 'https://www.instagram.com/reel/DL1ZRTXTLJ3/',
        desc: 'Konten memperlihatkan spot-spot favorit di DISARPUS.',
        tag: 'bg-amber',
        cover: '/5 spot.jpg',
    },
    {
        title: 'Pentingnya Public Speaking',
        category: 'Video Editing',
        link: 'https://www.instagram.com/reel/DL1ZRTxTLJ3/',
        desc: 'Konten edukasi singkat seputar public speaking.',
        tag: 'bg-ink',
        cover: '/speaking.jpg',
    },
    {
        title: 'Time Travel ke Masa Lalu',
        category: 'Video Editing',
        link: 'https://www.instagram.com/reel/DL1ZRTxTLJ3/',
        desc: 'Konten keliling singkat seputar Kota Bandung.',
        tag: 'bg-ink',
        cover: '/travel.jpg',
    },
    {
        title: 'Time Travel ke Masa Lalu part 2',
        category: 'Video Editing',
        link: 'https://www.instagram.com/bdg.disarpus/reel/DMPydk0TzEq/',
        desc: 'Konten keliling singkat seputar Kota Bandung part 2.',
        tag: 'bg-ink',
        cover: '/travel2.jpg',
    },
    {
        title: 'Tired, But make it Slang',
        category: 'Video Editing',
        link: 'https://www.instagram.com/bdg.disarpus/reel/DMPydk0TzEq/',
        desc: 'Konten edukasi mempelajari bahasa inggris.',
        tag: 'bg-ink',
        cover: '/slang.jpg',
    },
];

/* =========================================================
   DATA: Galeri Desain Grafis (karya Canva / poster)
   → Hanya butuh cover, tanpa title/desc
========================================================= */
const graphicProjects = [
    { id: 1, cover: 'Poster/8b71591f-ff0c-4205-8c9c-861ad35b5981.jpg' },
    { id: 2, cover: 'Poster/8f333c87-8f7d-481c-aad9-b4a5df75a613.jpg' },
    { id: 3, cover: 'Poster/52e72f3a-d688-46dd-872d-737d54cf17bc.jpg' },
    { id: 4, cover: 'Poster/52e80889-4069-407e-b307-3c1ac1008b43.jpg' },
    { id: 5, cover: 'Poster/67e29e09-19a4-426d-81a7-8b7074b34416.jpg' },
    { id: 6, cover: 'Poster/559c7870-6869-4cee-b122-7a4cf0d09664.jpg' },
    { id: 7, cover: 'Poster/709639f4-5150-4f54-b996-84d97821e4de.jpg' },
    { id: 8, cover: 'Poster/a9d651d5-c497-4cd2-9ddc-a5d4338dcfed.jpg' },
    { id: 9, cover: 'Poster/d47300ec-83d3-4c29-aafb-cccb9cb09985.jpg' },
    { id: 10, cover: 'Poster/ef87eb81-180f-4ee9-ae9d-3e1c643d8fd1.jpg' },
    { id: 11, cover: 'Poster/f30d562b-a37f-4b46-adc0-972360fa922f.jpg' },
    { id: 12, cover: 'Poster/f300fdac-3f5f-4000-8ea6-396cc905aa7e.jpg' },
    { id: 13, cover: 'Poster/fa12fc83-097a-4b8c-a49d-677c7b320b17.jpg' },
];

const articles = [
    {
        title: '"Jelajahi Rasa Bandung: Cerita Ibu Ani Sebagai Pedagang Kaki Lima"',
        date: 'Jan 14, 2024',
        excerpt:
            'Bandung dengan julukan kota kembang, aroma semerbak wangi jajanan tercium di indra penciuman. Jajanan kaki lima terlihat di...',
        link: 'https://medium.com/@salmassaajidah/jelajahi-rasa-bandung-cerita-ibu-ani-sebagai-pedagang-kaki-lima-42e530595bba',
        thumbnail: 'artikel/1_klciyEF3bpRP0rJ73MBInw.webp',
    },
    {
        title: 'Dream Catcher Digital Agency: "Mau UMKM-mu Go Online? Start Dari Branding Digital Dulu!"',
        date: 'Jan 1, 2024',
        excerpt:
            'Perkembangan teknologi digital mendorong UMKM untuk mulai beradaptasi dengan pemasaran online. Branding digital menjadi langkah awal yang...',
        link: 'https://medium.com/@salmassaajidah/dream-catcher-digital-agency-mau-umkm-mu-go-online-start-dari-branding-digital-dulu-5dbd8c7016d6',
        thumbnail: 'artikel/1_u8f7Nk0id1GpHhOQQqjRdw.webp',
    },
     {
        title: 'Berniat Mengedukasi Anak Kecil, Content Creator Ini Justru Mendapatkan Komentar Tidak Senonoh',
        date: 'Nov 26, 2023',
        excerpt:
            'Perkembangan teknologi digital mendorong UMKM untuk mulai beradaptasi dengan pemasaran online. Branding digital menjadi langkah awal yang...',
        link: 'https://medium.com/@salmassaajidah/berniat-mengedukasi-anak-kecil-content-creator-ini-justru-mendapatkan-komentar-tidak-senonoh-c9b639a5c1e4',
        thumbnail: 'artikel/0_ZOFokHlcJGRFKGN-.webp',
    },
];

const INITIAL_COUNT = 6;

/* =========================================================
   KOMPONEN: Cover (untuk card IG)
========================================================= */
function Cover({ src, alt, tag }) {
    return (
        <div className={`relative h-48 overflow-hidden ${tag}`}>
            <img
                src={src}
                alt={alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling.style.display = 'flex';
                }}
            />
            <div className="hidden absolute inset-0 items-center justify-center" aria-hidden="true">
                <svg
                    width="48" height="48" viewBox="0 0 24 24" fill="none"
                    stroke="white" strokeWidth="1.5"
                    className="opacity-70 group-hover:opacity-100 transition-opacity"
                >
                    <rect x="3" y="3" width="18" height="18" rx="3" />
                    <circle cx="9" cy="9" r="2" />
                    <path d="M21 15l-5-5L5 21" />
                </svg>
            </div>
        </div>
    );
}

/* =========================================================
   KOMPONEN: Modal Detail (untuk card Instagram)
========================================================= */
function Modal({ project, onClose }) {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        const onEsc = (e) => e.key === 'Escape' && onClose();
        window.addEventListener('keydown', onEsc);
        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', onEsc);
        };
    }, [onClose]);

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-ink/70 backdrop-blur-sm animate-[fadeIn_0.2s_ease]"
            onClick={onClose}
        >
            <div
                className="relative bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    aria-label="Tutup"
                    className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-ink flex items-center justify-center shadow-md transition-colors"
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M6 6l12 12M6 18L18 6" />
                    </svg>
                </button>

                <div className="w-full bg-paper">
                    <img
                        src={project.cover}
                        alt={project.title}
                        className="w-full h-auto max-h-[60vh] object-contain mx-auto"
                    />
                </div>

                <div className="p-6 md:p-8">
                    <p className="text-xs font-semibold text-amber uppercase tracking-wider mb-2">
                        {project.category}
                    </p>
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-ink mb-3">
                        {project.title}
                    </h3>
                    <p className="text-ink/70 leading-relaxed mb-6">{project.desc}</p>

                    <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 bg-slateblue text-white font-semibold px-6 py-3 rounded-full hover:bg-slateblue-dark transition-colors"
                    >
                        Buka Konten
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M7 17L17 7M9 7h8v8" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
}

/* =========================================================
   KOMPONEN: Modal Galeri (menampilkan semua gambar)
========================================================= */
function GalleryModal({ projects, onClose }) {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        const onEsc = (e) => e.key === 'Escape' && onClose();
        window.addEventListener('keydown', onEsc);
        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', onEsc);
        };
    }, [onClose]);

    const [preview, setPreview] = useState(null);

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-ink/80 backdrop-blur-sm animate-[fadeIn_0.2s_ease]"
            onClick={onClose}
        >
            <div
                className="relative bg-white rounded-2xl w-full max-w-6xl max-h-[90vh] overflow-y-auto shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header modal */}
                <div className="sticky top-0 z-10 bg-white border-b border-ink/10 px-6 md:px-8 py-5 flex items-center justify-between">
                    <div>
                        <p className="text-xs font-semibold text-amber uppercase tracking-wider mb-1">
                            Galeri
                        </p>
                        <h3 className="font-display text-xl md:text-2xl font-bold text-ink">
                            Semua Karya Desain Grafis
                        </h3>
                    </div>
                    <button
                        onClick={onClose}
                        aria-label="Tutup"
                        className="w-10 h-10 rounded-full bg-paper hover:bg-ink/10 text-ink flex items-center justify-center transition-colors flex-shrink-0"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M6 6l12 12M6 18L18 6" />
                        </svg>
                    </button>
                </div>

                {/* Grid semua gambar */}
                <div className="p-6 md:p-8">
                    {/* Grid semua gambar — masonry juga */}
                    <div className="columns-2 md:columns-3 lg:columns-4 gap-4">
                        {projects.map((p) => (
                            <button
                                key={p.id}
                                type="button"
                                onClick={() => setPreview(p)}
                                className="group relative mb-4 break-inside-avoid w-full overflow-hidden rounded-xl bg-paper border border-ink/10 hover:border-slateblue transition-colors"
                            >
                                <img
                                    src={p.cover}
                                    alt={`Karya ${p.id}`}
                                    loading="lazy"
                                    className="w-full h-auto block transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/20 transition-colors flex items-center justify-center">
                                    <svg
                                        width="32" height="32" viewBox="0 0 24 24" fill="none"
                                        stroke="white" strokeWidth="2"
                                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                                    >
                                        <circle cx="11" cy="11" r="7" />
                                        <path d="M21 21l-4.35-4.35M11 8v6M8 11h6" />
                                    </svg>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Preview ukuran besar saat gambar di-klik */}
            {preview && (
                <div
                    className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-ink/90"
                    onClick={(e) => {
                        e.stopPropagation();
                        setPreview(null);
                    }}
                >
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            setPreview(null);
                        }}
                        aria-label="Tutup preview"
                        className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/90 hover:bg-white text-ink flex items-center justify-center shadow-lg transition-colors"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M6 6l12 12M6 18L18 6" />
                        </svg>
                    </button>
                    <img
                        src={preview.cover}
                        alt={`Karya ${preview.id}`}
                        className="max-w-full max-h-[90vh] object-contain rounded-lg"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </div>
    );
}

/* =========================================================
   KOMPONEN: Card Instagram (dengan info)
========================================================= */
function ProjectCard({ project, onOpen }) {
    return (
        <article className="reveal group bg-white border border-ink/10 rounded-2xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col">
            <button
                type="button"
                onClick={() => onOpen(project)}
                className="text-left w-full cursor-pointer"
                aria-label={`Lihat detail ${project.title}`}
            >
                <Cover src={project.cover} alt={project.title} tag={project.tag} />
                <div className="p-6 pb-4">
                    <p className="text-xs font-semibold text-amber uppercase tracking-wider mb-2">
                        {project.category}
                    </p>
                    <h3 className="font-display text-lg font-bold text-ink mb-2 group-hover:text-slateblue transition-colors">
                        {project.title}
                    </h3>
                    <p className="text-sm text-ink/60 leading-relaxed">{project.desc}</p>
                </div>
            </button>

            <div className="px-6 pb-6 mt-auto">
                <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-slateblue hover:text-amber transition-colors"
                >
                    Buka Konten
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M7 17L17 7M9 7h8v8" />
                    </svg>
                </a>
            </div>
        </article>
    );
}

/* =========================================================
   KOMPONEN UTAMA: Portfolio (2 section)
========================================================= */
function ArticleItem({ article }) {
    return (
        <a
            href={article.link}
            target="_blank"
            rel="noreferrer"
            className="reveal group block border-b border-ink/10 py-8 first:pt-0 last:border-b-0"
        >
            {/* Baris atas: avatar + nama + tanggal */}
            <div className="flex items-center gap-3 mb-4">
                <div className="w-7 h-7 rounded-full bg-ink/70 text-white text-xs font-semibold flex items-center justify-center flex-shrink-0">
                    S
                </div>
                <p className="text-sm text-ink/80">
                    <span className="font-medium">Salma Su'daa Saajidah</span>
                    <span className="text-ink/40"> · {article.date}</span>
                </p>
            </div>

            {/* Konten: teks kiri, thumbnail kanan */}
            <div className="flex gap-6 md:gap-10 items-start">
                <div className="flex-1 min-w-0">
                    <h3 className="font-display text-xl md:text-2xl font-bold text-ink leading-snug mb-3 group-hover:text-slateblue transition-colors line-clamp-2">
                        {article.title}
                    </h3>
                    <p className="text-sm md:text-base text-ink/60 leading-relaxed line-clamp-3 mb-4">
                        {article.excerpt}
                    </p>

                    {/* Icon bookmark */}
                    <div className="flex items-center gap-4">
                        <svg
                            width="18" height="18" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" strokeWidth="1.8"
                            className="text-ink/40 group-hover:text-ink transition-colors"
                        >
                            <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" />
                            <path d="M12 3v6M9 6h6" />
                        </svg>
                    </div>
                </div>

                {/* Thumbnail kanan */}
                {article.thumbnail && (
                    <div className="w-28 h-28 md:w-44 md:h-32 rounded-md overflow-hidden flex-shrink-0 bg-paper border border-ink/10">
                        <img
                            src={article.thumbnail}
                            alt={article.title}
                            loading="lazy"
                            className="w-full h-full object-cover"
                        />
                    </div>
                )}
            </div>
        </a>
    );
}

export default function Portfolio() {
    const [selected, setSelected] = useState(null);
    const [galleryOpen, setGalleryOpen] = useState(false);

    const visibleGraphic = graphicProjects.slice(0, INITIAL_COUNT);
    const hasMoreGraphic = graphicProjects.length > INITIAL_COUNT;

    return (
        <>
            {/* =====================================================
          SECTION 1 — Karya Instagram (dengan info lengkap)
      ===================================================== */}
            <section id="portofolio" className="py-20 md:py-28 bg-paper">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="reveal mb-14">
                        <p className="text-sm font-semibold text-amber uppercase tracking-wider mb-2">
                            Portofolio
                        </p>
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-ink">
                            Karya di Instagram
                        </h2>
                        <p className="text-ink/60 mt-3 max-w-xl">
                            Konten media sosial yang saya kerjakan — mulai dari desain poster,
                            editing video reels, hingga penulisan caption.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {instagramProjects.map((p) => (
                            <ProjectCard key={p.title} project={p} onOpen={setSelected} />
                        ))}
                    </div>
                </div>
            </section>

            {/* =====================================================
          SECTION 2 — Galeri Desain Grafis (HANYA GAMBAR)
      ===================================================== */}
            <section id="galeri" className="py-20 md:py-28 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="reveal mb-14">
                        <p className="text-sm font-semibold text-amber uppercase tracking-wider mb-2">
                            Galeri
                        </p>
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-ink">
                            Desain Grafis & Poster
                        </h2>
                        <p className="text-ink/60 mt-3 max-w-xl">
                            Kumpulan karya desain grafis yang saya buat.
                        </p>
                    </div>

                    {/* Masonry layout pakai CSS columns */}
                    <div className="columns-2 md:columns-3 gap-4 [column-fill:_balance]">
                        {visibleGraphic.map((p) => (
                            <div
                                key={p.id}
                                className="reveal mb-4 break-inside-avoid overflow-hidden rounded-2xl bg-paper border border-ink/10"
                            >
                                <img
                                    src={p.cover}
                                    alt={`Karya ${p.id}`}
                                    loading="lazy"
                                    className="w-full h-auto block"
                                />
                            </div>
                        ))}
                    </div>

                    {hasMoreGraphic && (
                        <div className="reveal mt-12 flex justify-center">
                            <button
                                type="button"
                                onClick={() => setGalleryOpen(true)}
                                className="inline-flex items-center gap-2 border-2 border-ink/20 text-ink font-semibold px-7 py-3 rounded-full hover:border-slateblue hover:text-slateblue transition-colors"
                            >
                                Lihat Semua Karya ({graphicProjects.length})
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <path d="M7 17L17 7M9 7h8v8" />
                                </svg>
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* =====================================================
    SECTION 3 — Artikel (layout ala Medium)
===================================================== */}
            <section id="artikel" className="py-20 md:py-28 bg-paper">
                <div className="max-w-3xl mx-auto px-6">
                    <div className="reveal mb-14">
                        <p className="text-sm font-semibold text-amber uppercase tracking-wider mb-2">
                            Tulisan
                        </p>
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-ink">
                            Artikel & Cerita
                        </h2>
                        <p className="text-ink/60 mt-3 max-w-xl">
                            Beberapa tulisan yang saya publikasikan — seputar kuliner, UMKM, dan
                            komunikasi digital.
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl border border-ink/10 px-6 md:px-10 py-2">
                        {articles.map((a) => (
                            <ArticleItem key={a.title} article={a} />
                        ))}
                    </div>
                </div>
            </section>

            {selected && <Modal project={selected} onClose={() => setSelected(null)} />}
            {galleryOpen && (
                <GalleryModal projects={graphicProjects} onClose={() => setGalleryOpen(false)} />
            )}
        </>
    );
}