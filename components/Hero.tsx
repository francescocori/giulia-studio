import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[120vh] flex items-center justify-center overflow-hidden rounded-b-[5%]">
      {/* Background image */}
      <Image
        src="/images/heroImage.png"
        alt="Calm therapy setting"
        fill
        priority
        className="object-cover"
      />

      {/* Warm cream overlay */}
      <div
        className="absolute inset-0 z-10"
        style={{ backgroundColor: "rgba(250, 246, 238, 0.25)" }}
      />

      {/* Frosted glass card */}
      <div className="relative z-20 mx-6 animate-fade-in">
        <div className=" backdrop-blur-xs rounded-[64px] px-12 py-14 max-w-md text-center mb-[30%] lg:mb-[40%]">
          {/* Eyebrow */}
          <p className="font-dm-sans text-xs tracking-[0.2em] uppercase text-sage mb-6">
            Terapia &amp; Benessere
          </p>

          {/* Heading */}
          <h1 className="font-cormorant text-5xl font-semibold text-forest leading-tight mb-6">
            Guarire non è sempre un percorso{" "}
            <em className="italic text-rose">lineare.</em>
          </h1>

          {/* Subheading */}
          <p className="font-dm-sans text-sm leading-relaxed text-forest/70 mb-8">
            Non devi affrontarlo da solo. La terapia è uno spazio per
            rallentare, ritrovarti e trovare la tua strada.
          </p>

          {/* CTA */}
          <a
            href="#contact"
            className="inline-block font-dm-sans text-sm text-cream bg-sage rounded-full px-7 py-3 transition-all duration-200 hover:bg-forest"
          >
            Prenota una chiamata gratuita
          </a>
        </div>
      </div>
    </section>
  );
}
