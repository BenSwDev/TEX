export default function Home() {
  return (
    <section className="space-y-8">
      <p className="text-sm uppercase tracking-[0.4em] text-white/70">Foundation</p>
      <div className="space-y-6">
        <h1 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
          TEX – Track Experience is our operating system for modular trip planning.
        </h1>
        <p className="max-w-3xl text-base text-white/70">
          Every screen we ship must respect the rules in <strong>DEV.md</strong>: App Router shell only,
          domain logic in feature modules, and shared capabilities inside Core. TEX connects attractions,
          food, shopping, timing, and geography into one AI-assisted flow that can grow without refactors.
        </p>
        <ul className="space-y-3 text-base text-white/80">
          <li>• App shell composes modules – it never owns business logic or data access.</li>
          <li>• Core exposes config, API clients, auth, UI primitives, hooks, utils.</li>
          <li>• Feature modules (Trip Planner, City Catalog, User Profile, AI Planner) export a single public surface.</li>
        </ul>
      </div>
      <div className="flex flex-wrap gap-4">
        <button className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:border-white hover:bg-white/10">
          Coming soon
        </button>
      </div>
    </section>
  );
}
