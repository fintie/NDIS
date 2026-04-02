export default function Page() {
  const stats = [
    { label: "Reporting time reduced", value: "Up to 50%" },
    { label: "Participant engagement", value: "+32%" },
    { label: "Session admin time saved", value: "4–6 hrs/week" },
    { label: "Pilot satisfaction", value: "4.8/5" },
  ];

  const problems = [
    {
      title: "Manual reporting is slow",
      text: "Clinicians spend hours after sessions on documentation, cutting into direct support time.",
    },
    {
      title: "Staff shortages & burnout",
      text: "High caseloads make consistency difficult and quality hard to maintain.",
    },
    {
      title: "Engagement varies by session",
      text: "Participants respond differently, making outcomes hard to measure and track.",
    },
  ];

  const problemImages = [
    {
      src: "https://images.pexels.com/photos/7580243/pexels-photo-7580243.jpeg?cs=srgb&dl=pexels-cottonbro-7580243.jpg&fm=jpg&w=2989&h=4484&_gl=1*g7w1h0*_ga*MTM1MTM5OTk0Ny4xNzc0MDUxMTQ0*_ga_8JE65Q40S6*czE3NzQwNTExNDMkbzEkZzEkdDE3NzQwNTExNTkkajQ0JGwwJGgw",
      alt: "Clinician documenting notes on a laptop",
    },
    {
      src: "https://images.pexels.com/photos/7088483/pexels-photo-7088483.jpeg?cs=srgb&dl=pexels-mart-production-7088483.jpg&fm=jpg&w=3936&h=2624&_gl=1*1mejzz8*_ga*MTM1MTM5OTk0Ny4xNzc0MDUxMTQ0*_ga_8JE65Q40S6*czE3NzQwNTExNDMkbzEkZzEkdDE3NzQwNTEyMDAkajMkbDAkaDA.",
      alt: "Healthcare staff reviewing records on a desktop",
    },
  ];

  const solutionImage = {
    src: "https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?cs=srgb&dl=pexels-cottonbro-7579831.jpg&fm=jpg&w=6483&h=4322&_gl=1*1t5jnct*_ga*MTM1MTM5OTk0Ny4xNzc0MDUxMTQ0*_ga_8JE65Q40S6*czE3NzQwNTExNDMkbzEkZzEkdDE3NzQwNTEyOTQkajQ2JGwwJGgw",
    alt: "Analytics dashboard showing measurable outcomes",
  };

  const benefits = [
    "Reduce reporting time by up to 50%",
    "Improve participant engagement with consistent support",
    "Generate measurable, audit‑ready outcomes",
    "Integrates into existing NDIS workflows",
  ];

  const features = [
    {
      title: "Booking management",
      text: "Centralise participant bookings with availability checks, confirmations, and automated reminders.",
    },
    {
      title: "Rostering management",
      text: "Balance workloads with skills‑based staff assignments, leave visibility, and compliance safeguards.",
    },
    {
      title: "Scheduling system",
      text: "Coordinate sessions, travel buffers, and recurring supports in one shared calendar.",
    },
    {
      title: "Budget prediction & management",
      text: "Track plan utilisation, forecast spend, and flag risks before budgets run tight.",
    },
  ];

  const steps = [
    {
      title: "Session with a companion",
      text: "Participants interact with a friendly robotic companion designed to encourage engagement and routine.",
    },
    {
      title: "AI observes & assists",
      text: "AI supports the session in real time, capturing relevant observations without disrupting care.",
    },
    {
      title: "NDIS‑compliant report",
      text: "A structured report is generated automatically, ready for clinical review and submission.",
    },
  ];

  const reportSections = [
    {
      title: "Participant Details",
      content:
        "Name: Jordan M. · NDIS # 4312‑090 · Session Date: 21 Mar 2026 · Duration: 55 min",
    },
    {
      title: "Session Goals",
      content:
        "Improve emotional regulation, increase verbal expression, and sustain attention for 15+ minutes.",
    },
    {
      title: "Observations",
      content:
        "Jordan maintained eye contact for 9/12 prompts, used 6 new emotion labels, and completed two sequencing tasks with minimal prompting.",
    },
    {
      title: "Engagement Score",
      content:
        "82/100 (↑ +18 from last session). Highest engagement observed during structured conversation prompts.",
    },
    {
      title: "Clinician Notes",
      content:
        "Recommend increasing peer‑interaction exercises next session. No adverse events recorded.",
    },
  ];

  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white">
        <div className="mx-auto max-w-6xl px-6 pt-20 pb-16 lg:pt-28 lg:pb-24">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
                NDIS-ready • Healthcare-grade
              </p>
              <h1 className="mt-5 text-4xl font-semibold leading-tight text-slate-900 lg:text-5xl">
                Improve participant outcomes while cutting reporting time in half
              </h1>
              <p className="mt-4 text-lg text-slate-600">
                An AI‑assisted support platform that boosts engagement, automates
                session reporting, and reduces administrative burden—without
                changing how your team delivers care.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#demo"
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
                    <div className="text-xl font-semibold text-slate-900">
                      {s.value}
                    </div>
                    <div className="text-xs text-slate-500">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative rounded-2xl bg-white p-6 shadow-xl ring-1 ring-slate-100">
              <h3 className="text-lg font-semibold text-slate-900">
                Outcome snapshot
              </h3>
              <ul className="mt-4 grid gap-3 text-slate-600">
                <li className="rounded-lg bg-slate-50 p-3">
                  82/100 engagement score with consistent weekly uplift
                </li>
                <li className="rounded-lg bg-slate-50 p-3">
                  Progress tracking aligned to participant goals
                </li>
                <li className="rounded-lg bg-slate-50 p-3">
                  Clinician‑reviewed, audit‑ready reporting
                </li>
              </ul>
              <div className="mt-4 flex items-center justify-between text-sm text-slate-500">
                <span>NDIS‑aligned outcomes</span>
                <span>Secure & compliant</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-semibold">The current system slows care</h2>
        <p className="mt-3 text-slate-600">
          Providers are stretched thin, and participants miss out when teams are
          overloaded by admin work.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {problems.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-slate-600">{p.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {problemImages.map((img) => (
            <div
              key={img.src}
              className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-64 w-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* SOLUTION */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-semibold">
            A simple, compliant support system
          </h2>
          <p className="mt-3 text-slate-600">
            Combine AI‑assisted support, gentle robotic interaction, and
            automated reporting—so your clinicians can focus on people, not
            paperwork.
          </p>
          <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="grid gap-6">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
                <h3 className="text-lg font-semibold">Designed for outcomes</h3>
                <p className="mt-2 text-slate-600">
                  Consistent engagement and structured data help demonstrate
                  measurable progress over time.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
                <h3 className="text-lg font-semibold">Built for compliance</h3>
                <p className="mt-2 text-slate-600">
                  Reports follow NDIS documentation expectations and are ready for
                  clinical review.
                </p>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">
              <img
                src={solutionImage.src}
                alt={solutionImage.alt}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-semibold">How it works</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <div
              key={s.title}
              className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-700 font-semibold">
                {i + 1}
              </div>
              <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-slate-600">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-semibold">Key benefits</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {benefits.map((b) => (
              <div
                key={b}
                className="flex items-start gap-3 rounded-xl border border-slate-100 p-4"
              >
                <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-sm text-green-700">
                  ✓
                </div>
                <p className="text-slate-700">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OPERATIONS */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-semibold">Operations suite</h2>
          <p className="mt-3 text-slate-600">
            Run your day‑to‑day delivery with integrated booking, rostering,
            scheduling, and budget intelligence.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-slate-600">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEMO */}
      <section id="demo" className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-semibold">See it in action</h2>
              <p className="mt-3 text-slate-600">
                Watch a short demo or request a pilot program tailored to your
                team’s workflow.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className="rounded-xl bg-blue-600 px-6 py-3 text-center text-white shadow hover:bg-blue-700"
                >
                  Contact Us
                </a>
                <a
                  href="#cta"
                  className="rounded-xl border border-slate-300 px-6 py-3 text-center text-slate-700 hover:border-slate-400"
                >
                  Request Pilot
                </a>
              </div>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
              <h3 className="text-lg font-semibold text-slate-900">Demo highlights</h3>
              <ul className="mt-4 grid gap-3 text-slate-600">
                <li className="rounded-lg bg-slate-50 p-3">
                  Live session prompts tailored to participant goals
                </li>
                <li className="rounded-lg bg-slate-50 p-3">
                  Real‑time notes and structured observations
                </li>
                <li className="rounded-lg bg-slate-50 p-3">
                  Auto‑generated NDIS report ready for review
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SAMPLE REPORT */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-semibold">Sample NDIS‑style report</h2>
        <p className="mt-3 text-slate-600">
          Automatically generated, structured, and ready for clinical review.
        </p>
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="grid gap-4">
            {reportSections.map((r) => (
              <div key={r.title} className="rounded-xl bg-slate-50 p-4">
                <div className="text-sm font-semibold text-slate-700">
                  {r.title}
                </div>
                <div className="mt-1 text-slate-600">{r.content}</div>
              </div>
            ))}
          </div>
          <div className="mt-4 text-xs text-slate-500">
            Note: All data shown is illustrative and aligned to NDIS reporting
            standards.
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="bg-blue-600">
        <div className="mx-auto max-w-6xl px-6 py-16 text-white">
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            <div>
              <h2 className="text-3xl font-semibold">
                Start your pilot program
              </h2>
              <p className="mt-2 text-blue-100">
                We’ll help you launch quickly and measure impact from week one.
              </p>
            </div>
            <a
              href="#contact"
              className="rounded-xl bg-white px-6 py-3 text-blue-700 shadow hover:bg-blue-50"
            >
              Start Your Pilot Program
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER / CONTACT */}
      <footer id="contact" className="bg-slate-900 text-slate-200">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-xl font-semibold text-white">
                AI‑powered NDIS support
              </h3>
              <p className="mt-3 text-slate-400">
                Built for providers, therapy centres, and support coordinators
                to deliver better outcomes with less admin burden.
              </p>
              <div className="mt-4 text-slate-400">
                Contact: sydney@nextgenius.com.au
              </div>
              <div className="mt-2 text-xs text-slate-500">
                Privacy‑first • NDIS‑compliant workflows • Secure data handling
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
                By submitting, you agree to our privacy policy and data handling
                practices.
              </p>
            </form>
          </div>
        </div>
      </footer>
    </main>
  );
}
