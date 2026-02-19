const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
    title: "Ansia & Stress",
    description:
      "Impara a calmare la mente, regolare il sistema nervoso e costruire resilienza di fronte alle pressioni quotidiane.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    ),
    title: "Depressione",
    description:
      "Affronta umore basso, perdita di motivazione ed esaurimento emotivo con un supporto compassionevole e basato sull'evidenza.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M9 12l2 2 4-4" />
        <path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2z" />
      </svg>
    ),
    title: "Trauma & PTSD",
    description:
      "Elabora esperienze difficili ai tuoi tempi in un ambiente sicuro e sintonizzato, attraverso approcci EMDR e somatici.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Terapia di coppia",
    description:
      "Rafforza la comunicazione, ricostruisci la fiducia e approfondisci il legame attraverso un lavoro relazionale guidato.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-sage py-28 md:py-36">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="font-dm-sans text-xs tracking-[0.2em] uppercase text-cream/60 mb-4">
            Cosa offro
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-semibold text-cream mb-5">
            Le aree in cui posso aiutarti
          </h2>
          <p className="font-dm-sans text-sm leading-relaxed text-cream/60 max-w-md mx-auto">
            Il percorso di ognuno è unico. Queste sono alcune delle aree in cui
            offro un supporto mirato e compassionevole.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-white/15 backdrop-blur-sm border border-white/15 rounded-2xl p-8 hover:border-white/40 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 cursor-default"
            >
              {/* Icon circle */}
              <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center text-cream mb-6">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="font-cormorant text-2xl font-semibold text-cream mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="font-dm-sans text-sm leading-relaxed text-cream/65">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
