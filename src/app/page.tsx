export default function Home() {
  return (
    <section className="space-y-8">
      <p className="text-sm uppercase tracking-[0.4em] text-white/70">דף הבית הראשי</p>
      <div className="space-y-6">
        <h1 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
          מרכז השליטה החכם עבור כל תהליכי ה-AI בארגון שלך.
        </h1>
        <p className="max-w-2xl text-base text-white/70">
          מכאן נבנה את חוויית השירות החדשה של ה-AI Help Center – החל ממודולים תפעוליים ועד מנגנוני
          אבטחה ורמות הרשאה. כל דף עתידי ירש את ה-layout החדש כך שהמשתמשים שלך יקבלו חוויה אחידה
          ועקבית.
        </p>
      </div>
      <div className="flex flex-wrap gap-4">
        <button className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:border-white hover:bg-white/10">
          Coming soon
        </button>
      </div>
    </section>
  );
}
