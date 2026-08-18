import Link from "next/link";

const features = [
  {
    href: "/standings",
    title: "Standings",
    description:
      "Team rankings by division, with full player stats. Auto updates every Friday. Live now.",
    available: true,
  },
  {
    href: "/leaders",
    title: "Leaderboard",
    description: "Top players across every stat PPD, MPR, tons, and more.",
    available: false,
  },
  {
    href: "/schedule",
    title: "Schedule",
    description: "Upcoming matches and past results, week by week.",
    available: false,
  },
];

export default function Home() {
  return (
    <div className="py-16">
      {/* Hero */}
      <section className="mb-16 text-center">
        <p className="mb-3 font-mono text-sm uppercase tracking-widest text-red-500 pb-10">
          Derrick Music Dart League
        </p>
        <div className="mt-8 flex justify-center gap-3 pb-10">
          <p>
            Built by Jeremy Francis - I got tired of finding the different links
            on facebook. Plan to make this a one-stop shop.
          </p>
        </div>
      </section>

      {/* Feature cards */}
      <section className="grid gap-4 sm:grid-cols-3">
        {features.map((f) => {
          const card = (
            <div
              className={`h-full rounded-lg border border-neutral-800 p-6 transition-colors ${
                f.available
                  ? "hover:border-neutral-600 hover:bg-neutral-900"
                  : "opacity-60"
              }`}
            >
              <div className="mb-2 flex items-center justify-between">
                <h2 className="font-semibold text-white">{f.title}</h2>
                {!f.available && (
                  <span className="rounded bg-neutral-800 px-2 py-0.5 text-xs text-neutral-400">
                    Soon
                  </span>
                )}
              </div>
              <p className="text-sm text-neutral-400">{f.description}</p>
            </div>
          );

          // Available features link; "soon" ones are just static cards
          return f.available ? (
            <Link key={f.href} href={f.href}>
              {card}
            </Link>
          ) : (
            <div key={f.href}>{card}</div>
          );
        })}
      </section>
    </div>
  );
}
