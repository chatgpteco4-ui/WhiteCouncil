export default function WhiteCouncilLanding() {
  return (
    <div className="min-h-screen bg-[#0A1B33] text-white antialiased scroll-smooth">
      {/* NAVBAR */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-[#0A1B33]/70 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3 group">
            <div className="h-9 w-9 rounded-xl bg-white/5 ring-1 ring-white/15 grid place-items-center group-hover:ring-white/30 transition"><span className="font-black tracking-widest">WC</span></div>
            <div>
              <p className="text-lg font-semibold leading-none">WhiteCouncil</p>
              <p className="text-xs text-white/60 leading-none mt-1">Premium Academic Writing</p>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#services" className="hover:text-white/90 text-white/70">Services</a>
            <a href="#proof" className="hover:text-white/90 text-white/70">Proof</a>
            <a href="#pricing" className="hover:text-white/90 text-white/70">Pricing</a>
            <a href="#faq" className="hover:text-white/90 text-white/70">FAQ</a>
            <a href="#contact" className="hover:text-white/90 text-white/70">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="#contact" className="hidden sm:inline-flex px-4 py-2 rounded-xl bg-white text-[#0A1B33] font-semibold hover:opacity-90 transition">Get a Quote</a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.15),transparent_55%)]"/>
        <div className="mx-auto max-w-7xl px-4 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Elite Writing for <span className="underline decoration-white/20 underline-offset-8">Grades That Matter</span>
            </h1>
            <p className="mt-5 text-white/80 text-lg md:text-xl">
              From thesis statements to full coursework, WhiteCouncil delivers discreet, high-standard academic writing that reads like you—only better.
            </p>
            <ul className="mt-8 grid sm:grid-cols-2 gap-3 text-sm text-white/80">
              {[
                'Original & confidential (0% AI/Plagiarism flags)',
                'Harvard/APA/MLA citation mastery',
                'Finance, management, marketing specialists',
                'Urgent 24–72h turnaround options',
              ].map((x) => (
                <li key={x} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-white"/>
                  <span>{x}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href="#contact" className="px-6 py-3 rounded-2xl bg-white text-[#0A1B33] font-semibold hover:opacity-90 transition">Start Your Brief</a>
              <a href="#proof" className="px-6 py-3 rounded-2xl ring-1 ring-white/20 hover:ring-white/40 transition">See Proof</a>
            </div>
            <p className="mt-4 text-xs text-white/60">By proceeding, you confirm your use complies with your institution’s policies. We provide writing and editing assistance only.</p>
          </div>
          <div className="relative">
            <div className="relative rounded-3xl p-1 bg-gradient-to-br from-white/20 to-white/0">
              <div className="rounded-3xl bg-[#0E2546] p-6 ring-1 ring-white/10 shadow-2xl">
                <div className="grid grid-cols-2 gap-4 text-xs">
                  {[
                    {k:'Essays',v:'2,100+'},
                    {k:'Reports',v:'950+'},
                    {k:'Finance Models',v:'310+'},
                    {k:'Avg. Score',v:'80%+'},
                  ].map(({k,v})=> (
                    <div key={k} className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                      <p className="text-white/60">{k}</p>
                      <p className="text-xl font-bold">{v}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
                  <p className="text-sm text-white/80">“They turned my messy notes into a polished analysis with proper Harvard references. Deadline met. Zero stress.”</p>
                  <p className="mt-3 text-xs text-white/60">— WIUT Student, Tashkent</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-3xl bg-white/10 blur-2xl"/>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold">What We Do — Precisely</h2>
        <p className="mt-3 text-white/70 max-w-2xl">Structured, citation-ready documents that survive Turnitin and supervisor scrutiny. Built from credible sources, written in your tone.</p>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {[
            {
              t:'Essays & Reports',
              d:'Argument-led essays, literature reviews, reflective reports, and policy briefs aligned to your marking rubric.',
              b:['Harvard/APA/MLA','Primary & secondary research','Rubric mapping'],
            },
            {
              t:'Finance & Analytics',
              d:'Financial statements, ratio analysis, DCF, portfolio & risk analysis with clean spreadsheets and appendices.',
              b:['Excel models','Charts & visualizations','Reproducible calcs'],
            },
            {
              t:'Editing & Referencing',
              d:'Paraphrasing, structure surgery, and reference fixing that lifts clarity and credibility without changing your voice.',
              b:['Turnitin-safe rewrite','Proofreading','Reference clean-up'],
            },
          ].map((card)=> (
            <div key={card.t} className="rounded-3xl p-6 bg-white/5 ring-1 ring-white/10 hover:ring-white/30 transition">
              <h3 className="text-xl font-semibold">{card.t}</h3>
              <p className="mt-2 text-sm text-white/70">{card.d}</p>
              <ul className="mt-4 text-sm text-white/80 space-y-1">
                {card.b.map(x=> <li key={x} className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-white"/>{x}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* PROOF / PORTFOLIO */}
      <section id="proof" className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Proof of Excellence</h2>
            <p className="mt-3 text-white/70 max-w-2xl">Redacted samples that demonstrate structure, citations, and analytical depth. Full samples shared privately on request.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex px-4 py-2 rounded-xl ring-1 ring-white/20 hover:ring-white/40">Request Full Samples</a>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {[1,2,3].map(i=> (
            <div key={i} className="group rounded-3xl overflow-hidden ring-1 ring-white/10 hover:ring-white/30 transition bg-[#0E2546]">
              <div className="p-5">
                <div className="text-xs text-white/60">Case Study {i}</div>
                <h3 className="mt-2 font-semibold">Harvard-Style Report · 78 references</h3>
                <p className="mt-2 text-sm text-white/70">Executive summary, literature review, methodology, analysis, and appendices (tables, coding frameworks).</p>
              </div>
              <div className="h-40 bg-gradient-to-br from-white/10 to-transparent"/>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold">Transparent Pricing</h2>
        <p className="mt-3 text-white/70 max-w-2xl">Flexible for urgent deadlines. Final quotes depend on word count, complexity, and research depth.</p>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {[
            {title:'Edit & Polish',price:'$0.025/word',perk:['Grammar & clarity','Reference fix','Turnitin-safe rewrite']},
            {title:'Research & Write',price:'$0.049/word',perk:['Outline to final','Citations included','1 revision window']},
            {title:'Executive Plus',price:'Custom',perk:['Data analysis','Finance models','Priority delivery']},
          ].map((p,i)=> (
            <div key={p.title} className={`rounded-3xl p-6 ring-1 ring-white/10 bg-white/${i===1?"10":"5"} ${i===1?"shadow-2xl scale-[1.01]":""}`}>
              <div className="text-sm text-white/60">{p.title}</div>
              <div className="mt-2 text-3xl font-extrabold">{p.price}</div>
              <ul className="mt-4 text-sm text-white/80 space-y-1">
                {p.perk.map(x=> <li key={x} className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-white"/>{x}</li>)}
              </ul>
              <a href="#contact" className="mt-6 inline-flex px-4 py-2 rounded-xl bg-white text-[#0A1B33] font-semibold hover:opacity-90 transition">Get Quote</a>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs text-white/60">*We do not guarantee grades and do not accept exam or test-taking requests.</p>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold">What Students Say</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {[
            {n:'MDIST, Marketing',q:'From chaos to a sharp, referenced report. The rubric mapping was a lifesaver.'},
            {n:'WIUT, Finance',q:'DCF model + write-up were immaculate. Clear appendices and charts.'},
            {n:'Webster, Management',q:'They fixed my citations and structure without changing my tone. Perfect.'},
          ].map((t)=> (
            <div key={t.n} className="rounded-3xl p-6 bg-white/5 ring-1 ring-white/10">
              <p className="text-sm text-white/80">“{t.q}”</p>
              <p className="mt-3 text-xs text-white/60">— {t.n}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold">FAQ</h2>
        <div className="mt-6 divide-y divide-white/10 rounded-3xl ring-1 ring-white/10 bg-white/5">
          {[
            {q:'Is this ethical?',a:'We provide research, drafting, and editing to improve your understanding and presentation. You are responsible for compliance with your institution’s policies.'},
            {q:'Do you use AI to write?',a:'We use AI as a research and drafting assistant only when appropriate, but final deliverables are human-edited, style-matched, and citation-checked.'},
            {q:'What guarantees do you offer?',a:'We guarantee originality, formatting accuracy, and on-time delivery. Grades depend on marking and are not guaranteed.'},
            {q:'How fast can you deliver?',a:'Standard 3–7 days. Express 24–72h when feasible depending on scope.'},
          ].map((item, idx)=> (
            <details key={idx} className="group p-5 open:bg-white/5">
              <summary className="list-none cursor-pointer flex items-center justify-between">
                <span className="text-sm md:text-base font-medium">{item.q}</span>
                <span className="text-white/50 group-open:rotate-45 transition">+</span>
              </summary>
              <p className="mt-3 text-sm text-white/70">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Start Your Brief</h2>
            <p className="mt-3 text-white/70">Tell us your topic, deadline, word count, and referencing style. We’ll respond with a quote and timeline.</p>
            <div className="mt-6 rounded-3xl p-6 bg-white/5 ring-1 ring-white/10">
              {/* Formspree-powered form (server-friendly, no JS required) */}
              <form action="https://formspree.io/f/xnnzrlaw" method="POST" className="space-y-4">
                {/* Hidden fields for nicer inbox triage + anti-bot */}
                <input type="hidden" name="_subject" value="WhiteCouncil — New Quote Request" />
                <input type="hidden" name="source" value="Website Landing" />
                <input aria-hidden="true" tabIndex={-1} className="hidden" name="_gotcha" />

                <div className="grid sm:grid-cols-2 gap-4">
                  <input name="name" autoComplete="name" required placeholder="Your name" className="w-full px-4 py-3 rounded-xl bg-[#0E2546] ring-1 ring-white/10 outline-none focus:ring-white/40"/>
                  <input name="email" type="email" autoComplete="email" required placeholder="Email" className="w-full px-4 py-3 rounded-xl bg-[#0E2546] ring-1 ring-white/10 outline-none focus:ring-white/40"/>
                </div>

                <div className="grid sm:grid-cols-3 gap-4">
                  <input name="deadline" type="date" required className="w-full px-4 py-3 rounded-xl bg-[#0E2546] ring-1 ring-white/10 outline-none focus:ring-white/40"/>
                  <input name="words" type="number" inputMode="numeric" min={100} step={50} required placeholder="Word count" className="w-full px-4 py-3 rounded-xl bg-[#0E2546] ring-1 ring-white/10 outline-none focus:ring-white/40"/>
                  <input name="referencing" placeholder="Referencing (Harvard/APA/MLA)" className="w-full px-4 py-3 rounded-xl bg-[#0E2546] ring-1 ring-white/10 outline-none focus:ring-white/40"/>
                </div>

                <input name="telegram" placeholder="Telegram (optional)" className="w-full px-4 py-3 rounded-xl bg-[#0E2546] ring-1 ring-white/10 outline-none focus:ring-white/40"/>

                <textarea name="brief" required rows={5} placeholder="Brief: topic, learning outcomes, rubric, references to include" className="w-full px-4 py-3 rounded-xl bg-[#0E2546] ring-1 ring-white/10 outline-none focus:ring-white/40"/>

                <button type="submit" className="w-full px-6 py-3 rounded-2xl bg-white text-[#0A1B33] font-semibold hover:opacity-90 transition">Request Quote</button>
                <p className="text-xs text-white/60">Prefer Telegram? Message <span className="font-semibold">@WhiteCouncil</span></p>
              </form>
            </div>
          </div>
          <div className="space-y-6">
            <div className="rounded-3xl p-6 bg-white/5 ring-1 ring-white/10">
              <h3 className="font-semibold">Why We’re Different</h3>
              <ul className="mt-3 text-sm text-white/80 space-y-1">
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-white"/>Rubric-first approach: we map deliverables to your marking criteria.</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-white"/>Finance-grade analysis: models and appendices that make markers nod.</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-white"/>Confidential workflow and secure file handling.</li>
              </ul>
            </div>
            <div className="rounded-3xl p-6 bg-white/5 ring-1 ring-white/10">
              <h3 className="font-semibold">Operating Hours (Asia/Tashkent)</h3>
              <p className="mt-2 text-sm text-white/70">Mon–Sat: 10:00–21:00 · Sun: 12:00–18:00</p>
              <p className="mt-2 text-sm text-white/60">Average first response: 1–3 hours</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-12 grid md:grid-cols-3 gap-8 items-start">
          <div>
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-white/5 ring-1 ring-white/15 grid place-items-center"><span className="font-black tracking-widest">WC</span></div>
              <p className="font-semibold">WhiteCouncil</p>
            </div>
            <p className="mt-3 text-sm text-white/60">Discreet academic writing and editing. Built for results. Used responsibly.</p>
          </div>
          <div className="text-sm text-white/70 grid grid-cols-2 gap-2">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
          <div className="text-xs text-white/50">
            <p>© {new Date().getFullYear()} WhiteCouncil. All rights reserved.</p>
            <p className="mt-2">Privacy · Terms · Cookies</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
