export default function Page() {
  const faqs = [
    {
      q: "How does it detect revenue leaks?",
      a: "We connect to your Shopify Admin API via OAuth and analyze checkout sessions, payment attempts, and cart events to surface patterns that cost you money.",
    },
    {
      q: "Is my store data safe?",
      a: "We request read-only Shopify scopes, never store raw order data, and all analysis results are encrypted at rest.",
    },
    {
      q: "What if I want to cancel?",
      a: "Cancel anytime from your billing portal. No contracts, no questions asked.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          For Shopify stores doing $10k+/mo
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
          Find the hidden revenue your{" "}
          <span className="text-[#58a6ff]">Shopify store is leaking</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Connect your store in 60 seconds. We analyze failed payments, cart
          abandonment patterns, and checkout friction — then give you a
          prioritized fix list with estimated revenue recovery.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-4 rounded-lg text-base transition-colors"
        >
          Start detecting leaks — $19/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">Cancel anytime. 7-day free trial.</p>

        {/* Social proof bar */}
        <div className="mt-14 grid grid-cols-3 gap-6 border border-[#30363d] rounded-xl bg-[#161b22] p-6">
          {[
            { stat: "$2.4M+", label: "Revenue recovered" },
            { stat: "340+", label: "Stores analyzed" },
            { stat: "18 min", label: "Avg. time to first insight" },
          ].map(({ stat, label }) => (
            <div key={label}>
              <div className="text-2xl font-bold text-[#58a6ff]">{stat}</div>
              <div className="text-xs text-[#6e7681] mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="border border-[#30363d] rounded-2xl bg-[#161b22] p-8 text-center">
          <div className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">
            Pro Plan
          </div>
          <div className="text-5xl font-bold text-white mb-1">$19</div>
          <div className="text-[#6e7681] text-sm mb-6">per month · billed monthly</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited leak scans",
              "Failed payment recovery analysis",
              "Cart abandonment pattern detection",
              "Checkout friction heatmap",
              "Prioritized fix recommendations",
              "Weekly email digest",
              "Slack alerts for new leaks",
            ].map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm">
                <span className="text-[#3fb950] mt-0.5">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg text-sm transition-colors"
          >
            Start free trial
          </a>
          <p className="mt-3 text-xs text-[#6e7681]">7 days free, then $19/mo. Cancel anytime.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Frequently asked questions</h2>
        <div className="space-y-6">
          {faqs.map(({ q, a }) => (
            <div key={q} className="border border-[#30363d] rounded-xl bg-[#161b22] p-6">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-sm text-[#8b949e] leading-relaxed">{a}</div>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-[#6e7681] mt-12">
          © {new Date().getFullYear()} Revenue Leak Detector · Not affiliated with Shopify Inc.
        </p>
      </section>
    </main>
  );
}
