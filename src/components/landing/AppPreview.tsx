import { MockBar, MockRow, PhoneMockup } from "./PhoneMockup";

export function AppPreview() {
  return (
    <section id="app" className="bg-maroon px-5 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="eyebrow">The Companion</p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-ivory sm:text-5xl">
            A Glimpse of Your Digital Yathra
          </h2>
          <p className="mt-5 text-lg text-ivory/70">
            Calm, uncluttered screens designed for devotees of every age.
          </p>
        </div>

        <div className="mt-14 flex gap-6 overflow-x-auto pb-6">
          <PhoneMockup title="Home Dashboard" className="lg:translate-y-4">
            <MockBar percent={60} label="Journey Progress" />
            <MockRow label="Vratham Day 10" value="41 days" tone="active" />
            <MockRow label="Next: Packing" />
            <MockRow label="Prayer of the day" />
          </PhoneMockup>

          <PhoneMockup title="Vratham Guide">
            <MockRow label="Morning routine" value="Done" tone="done" />
            <MockRow label="Evening prayer" value="Done" tone="done" />
            <MockRow label="Do's & Don'ts" />
            <MockBar percent={24} label="Vratham" />
          </PhoneMockup>

          <PhoneMockup title="Travel Planner" className="lg:translate-y-4">
            <MockRow label="Home → Pamba" value="Route A" tone="active" />
            <MockRow label="Transport" value="Bus" />
            <MockRow label="Checkpoints" value="4" />
            <MockRow label="Rest areas" value="6" />
          </PhoneMockup>

          <PhoneMockup title="Temple Guide">
            <MockRow label="Sabarimala" tone="active" />
            <MockRow label="Pamba" />
            <MockRow label="Sannidhanam" />
            <MockRow label="Nearby temples" value="12" />
          </PhoneMockup>

          <PhoneMockup title="Journey Progress" className="lg:translate-y-4">
            <MockRow label="Preparation" value="✓" tone="done" />
            <MockRow label="Vratham" value="✓" tone="done" />
            <MockRow label="Travel" value="In progress" tone="active" />
            <MockRow label="Sannidhanam" value="Upcoming" />
          </PhoneMockup>

          <PhoneMockup title="Emergency">
            <MockRow label="Emergency contacts" tone="active" />
            <MockRow label="Nearest hospital" />
            <MockRow label="Police" />
            <MockRow label="SOS / Help" />
          </PhoneMockup>
        </div>
        <p className="text-xs text-ivory/50">
          Illustrative previews of the companion experience.
        </p>
      </div>
    </section>
  );
}
