import { WifiOff } from "lucide-react";
import { MockRow, PhoneMockup } from "./PhoneMockup";

const labels = ["Saved Guidance", "Checklists", "Favorites", "Important Information"];

export function OfflineSection() {
  return (
    <section className="bg-cream px-5 py-24 lg:py-32">
      <div className="mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-2">
        <div>
          <span className="grid size-11 place-items-center rounded-full bg-maroon/10 text-maroon">
            <WifiOff className="size-5" aria-hidden="true" />
          </span>
          <h2 className="mt-5 font-display text-4xl leading-tight text-maroon sm:text-[2.75rem]">
            Your Essential Guidance, Even Offline
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-foreground/75">
            Save essential guidance, checklists and selected information before you begin your
            journey.
          </p>
          <ul className="mt-7 flex flex-wrap gap-2.5">
            {labels.map((l) => (
              <li
                key={l}
                className="rounded-full border border-border bg-ivory px-4 py-2 text-sm font-medium text-maroon"
              >
                {l}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center md:justify-end">
          <PhoneMockup title="Saved Offline">
            <MockRow label="Vratham daily routine" value="Saved" tone="done" />
            <MockRow label="Packing checklist" value="Saved" tone="done" />
            <MockRow label="Temple guide" value="Saved" tone="done" />
            <MockRow label="Favorites" value="8" tone="active" />
            <MockRow label="Emergency numbers" value="Saved" tone="done" />
          </PhoneMockup>
        </div>
      </div>
    </section>
  );
}
