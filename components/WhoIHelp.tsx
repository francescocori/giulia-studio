const audiences = [
  {
    title: "Individui",
    descriptor: "Adulti che affrontano ansia, lutto, burnout o cambiamenti di vita",
  },
  {
    title: "Coppie",
    descriptor: "Partner alla ricerca di comprensione più profonda e rinnovata connessione",
  },
  {
    title: "Giovani adulti",
    descriptor: "Studenti e giovani che cercano il proprio equilibrio",
  },
];

export default function WhoIHelp() {
  return (
    <section id="who-i-help" className="bg-sage py-28 md:py-36">
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center">

        {/* Eyebrow */}
        <p className="font-dm-sans text-xs tracking-[0.2em] uppercase text-cream/60 mb-5">
          Con chi lavoro
        </p>

        {/* Heading */}
        <h2 className="font-cormorant text-4xl md:text-5xl font-semibold text-cream leading-tight mb-6 max-w-2xl">
          Non devi avere tutto chiaro per cominciare
        </h2>

        {/* Subtext */}
        <p className="font-dm-sans text-sm leading-relaxed text-cream/70 max-w-lg mb-16">
          La terapia non richiede una crisi per essere utile. Che tu stia
          portando qualcosa di pesante o semplicemente ti senta pronto a
          crescere, qui c&apos;è spazio per te.
        </p>

        {/* Circle cards */}
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
          {audiences.map((a) => (
            <div
              key={a.title}
              className="w-56 h-56 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 flex flex-col items-center justify-center text-center px-10"
            >
              <p className="font-cormorant text-xl font-semibold text-cream mb-2">
                {a.title}
              </p>
              <p className="font-dm-sans text-xs leading-relaxed text-cream/65">
                {a.descriptor}
              </p>
            </div>
          ))}
        </div>

        {/* Divider + note */}
        <div className="mt-16 flex flex-col items-center gap-4">
          <div className="w-16 h-px bg-cream/25" />
          <p className="font-dm-sans text-xs tracking-wide text-cream/55">
            Sessioni disponibili in presenza e online
          </p>
        </div>

      </div>
    </section>
  );
}
