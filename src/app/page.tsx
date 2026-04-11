export default function Page() {
  const stats = [
    { label: "Admin workload reduced", value: "Up to 40%" },
    { label: "Compliance visibility", value: "Real-time" },
    { label: "Coordination time saved", value: "5+ hrs/week" },
    { label: "Deployment timeline", value: "2–4 weeks" },
  ];

  const trustItems = [
    "Built for Australian aged care and NDIS operations",
    "Designed for practical rollout across frontline and management teams",
    "Supports structured documentation, oversight, and workflow consistency",
  ];

  const challenges = [
    {
      title: "Manual admin is consuming care time",
      text: "Teams are spending too much time on notes, incident follow-up, rostering coordination, and repetitive operational tasks.",
    },
    {
      title: "Compliance expectations are increasing",
      text: "Providers need stronger visibility, cleaner documentation, and more consistent processes across services, sites, and teams.",
    },
    {
      title: "Staff need support that fits reality",
      text: "Most teams do not need another system to learn. They need practical tools that reduce friction inside existing workflows.",
    },
  ];

  const capabilities = [
    {
      title: "Documentation and reporting assistance",
      text: "Help teams produce faster, more consistent case notes, shift summaries, internal reports, and follow-up documentation.",
    },
    {
      title: "Roster and scheduling support",
      text: "Reduce coordination load with clearer scheduling workflows, staffing visibility, and fewer manual handoffs across teams.",
    },
    {
      title: "Risk and compliance visibility",
      text: "Surface operational gaps earlier, standardise records, and give managers clearer oversight of compliance-sensitive workflows.",
    },
    {
      title: "Operational intelligence for managers",
      text: "Turn day-to-day activity into simple dashboards, summaries, and management reporting that support better decisions.",
    },
  ];

  const outcomes = [
    "Reduce administrative pressure so teams can focus more on residents and participants",
    "Improve consistency across aged care, disability, and broader healthcare operations",
    "Give managers clearer oversight without creating extra reporting burden",
    "Deploy AI in a controlled, human-centred way that supports existing service delivery",
  ];

  const steps = [
    {
      title: "Identify the highest-friction workflows",
      text: "We review where time is being lost across documentation, scheduling, reporting, compliance, and service coordination.",
    },
    {
      title: "Configure the solution around your operations",
      text: "The system is shaped to your service model, governance requirements, staff roles, and practical rollout constraints.",
    },
    {
      title: "Launch, support, and measure outcomes",
      text: "We introduce the workflow in a controlled way, then track impact across efficiency, consistency, and operational performance.",
    },
  ];

  const useCases = [
    {
      title: "Aged care providers",
      text: "Support residential, home care, and community teams with stronger documentation, coordination, and operational oversight.",
    },
    {
      title: "NDIS and disability services",
      text: "Streamline participant administration, team coordination, and service reporting while keeping delivery practical and consistent.",
    },
    {
      title: "Healthcare operations and management",
      text: "Give leadership teams better visibility into delivery workflows, operational risk, and performance across services.",
    },
  ];

  const logos = ["AGED CARE", "NDIS SERVICES", "HOME CARE", "COMMUNITY HEALTH", "DISABILITY SUPPORT"];

  const testimonials = [
    {
      quote:
        "This is the first AI workflow concept we have seen that actually feels usable for care operations, not just impressive in a demo.",
      name: "Operations Manager",
      org: "Australian care provider",
    },
    {
      quote:
        "The strongest part is the focus on reducing admin load without asking frontline teams to completely change how they work.",
      name: "Service Delivery Lead",
      org: "NDIS organisation",
    },
  ];

  const faqs = [
    {
      question: "Is this only for NDIS providers?",
      answer:
        "No. The solution is designed to work across aged care, NDIS, disability services, and adjacent healthcare operations. The messaging and workflows can be adapted to your environment.",
    },
    {
      question: "Will this replace frontline staff?",
      answer:
        "No. The goal is to reduce repetitive administrative load and improve operational visibility so staff can spend more time on care and service delivery.",
    },
    {
      question: "How hard is implementation?",
      answer:
        "The rollout is intended to be practical and staged. We start with the highest-impact workflows, align to your governance needs, and keep operational disruption low.",
    },
    {
      question: "Can this support compliance and reporting?",
      answer:
        "Yes. A core use case is improving documentation consistency, reporting structure, and oversight for managers and quality teams.",
    },
  ];

  return (
    <main className="bg-white pb-24 text-slate-900">
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.22),transparent_28%),radial-gradient(circle_at_left,rgba(14,165,233,0.16),transparent_25%)]" />
        <div className="relative mx-auto max-w-6xl px-6 pt-20 pb-16 lg:pt-28 lg:pb-24">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-sm font-medium text-blue-100 backdrop-blur">
                Enterprise-ready AI for Australian care and support services
              </p>
              <h1 className="mt-5 text-4xl font-semibold leading-tight text-white lg:text-6xl">
                Modernise aged care and NDIS operations without adding more complexity
              </h1>
              <p className="mt-5 max-w-3xl text-lg text-slate-300">
                A practical AI solution for aged care providers, NDIS operators, and healthcare teams looking to reduce administrative load, strengthen compliance visibility, and improve operational coordination.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className="rounded-xl bg-blue-500 px-6 py-3 text-center font-medium text-white shadow-lg shadow-blue-900/30 hover:bg-blue-400"
                >
                  Book a Demo
                </a>
                <a
                  href="#how"
                  className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-center font-medium text-white hover:bg-white/10"
                >
                  See How It Works
                </a>
              </div>
              <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {stats.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur"
                  >
                    <div className="text-2xl font-semibold text-white">{item.value}</div>
                    <div className="mt-1 text-xs text-slate-300">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/8 p-6 shadow-2xl backdrop-blur">
              <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
                <div className="text-sm font-medium uppercase tracking-[0.16em] text-blue-200">
                  Executive summary
                </div>
                <h3 className="mt-3 text-2xl font-semibold text-white">
                  Built for providers balancing care quality, workforce pressure, and compliance demands
                </h3>
                <div className="mt-6 grid gap-3">
                  {trustItems.map((item) => (
                    <div key={item} className="rounded-xl bg-white/5 p-4 text-slate-200">
                      {item}
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-sm text-slate-400">
                  <span>Balanced for aged care and NDIS</span>
                  <span>Human-centred rollout</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-6">
          <div className="grid gap-3 text-center text-xs font-semibold tracking-[0.18em] text-slate-400 sm:grid-cols-5">
            {logos.map((item) => (
              <div key={item} className="rounded-full border border-slate-200 bg-slate-50 px-4 py-3">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">The challenge</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 lg:text-4xl">
            The pressure is not just clinical. It is operational.
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Across aged care and disability services, providers are being asked to deliver better outcomes with tighter workforce capacity, more scrutiny, and heavier documentation demands.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {challenges.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">The solution</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 lg:text-4xl">
                An AI operating layer for care, compliance, and coordination
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Instead of replacing people, the platform supports staff and managers by making routine work faster, cleaner, and easier to oversee.
              </p>
              <div className="mt-10 grid gap-6 md:grid-cols-2">
                {capabilities.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-100"
                  >
                    <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                    <p className="mt-3 text-slate-600">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl bg-slate-900 p-8 text-white shadow-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-200">Expected outcomes</p>
              <h3 className="mt-3 text-2xl font-semibold">What better operations looks like</h3>
              <div className="mt-6 grid gap-4">
                {outcomes.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl bg-white/5 p-4">
                    <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-blue-500/20 text-sm text-blue-200">
                      ✓
                    </div>
                    <p className="text-slate-200">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="how" className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">How it works</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 lg:text-4xl">
            Start with operational pain points, then scale what works
          </h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-100 text-lg font-semibold text-blue-700">
                {index + 1}
              </div>
              <h3 className="mt-5 text-xl font-semibold text-slate-900">{step.title}</h3>
              <p className="mt-3 text-slate-600">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">Who it is for</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 lg:text-4xl">
              Balanced for aged care, NDIS, and broader healthcare operations
            </h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {useCases.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-7"
              >
                <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-6 lg:grid-cols-2">
            {testimonials.map((item) => (
              <div key={item.quote} className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-100">
                <p className="text-lg leading-8 text-slate-700">“{item.quote}”</p>
                <div className="mt-6">
                  <div className="font-semibold text-slate-900">{item.name}</div>
                  <div className="text-sm text-slate-500">{item.org}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">FAQ</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 lg:text-4xl">
              Common questions from care and support providers
            </h2>
          </div>
          <div className="mt-10 grid gap-4">
            {faqs.map((item) => (
              <div key={item.question} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-lg font-semibold text-slate-900">{item.question}</h3>
                <p className="mt-2 text-slate-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="rounded-[2rem] bg-blue-600 px-8 py-12 text-white shadow-2xl shadow-blue-900/30">
            <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-100">Next step</p>
                <h2 className="mt-3 text-3xl font-semibold">
                  See where AI can reduce friction in your care operations
                </h2>
                <p className="mt-3 text-blue-100">
                  We can help you identify the highest-impact use cases across aged care, NDIS, and healthcare administration, then shape a rollout plan that makes operational sense.
                </p>
              </div>
              <a
                href="#contact"
                className="rounded-xl bg-white px-6 py-3 font-medium text-blue-700 shadow hover:bg-blue-50"
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
              <h3 className="text-xl font-semibold text-white">
                AI solutions for Australian aged care and NDIS providers
              </h3>
              <p className="mt-3 text-slate-400">
                Designed for organisations that want better operational visibility, less administrative drag, and more time focused on service quality.
              </p>
              <div className="mt-4 text-slate-400">Contact: sydney@nextgenius.com.au</div>
              <div className="mt-2 text-xs text-slate-500">
                Privacy-first • Human-centred implementation • Operationally practical
              </div>
            </div>
            <form
              className="rounded-3xl bg-slate-800 p-6"
              action="mailto:sydney@nextgenius.com.au"
              method="post"
              encType="text/plain"
            >
              <h4 className="text-lg font-semibold text-white">Book a demo</h4>
              <div className="mt-4 grid gap-3">
                <input
                  name="Name"
                  className="rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white placeholder:text-slate-500"
                  placeholder="Name"
                />
                <input
                  name="Work email"
                  className="rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white placeholder:text-slate-500"
                  placeholder="Work email"
                />
                <input
                  name="Organisation"
                  className="rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white placeholder:text-slate-500"
                  placeholder="Organisation"
                />
                <button
                  type="submit"
                  className="rounded-lg bg-blue-600 px-4 py-3 text-white hover:bg-blue-700"
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

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
          <div>
            <div className="text-sm font-semibold text-slate-900">
              Ready to explore AI for aged care and NDIS operations?
            </div>
            <div className="text-xs text-slate-500">
              Book a walkthrough tailored to your workflow and team structure.
            </div>
          </div>
          <a
            href="#contact"
            className="shrink-0 rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white shadow hover:bg-blue-700"
          >
            Book a Demo
          </a>
        </div>
      </div>
    </main>
  );
}
