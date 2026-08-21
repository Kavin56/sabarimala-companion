import ctaImage from "@/assets/final-cta.jpg";

export function FinalCTA() {
  return (
    <section id="about" className="relative flex min-h-[85vh] items-center overflow-hidden px-5">
      <img
        src={ctaImage}
        alt="Evening view of a lamplit hill shrine and pilgrims on a forest path in Kerala"
        loading="lazy"
        width={1920}
        height={1088}
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-maroon/85 via-ink/75 to-maroon/90" />

      <div className="relative mx-auto max-w-3xl py-24 text-center">
        <p className="eyebrow">Swamiye Saranam Ayyappa</p>
        <h2 className="mt-6 font-display text-4xl leading-tight text-ivory sm:text-6xl">
          Your Yathra Begins at Home.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-ivory/75">
          Walk toward Sannidhanam with guidance at every step.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="/login"
            className="w-full rounded-full bg-devotional px-8 py-4 text-sm font-semibold text-ivory shadow-warm transition-all duration-300 hover:-translate-y-0.5 hover:bg-saffron hover:shadow-gold sm:w-auto"
          >
            Begin Your Yathra
          </a>
          <a
            href="#journey"
            className="w-full rounded-full border border-gold/60 px-8 py-4 text-sm font-semibold text-gold transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold/10 sm:w-auto"
          >
            Explore the Journey
          </a>
        </div>

        <p className="mt-14 font-display text-xl text-gold-warm">
          Sri Sri Shabharish Guruji Ayyappa Yathra
        </p>
      </div>
    </section>
  );
}
