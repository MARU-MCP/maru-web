import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function HomeEn() {
  return (
    <>
      <Nav locale="en" />

      {/* Hero */}
      <section className="bg-gradient-to-br from-maru-50 to-white">
        <div className="container-narrow py-20 md:py-28">
          <div className="text-xs tracking-widest text-maru-600 uppercase mb-4">MARU · v1.1</div>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-maru-900 leading-tight">
            SI-grade<br/>
            <span className="text-maru-600">Governance-First Autonomous Collaboration</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-maru-900/75 max-w-2xl">
            <strong>Standardized work orders · enforced protocol injection · minimized context drift · interruption-resistant governance</strong>—
            agents collaborate autonomously while <strong>quantitative KPIs (reproducibility + requirement fulfillment)</strong> guarantee deliverable completeness.
            Each PL operates their own PMO agent and collaboration instance; PL-to-PL upper-level coordination scales across the full SI project.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#contact" className="px-5 py-3 rounded-md bg-maru-600 text-white font-medium hover:bg-maru-900 transition">Request Consultation</a>
            <a href="#features" className="px-5 py-3 rounded-md border border-maru-100 text-maru-900 hover:border-maru-400 hover:text-maru-600 transition">Explore Features</a>
          </div>
        </div>
      </section>

      {/* 4 Governance Principles */}
      <section id="features" className="bg-white">
        <div className="container-narrow py-20">
          <div className="text-xs tracking-widest text-maru-600 uppercase mb-2">GOVERNANCE PRINCIPLES</div>
          <h2 className="text-3xl md:text-4xl font-semibold text-maru-900">The Four Governance Principles</h2>
          <p className="mt-3 text-maru-900/70 max-w-2xl">Agent autonomy and decision consistency, guaranteed simultaneously.</p>

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <div className="p-7 rounded-xl border border-maru-100 bg-maru-50/40">
              <div className="text-sm font-semibold text-maru-600">01</div>
              <h3 className="mt-2 text-lg font-semibold text-maru-900">Standardized Work Orders</h3>
              <p className="mt-3 text-sm text-maru-900/70 leading-relaxed">
                Canonical 16-field envelope + WO type vocabulary + posting_ref discipline.
                <strong>Format-standardized dispatches</strong> prevent interpretation drift.
              </p>
            </div>
            <div className="p-7 rounded-xl border border-maru-100 bg-maru-50/40">
              <div className="text-sm font-semibold text-maru-600">02</div>
              <h3 className="mt-2 text-lg font-semibold text-maru-900">Enforced Protocol Injection</h3>
              <p className="mt-3 text-sm text-maru-900/70 leading-relaxed">
                Bootstrap re-injection per cycle + canonical_rule_refs + Ralph guardrails.
                Role principles and forbidden actions are <strong>re-injected every cycle</strong> to block drift accumulation.
              </p>
            </div>
            <div className="p-7 rounded-xl border border-maru-100 bg-maru-50/40">
              <div className="text-sm font-semibold text-maru-600">03</div>
              <h3 className="mt-2 text-lg font-semibold text-maru-900">Minimized Context Drift</h3>
              <p className="mt-3 text-sm text-maru-900/70 leading-relaxed">
                Closure honesty discipline + explicit state vocabulary + 14 forbidden actions.
                <strong>Overclaims and detour behaviors are explicitly blocked.</strong>
              </p>
            </div>
            <div className="p-7 rounded-xl border border-maru-100 bg-maru-50/40">
              <div className="text-sm font-semibold text-maru-600">04</div>
              <h3 className="mt-2 text-lg font-semibold text-maru-900">Interruption-Resistant Governance</h3>
              <p className="mt-3 text-sm text-maru-900/70 leading-relaxed">
                State machine integrity + chain custody (chain_id / parent_message_id / correlation_id) + lease TTL + retry budget.
                <strong>Mid-cycle abandonment is structurally prevented.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Soft + Hard Assets */}
      <section className="bg-maru-50/40">
        <div className="container-narrow py-20">
          <div className="text-xs tracking-widest text-maru-600 uppercase mb-2">CORE ASSETS</div>
          <h2 className="text-3xl md:text-4xl font-semibold text-maru-900">Soft + Hard Asset Architecture</h2>
          <p className="mt-3 text-maru-900/70 max-w-2xl">Hard assets are the infrastructure spine; soft assets are governance behavior contracts.</p>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white p-7 rounded-xl border border-maru-100">
              <h3 className="text-lg font-semibold text-maru-900">Soft Assets — Behavior Contracts (7)</h3>
              <ol className="mt-4 space-y-2 text-sm text-maru-900/80 list-decimal list-inside">
                <li>Per-role bootstrap</li>
                <li>Protocol injection</li>
                <li>Work-order template</li>
                <li>Compliance assurance</li>
                <li>Requirements transmission</li>
                <li>Deliverable production guide</li>
                <li>Reference info provision</li>
              </ol>
              <p className="mt-4 text-xs text-maru-900/60">Strengthened in V1.2 (Soft Asset Strengthening)</p>
            </div>
            <div className="bg-white p-7 rounded-xl border border-maru-100">
              <h3 className="text-lg font-semibold text-maru-900">Hard Assets — Infrastructure (3)</h3>
              <ul className="mt-4 space-y-3 text-sm text-maru-900/80">
                <li><strong className="text-maru-600">Platform layer model</strong> — 5-role topology (owner / sec / lab / dev / mgmt / stew) + worker runtime</li>
                <li><strong className="text-maru-600">Mailbox</strong> — PG-backed canonical state machine + audit log</li>
                <li><strong className="text-maru-600">Worktree</strong> — work_items state machine + chain context</li>
              </ul>
              <p className="mt-4 text-xs text-maru-900/60">Production-verified at V1.1</p>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section id="architecture" className="bg-maru-50/60">
        <div className="container-narrow py-20">
          <div className="text-xs tracking-widest text-maru-600 uppercase mb-2">ARCHITECTURE</div>
          <h2 className="text-3xl md:text-4xl font-semibold text-maru-900">High-Level Architecture</h2>

          <div className="grid md:grid-cols-2 gap-10 mt-12 items-start">
            <div>
              <h3 className="text-xl font-semibold text-maru-900">5-Role Canonical Model</h3>
              <ul className="mt-5 space-y-3 text-sm text-maru-900/80">
                <li><strong className="text-maru-600">owner</strong> — irreversible decisions · final authority</li>
                <li><strong className="text-maru-600">sec</strong> — PMO · dispatch · review · collaboration evidence</li>
                <li><strong className="text-maru-600">lab</strong> — framework · collaboration validation · fact extraction</li>
                <li><strong className="text-maru-600">dev</strong> — implementation facts · code paths · smokes</li>
                <li><strong className="text-maru-600">mgmt</strong> — operations · deployment · infrastructure evidence</li>
                <li><strong className="text-maru-600">stew</strong> — documentation · state · governance consistency</li>
              </ul>
              <p className="mt-6 text-sm text-maru-900/70">
                Each role operates on a defined mailbox, state machine, and gate model.
                What is allowed and what is forbidden is <strong>explicitly declared</strong>.
              </p>
            </div>
            <div className="bg-white rounded-xl border border-maru-100 p-6">
              <div className="text-xs text-maru-900/50 tracking-wide mb-3">Per-customer instance (operated by PL)</div>
              <pre className="text-[12px] leading-relaxed text-maru-900/85 overflow-x-auto">{`PL (customer-side Project Leader)
   │
   └─→ MARU instance (vendor-hosted)
         ├─ owner / sec / lab / dev / mgmt / stew
         ├─ mailbox + state machine + audit log
         ├─ Anthropic API (customer key in KV)
         └─ deliverables → customer GitHub repo

         ↑
         vendor consulting · hosting · canonical updates`}</pre>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section id="industries" className="bg-white">
        <div className="container-narrow py-20">
          <div className="text-xs tracking-widest text-maru-600 uppercase mb-2">INDUSTRIES</div>
          <h2 className="text-3xl md:text-4xl font-semibold text-maru-900">Target Industries</h2>
          <p className="mt-3 text-maru-900/70 max-w-2xl">Initial vertical: Internet e-commerce; medical / public / finance arrive as V1.5+ industry packs.</p>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="p-7 rounded-xl border-2 border-maru-600 bg-maru-50/40">
              <div className="inline-block text-[10px] tracking-widest text-maru-600 uppercase bg-white px-2 py-0.5 rounded">PRIMARY · V1.x</div>
              <h3 className="mt-3 text-lg font-semibold text-maru-900">E-Commerce</h3>
              <p className="mt-3 text-sm text-maru-900/70 leading-relaxed">
                Large-scale SI integration and operations automation. Transactional consistency
                across catalog, order, payment, settlement. <strong>Implementation-fact-collection POC over a legacy e-commerce system</strong> establishes
                K8 reproducibility and K9 requirement fulfillment baselines.
              </p>
              <p className="mt-3 text-xs text-maru-900/60">Regulations: PCI DSS · Korean PIPA / GDPR · 5-10 year audit retention</p>
            </div>
            <div className="p-7 rounded-xl border border-maru-100 opacity-80">
              <div className="inline-block text-[10px] tracking-widest text-maru-900/50 uppercase bg-maru-100 px-2 py-0.5 rounded">V1.5+ INDUSTRY PACK</div>
              <h3 className="mt-3 text-lg font-semibold text-maru-900">Medical / Finance</h3>
              <p className="mt-3 text-sm text-maru-900/70 leading-relaxed">
                EMR · LIS · PACS / financial settlement systems where fact collection and audit
                tracing are <strong>mandatory</strong>. Formally supported via V1.5+ compliance packs.
              </p>
            </div>
            <div className="p-7 rounded-xl border border-maru-100 opacity-80">
              <div className="inline-block text-[10px] tracking-widest text-maru-900/50 uppercase bg-maru-100 px-2 py-0.5 rounded">V1.5+ INDUSTRY PACK</div>
              <h3 className="mt-3 text-lg font-semibold text-maru-900">Public Sector / Manufacturing</h3>
              <p className="mt-3 text-sm text-maru-900/70 leading-relaxed">
                Public-sector SI · SM governance requirements (audit · security · change management) /
                manufacturing SI: industries where compliance is paramount.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section id="roadmap" className="bg-maru-50/60">
        <div className="container-narrow py-20">
          <div className="text-xs tracking-widest text-maru-600 uppercase mb-2">ROADMAP</div>
          <h2 className="text-3xl md:text-4xl font-semibold text-maru-900">V1.0 → V2.0 Trajectory</h2>
          <p className="mt-3 text-maru-900/70 max-w-2xl">Starts from single-agent governance; advances through industry packs to commercial release.</p>

          <div className="mt-12 space-y-4">
            {[
              { v: "V1.0", mark: "DECLARED", desc: "Single-agent governance foundation (Pillar 7a · lab-solo)" },
              { v: "V1.1", mark: "CURRENT", desc: "Multi-agent collab production foundation (Pillar 7b MET · Ralph · hard assets production-verified · soft assets v1 baseline)" },
              { v: "V1.2", mark: "~3-4 mo", desc: "Soft asset strengthening (7 items) · K9 requirement-fulfillment measurement framework · POC complete · first customer reference evidence" },
              { v: "V1.5", mark: "~6 mo", desc: "E-commerce industry pack (PCI DSS · PIPA · order-lifecycle vocabulary · compliance officer worker function) · PL dashboard" },
              { v: "V2.0", mark: "~9-12 mo", desc: "Commercial release · pricing/billing model · SLA · audit/compliance certifications · PMO Console hosted" },
              { v: "V2.x", mark: "future", desc: "Finance / medical / manufacturing industry packs · partner ecosystem" },
            ].map((r) => (
              <div key={r.v} className="flex items-start gap-4 p-5 bg-white rounded-lg border border-maru-100">
                <div className="flex-shrink-0 w-24 text-center">
                  <div className="text-lg font-semibold text-maru-600">{r.v}</div>
                  <div className="text-[10px] tracking-widest text-maru-900/60 mt-1">{r.mark}</div>
                </div>
                <div className="flex-1 text-sm text-maru-900/80 pt-1">{r.desc}</div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-maru-900/60">* Timeline is an estimate, not a commitment. KPI measurements depend on per-instance baseline.</p>
        </div>
      </section>

      {/* Evidence (sec validation) */}
      <section id="evidence" className="bg-maru-900 text-white">
        <div className="container-narrow py-20">
          <div className="text-xs tracking-widest text-maru-400 uppercase mb-2">COLLABORATION EVIDENCE</div>
          <h2 className="text-3xl md:text-4xl font-semibold">sec Validates Collaboration Effectiveness</h2>

          <div className="grid md:grid-cols-2 gap-12 mt-12">
            <div>
              <p className="text-white/80 leading-relaxed">
                MARU binds <strong className="text-white">audit-grade evidence</strong> to every dispatch, task, deliverable, and gate transition.
                The sec role measures and reports collaboration effectiveness
                (speed · accuracy · consistency · cost) on top of this evidence stream.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-white/70 list-disc list-inside">
                <li>request_id · audit_event_id bound to every message</li>
                <li>Role boundaries and forbidden actions explicitly declared</li>
                <li>Per-cycle evidence package automatically generated</li>
                <li>Owner gate transitions fully traced</li>
              </ul>
            </div>
            <div className="bg-white/5 rounded-xl border border-white/10 p-6">
              <div className="text-xs text-white/50 tracking-wide mb-3">KPI Framework — K1 to K10</div>
              <div className="space-y-3 text-sm">
                <div>
                  <div className="text-white/90 font-semibold">K1-K7 · Daemon autonomy + stability</div>
                  <div className="text-xs text-white/60 mt-1">Round-trip latency · escalation rate · chain integrity · idempotency · iteration completion</div>
                </div>
                <div className="pt-3 border-t border-white/10">
                  <div className="text-white/90 font-semibold">K8 · Reproducibility <span className="text-xs text-white/60">(V1.2+)</span></div>
                  <div className="text-xs text-white/60 mt-1">Same input → same output consistency · target &gt;90% (V2.0)</div>
                </div>
                <div className="pt-3 border-t border-white/10">
                  <div className="text-white/90 font-semibold">K9 · Requirements fulfillment <span className="text-xs text-white/60">(V1.2+)</span></div>
                  <div className="text-xs text-white/60 mt-1">Original-requirement addressed ratio · <strong>SI industry threshold &gt;95%</strong></div>
                </div>
                <div className="pt-3 border-t border-white/10">
                  <div className="text-white/90 font-semibold">K10 · Automated governance enforcement <span className="text-xs text-white/60">(V1.2+)</span></div>
                  <div className="text-xs text-white/60 mt-1">KPI miss → auto retry / escalation · zero manual intervention</div>
                </div>
              </div>
              <p className="text-[11px] text-white/40 mt-4">* KPIs measured per-instance after baseline.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Model */}
      <section className="bg-white">
        <div className="container-narrow py-20">
          <div className="text-xs tracking-widest text-maru-600 uppercase mb-2">SERVICE MODEL</div>
          <h2 className="text-3xl md:text-4xl font-semibold text-maru-900">Hosting + Consulting</h2>
          <p className="mt-3 text-maru-900/70 max-w-2xl">PL operates one collaboration instance; vendor provides upper-level consulting and hosting.</p>

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <div className="p-7 rounded-xl border border-maru-100 bg-maru-50/40">
              <h3 className="text-lg font-semibold text-maru-900">Customer holds</h3>
              <ul className="mt-4 space-y-2 text-sm text-maru-900/80 list-disc list-inside">
                <li>Anthropic API key</li>
                <li>GitHub output repository</li>
                <li>Instance owner authority (decision gates)</li>
                <li>Domain policy and collaboration decisions</li>
              </ul>
            </div>
            <div className="p-7 rounded-xl border border-maru-100 bg-maru-50/40">
              <h3 className="text-lg font-semibold text-maru-900">Vendor provides</h3>
              <ul className="mt-4 space-y-2 text-sm text-maru-900/80 list-disc list-inside">
                <li>Azure hosting (all infrastructure operations)</li>
                <li>Canonical template and updates</li>
                <li>Per-role protocols and safety guards</li>
                <li>Onboarding and operational consulting</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-gradient-to-br from-maru-600 to-maru-900 text-white">
        <div className="container-narrow py-20">
          <div className="text-xs tracking-widest text-white/60 uppercase mb-2">CONTACT</div>
          <h2 className="text-3xl md:text-4xl font-semibold">Request Consultation</h2>
          <p className="mt-3 text-white/80 max-w-2xl">
            For adoption review, pilot instance, or consulting inquiry. We respond within one business day.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="mailto:okt@stis.co.kr?subject=MARU+Inquiry"
               className="px-6 py-3 rounded-md bg-white text-maru-900 font-medium hover:bg-maru-50 transition">
              Email okt@stis.co.kr
            </a>
            <a href="https://github.com/MARU-MCP" target="_blank" rel="noreferrer"
               className="px-6 py-3 rounded-md border border-white/30 text-white hover:bg-white/10 transition">
              GitHub: MARU-MCP
            </a>
          </div>
        </div>
      </section>

      <Footer locale="en" />
    </>
  );
}
