import Image from "next/image";

const socials = [
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-4 h-4"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-4 h-4"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:hello@giuliatherapy.com",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-4 h-4"
      >
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="relative flex flex-col items-center justify-center overflow-hidden py-36 min-h-190 rounded-t-[5%]">
      {/* Background image */}
      <Image
        src="/images/footerImage.png"
        alt=""
        fill
        className="object-cover"
        aria-hidden="true"
      />

      {/* Warm dark overlay */}
      <div
        className="absolute inset-0 z-10"
        style={{ backgroundColor: "rgba(30, 40, 30, 0.45)" }}
      />

      {/* Cream wave — soft organic top edge mirroring the hero */}
      <div className="absolute top-0 left-0 w-full leading-[0] -translate-y-[calc(100%-2px)] z-20 pointer-events-none">
        <svg
          viewBox="0 0 1440 90"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-16 md:h-24 block"
        >
          <path d="M0,0 C480,90 960,0 1440,70 L1440,0 L0,0 Z" fill="#FAF6EE" />
        </svg>
      </div>

      {/* Content — mirrors hero card style */}
      <div className="relative z-30 flex flex-col items-center gap-8">
        <div className=" rounded-[64px] px-12 py-14 max-w-md text-center">
          {/* Eyebrow */}
          <p className="font-dm-sans text-xs tracking-[0.2em] uppercase text-cream/90 mb-6">
            Terapia &amp; Benessere
          </p>

          {/* Name */}
          <p className="font-cormorant text-5xl font-semibold text-cream leading-tight mb-6">
            Giulia
          </p>

          {/* Tagline */}
          <p className="font-dm-sans text-sm leading-relaxed text-cream/90 mb-8">
            Terapia per il reale e l&apos;incerto — uno spazio per rallentare,
            essere ascoltati e trovare la propria strada.
          </p>

          {/* Social icons */}
          <div className="flex items-center justify-center gap-6">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="text-cream/90 hover:text-cream transition-colors duration-200"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <p className="font-dm-sans text-[11px] text-cream/85 tracking-wide">
          © {new Date().getFullYear()} Giulia Therapy. Tutti i diritti riservati.
        </p>
      </div>
    </footer>
  );
}
