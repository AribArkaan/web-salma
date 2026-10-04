const software = [
  'Adobe Premiere Pro', 'Canva', 'CapCut', 'Figma (Basic)',
  'Adobe Illustrator (Basic)', 'PowerPoint', 'MS Word',
];

const core = [
  'Desain Visual & Poster', 'Content Creation', 'Visual Storytelling',
  'Penulisan & Riset Artikel',
];

const soft = [
  'Komunikasi', 'Kerja Sama Tim', 'Manajemen Waktu',
  'Berpikir Kreatif', 'Adaptasi', 'Bekerja Mandiri',
];

function SkillBlock({ title, items, accent }) {
  return (
    <div className="reveal bg-white border border-ink/10 rounded-2xl p-7 hover:border-slateblue/40 transition-colors">
      <h3 className="font-display text-xl font-bold text-ink mb-5 flex items-center gap-3">
        <span className={`w-2 h-2 rounded-full ${accent}`} />
        {title}
      </h3>
      <ul className="flex flex-wrap gap-2">
        {items.map((item) => (
          <li
            key={item}
            className="text-sm bg-paper text-ink/80 px-3.5 py-1.5 rounded-lg border border-ink/5"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="keahlian" className="py-20 md:py-28 bg-paper">
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal mb-14">
          <p className="text-sm font-semibold text-amber uppercase tracking-wider mb-2">
            Keahlian
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-ink">
            Alat & kemampuan yang saya kuasai
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <SkillBlock title="Software & Tools" items={software} accent="bg-slateblue" />
          <SkillBlock title="Core Competencies" items={core} accent="bg-amber" />
          <div className="md:col-span-2">
            <SkillBlock title="Soft Skills" items={soft} accent="bg-ink" />
          </div>
        </div>
      </div>
    </section>
  );
}