export default function Page() {
  const stats = [
    { label: "Admin time reduced", value: "Up to 40%" },
    { label: "Compliance visibility", value: "Real-time" },
    { label: "Roster coordination saved", value: "5+ hrs/week" },
    { label: "Implementation timeline", value: "2–4 weeks" },
  ];

  const challenges = [
    {
      title: "Too much manual admin",
      text: "Care teams are spending too much time on notes, rosters, incident follow-up, and repetitive coordination work.",
    },
    {
      title: "Compliance pressure keeps rising",
      text: "Providers need clearer documentation, better visibility, and more consistent processes across teams and sites.",
    },
    {
      title: "Staff need support, not more systems",
      text: "Frontline workers and managers need practical tools that fit existing workflows instead of adding complexity.",
    },
  ];

  const capabilities = [
    {
      title: "AI documentation assistance",
      text: "Turn case notes, shift summaries, and recurring admin tasks into faster, more structured workflows.",
    },
    {
      title: "Roster and scheduling support",
      text: "Reduce coordination overhead with smarter scheduling, workload visibility, and fewer manual handoffs.",
    },
    {
      title: "Risk and compliance monitoring",
      text: "Surface gaps early, standardise records, and give managers clearer oversight across operations.",
    },
    {
      title: "Operational reporting",
      text: "Generate simple dashboards and summaries for leadership, quality teams, and service managers.",
    },
  ];

  const outcomes = [
    "Reduce admin pressure so staff can focus more on care",
    "Improve documentation consistency across sites and teams",
    "Support aged care, NDIS, and healthcare operations with practical AI workflows",
    "Deploy with minimal disruption to existing processes",
  ];

  const steps = [
    {
      title: "Review your current workflow",
      text: "We map where your teams are losing time across documentation, rostering, reporting, and compliance tasks.",
    },
    {
      title: "Configure the AI solution",
      text: "We tailor the system to your operational model, staff roles, and governance requirements.",
    },
    {
      title: "Launch and measure impact",
      text: "Roll out in a controlled way, then track time saved, workflow improvements, and operational outcomes.",
    },
  ];

  const useCases = [
    {
      title: "Aged care providers",
      text: "Support residential, community, and home care teams with better documentation, coordination, and oversight.",
    },
    {
      title: "NDIS operators",
      text: "Streamline participant administration, staff scheduling, and reporting processes while maintaining service quality.",
    },
    {
      title: "Healthcare managers",
      text: "Give leadership teams clearer operational visibility and less friction across day-to-day delivery.",
    },
  ];

  return (
    <main className="bg-white text-slate-900">
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white">
        <div className="mx-auto max-w-6xl px-6 pt-20 pb-16 lg:pt-28 lg:pb-24">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
                Built for Australian care providers
              </p>
              <h1 className="mt-5 text-4xl font-semibold leading-tight text-slate-900 lg:text-5xl">
                AI support for aged care teams, NDIS providers, and healthcare operations
              </h1>
              <p className="mt-4 text-lg text-slate-600">
                Reduce admin pressure, improve compliance visibility, and give teams more time to focus on care. Designed for Australian providers who need practical AI, not more complexity.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className="rounded-xl bg-blue-600 px-6 py-3 text-center text-white shadow hover:bg-blue-700"
                >
                  Book a Demo
                </a>
                <a
                  href="#how"
                  className="rounded-xl border border-slate-300 px-6 py-3 text-center text-slate-700 hover:border-slate-400"
                >
                  See How It Works
                </a>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-lg bg-white p-3 shadow-sm ring-1 ring-slate-100"
                  >
                    <div className="text-xl font-semibold text-slate-900">{s.value}</div>
                    <div className="text-xs text-slate-500">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative rounded-2xl bg-white p-6 shadow-xl ring-1 ring-slate-100">
              <h3 className="text-lg font-semibold text-slate-900">What this helps with</h3>
              <ul className="mt-4 grid gap-3 text-slate-600">
                <li className="rounded-lg bg-slate-50 p-3">Faster documentation and internal reporting</li>
                <li className="rounded-lg bg-slate-50 p-3">Smarter scheduling and operational coordination</li>
                <li className="rounded-lg bg-slate-50 p-3">Better compliance visibility for managers</li>
              </ul>
              <div className="mt-4 flex items-center justify-between text-sm text-slate-500">
                <span>Australian providers</span>
                <span>Secure workflow design</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-semibold">The problem isn’t care, it’s the operational load</h2>
        <p className="mt-3 max-w-3xl text-slate-600">
          Aged care and disability teams are under constant pressure to do more with less. Admin, coordination, and compliance work keep pulling time away from residents, participants, and staff support.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {challenges.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div>
              <h2 className="text-3xl font-semibold">A practical AI layer for care operations</h2>
              <p className="mt-3 text-slate-600">
                This solution helps providers automate repetitive work, standardise documentation, and improve operational decision-making without replacing frontline staff.
              </p>
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                {capabilities.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100"
                  >
                    <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                    <p className="mt-2 text-slate-600">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
              <h3 className="text-lg font-semibold text-slate-900">Why providers care</h3>
              <div className="mt-4 grid gap-4">
                {outcomes.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-xl bg-slate-50 p-4">
                    <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-sm text-green-700">
                      ✓
                    </div>
                    <p className="text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="how" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-semibold">How it works</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-700">
                {index + 1}
              </div>
              <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-slate-600">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-semibold">Who it’s for</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {useCases.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-100 bg-slate-50 p-6"
              >
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="rounded-3xl bg-blue-600 px-8 py-12 text-white">
            <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-semibold">Ready to modernise care operations?</h2>
                <p className="mt-3 text-blue-100">
                  We help providers identify the highest-impact workflows first, then roll out AI support in a safe and practical way.
                </p>
              </div>
              <a
                href="#contact"
                className="rounded-xl bg-white px-6 py-3 text-blue-700 shadow hover:bg-blue-50"
              >
                Book a Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" className="bg-slate-900 text-slate-200">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-xl font-semibold text-white">AI solutions for Australian care providers</h3>
              <p className="mt-3 text-slate-400">
                Built for teams that want less admin, clearer oversight, and better day-to-day operations across aged care, NDIS, and healthcare delivery.
              </p>
              <div className="mt-4 text-slate-400">Contact: sydney@nextgenius.com.au</div>
              <div className="mt-2 text-xs text-slate-500">
                Privacy-first • Human-centred implementation • Operationally practical
              </div>
            </div>
            <form
              className="rounded-2xl bg-slate-800 p-6"
              action="mailto:sydney@nextgenius.com.au"
              method="post"
              encType="text/plain"
            >
              <h4 className="text-lg font-semibold text-white">Book a demo</h4>
              <div className="mt-4 grid gap-3">
                <input
                  name="Name"
                  className="rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-white placeholder:text-slate-500"
                  placeholder="Name"
                />
                <input
                  name="Work email"
                  className="rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-white placeholder:text-slate-500"
                  placeholder="Work email"
                />
                <input
                  name="Organisation"
                  className="rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-white placeholder:text-slate-500"
                  placeholder="Organisation"
                />
                <button
                  type="submit"
                  className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                >
                  Book a Demo
                </button>
              </div>
              <p className="mt-3 text-xs text-slate-500">
                By submitting, you agree to our privacy policy and data handling practices.
              </p>
            </form>
          </div>
        </div>
      </footer>
    </main>
  );
}
