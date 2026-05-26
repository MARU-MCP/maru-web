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
            Agent Collaboration<br/>
            <span className="text-maru-600">Governance Platform</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-maru-900/75 max-w-2xl">
            Goal-directed multi-agent collaboration grounded in <strong>system facts</strong> and guided by precise protocols.
            Built for industrial applications including System Integration and System Management.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#contact" className="px-5 py-3 rounded-md bg-maru-600 text-white font-medium hover:bg-maru-900 transition">Request Consultation</a>
            <a href="#features" className="px-5 py-3 rounded-md border border-maru-100 text-maru-900 hover:border-maru-400 hover:text-maru-600 transition">Explore Features</a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="bg-white">
        <div className="container-narrow py-20">
          <div className="text-xs tracking-widest text-maru-600 uppercase mb-2">FEATURES</div>
          <h2 className="text-3xl md:text-4xl font-semibold text-maru-900">Three Pillars of Goal-Directed Collaboration</h2>
          <p className="mt-3 text-maru-900/70 max-w-2xl">Agents make decisions on <strong>evidence</strong>, not assumptions.</p>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="p-7 rounded-xl border border-maru-100 bg-maru-50/40">
              <div className="w-10 h-10 rounded-md bg-maru-600/10 flex items-center justify-center text-maru-600 font-bold">F</div>
              <h3 className="mt-5 text-lg font-semibold text-maru-900">System Fact Collection</h3>
              <p className="mt-3 text-sm text-maru-900/70 leading-relaxed">
                Automatically collect <strong>on-the-ground facts</strong> — code, infrastructure, operations data —
                so agents work from evidence, never guesses.
              </p>
            </div>
            <div className="p-7 rounded-xl border border-maru-100 bg-maru-50/40">
              <div className="w-10 h-10 rounded-md bg-maru-600/10 flex items-center justify-center text-maru-600 font-bold">G</div>
              <h3 className="mt-5 text-lg font-semibold text-maru-900">Precise Guidance</h3>
              <p className="mt-3 text-sm text-maru-900/70 leading-relaxed">
                Per-role workflows, safety guards, and decision gates
                <strong>narrow the path</strong> to consistent, predictable outputs.
              </p>
            </div>
            <div className="p-7 rounded-xl border border-maru-100 bg-maru-50/40">
              <div className="w-10 h-10 rounded-md bg-maru-600/10 flex items-center justify-center text-maru-600 font-bold">C</div>
              <h3 className="mt-5 text-lg font-semibold text-maru-900">Evidence-Bound Collaboration</h3>
              <p className="mt-3 text-sm text-maru-900/70 leading-relaxed">
                Every decision and deliverable is bound to <strong>audit-grade evidence</strong>,
                making collaboration effectiveness traceable and verifiable.
              </p>
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
          <p className="mt-3 text-maru-900/70 max-w-2xl">Strongest fit where fact-based collaboration and audit trails are essential.</p>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="p-7 rounded-xl border border-maru-100">
              <h3 className="text-lg font-semibold text-maru-900">E-Commerce</h3>
              <p className="mt-3 text-sm text-maru-900/70 leading-relaxed">
                Large-scale system integration and operations automation. Agents monitor and reconcile
                consistency across catalog, order, payment, and settlement systems.
              </p>
            </div>
            <div className="p-7 rounded-xl border border-maru-100">
              <h3 className="text-lg font-semibold text-maru-900">Medical Information</h3>
              <p className="mt-3 text-sm text-maru-900/70 leading-relaxed">
                EMR · LIS · PACS and other multi-system contexts where fact collection
                and audit tracing are <strong>mandatory</strong>. Every output evidence-bound.
              </p>
            </div>
            <div className="p-7 rounded-xl border border-maru-100">
              <h3 className="text-lg font-semibold text-maru-900">Public Services</h3>
              <p className="mt-3 text-sm text-maru-900/70 leading-relaxed">
                Public-sector SI · SM governance requirements (audit · security · change management)
                directly served via explicit decision gates and evidence trails.
              </p>
            </div>
          </div>
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
              <div className="text-xs text-white/50 tracking-wide mb-3">Evidence outcomes (illustrative)</div>
              <div className="grid grid-cols-2 gap-4">
                <div><div className="text-3xl font-semibold">3-5×</div><div className="text-xs text-white/60 mt-1">throughput via agent collaboration</div></div>
                <div><div className="text-3xl font-semibold">100%</div><div className="text-xs text-white/60 mt-1">audit-bound evidence coverage</div></div>
                <div><div className="text-3xl font-semibold">0</div><div className="text-xs text-white/60 mt-1">off-goal outputs (guided)</div></div>
                <div><div className="text-3xl font-semibold">Live</div><div className="text-xs text-white/60 mt-1">state · gate visibility</div></div>
              </div>
              <p className="text-[11px] text-white/40 mt-4">* Numbers are illustrative; actual metrics measured per instance.</p>
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
