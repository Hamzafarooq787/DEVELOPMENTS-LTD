"use client";

import { useEffect, useState, useRef } from "react";

export default function Home() {
  // Counter state
  const [counts, setCounts] = useState({ years: 0, projects: 0, safety: 0, engineers: 0 });
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef<HTMLElement>(null);

  // Accordion state
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          // Animate counters
          const duration = 2000;
          const stepTime = 20;
          const targets = { years: 15, projects: 250, safety: 100, engineers: 45 };
          const startTime = performance.now();

          const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(1, elapsed / duration);
            setCounts({
              years: Math.floor(progress * targets.years),
              projects: Math.floor(progress * targets.projects),
              safety: Math.floor(progress * targets.safety),
              engineers: Math.floor(progress * targets.engineers),
            });
            if (progress < 1) requestAnimationFrame(animate);
            else {
              setCounts({
                years: targets.years,
                projects: targets.projects,
                safety: targets.safety,
                engineers: targets.engineers,
              });
            }
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  const faqs = [
    { q: "What areas do you serve?", a: "We operate across the entire UK, with a focus on major cities including London, Birmingham, Manchester, Leeds, and Stoke-on-Trent." },
    { q: "How long does a typical commercial project take?", a: "Timelines vary based on scale. A mid-sized office fit-out takes 8–12 weeks, while a full new-build may take 6–18 months. We provide detailed schedules upfront." },
    { q: "Are you fully insured and accredited?", a: "Yes – we hold £10M public liability insurance, CHAS, Constructionline, ISO 9001, and Safe Contractor accreditation." },
    { q: "Do you offer design & build services?", a: "Absolutely. From initial architectural concepts to final handover, our in-house team manages every stage of the design & build process." },
    { q: "How do I request a quote?", a: "Simply click the 'Get a Quote' button or email us at sales@appexedevelopments.co.uk. We'll arrange a site survey within 48 hours." },
    { q: "What is your warranty policy?", a: "All our work comes with a 12-month defects liability period, plus structural guarantees up to 10 years on major projects." }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img
            alt="Construction site"
            className="w-full h-full object-cover brightness-50"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVWNaGp-Dl_Ad3IenWXzDlTM6tDSUaUyhsnyLpWN63ugWoqwdZEu3jqOD7Bx5t1BhfyhG-c0pYiVtOzQHWe5Jq91MJbAKX0m917nNC2A4J7NhO1addHaACEMBpDCX-XhK-GiNAI1re-esqC2_ykwJbqz4CukmETsYve3ZoXUogmAeLNOJ8m-Vn2hBiS6D6JO0zPi2LEh0Fx-grR6UHYNEe-DF4m7tKw2-aKhy-mRduYwVHyav6uBkeBE2g-WJ5qigSI5kEM6nfwYk"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
          <div className="max-w-2xl bg-[#111111]/95 p-12 backdrop-blur-sm border-l-8 border-orange-500 shadow-2xl rounded-r-2xl">
            <span className="text-orange-400 font-semibold text-sm uppercase tracking-[0.2em] mb-4 block">
              Excellence in Engineering
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Precision Built. <br />
              <span className="text-orange-500">Quality Driven.</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Delivering superior structural solutions and innovative developments across the UK. We combine traditional craftsmanship with modern engineering precision.
            </p>
            <div className="flex gap-4 flex-wrap">
              <button className="bg-orange-600 text-white font-semibold text-sm px-8 py-4 rounded uppercase hover:bg-orange-700 transition">
                Our Services
              </button>
              <button className="border-2 border-orange-500 text-orange-400 font-semibold text-sm px-8 py-4 rounded uppercase hover:bg-orange-500/10 transition">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section with animated counters */}
      <section ref={statsRef} className="bg-[#111111] py-12 border-b border-[#2c2c2c]">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center border-r border-[#2c2c2c] last:border-0">
            <div className="text-orange-500 text-4xl md:text-5xl font-bold mb-1">{counts.years}+</div>
            <div className="font-semibold text-xs uppercase text-gray-400">Years Experience</div>
          </div>
          <div className="text-center border-r border-[#2c2c2c] last:border-0">
            <div className="text-orange-500 text-4xl md:text-5xl font-bold mb-1">{counts.projects}+</div>
            <div className="font-semibold text-xs uppercase text-gray-400">Projects Done</div>
          </div>
          <div className="text-center border-r border-[#2c2c2c] last:border-0">
            <div className="text-orange-500 text-4xl md:text-5xl font-bold mb-1">{counts.safety}%</div>
            <div className="font-semibold text-xs uppercase text-gray-400">Safety Record</div>
          </div>
          <div className="text-center">
            <div className="text-orange-500 text-4xl md:text-5xl font-bold mb-1">{counts.engineers}</div>
            <div className="font-semibold text-xs uppercase text-gray-400">Expert Engineers</div>
          </div>
        </div>
      </section>

      {/* About Teaser (Bento) */}
      <section className="py-20 max-w-7xl mx-auto px-8">
        <div className="grid md:grid-cols-12 gap-6 items-stretch">
          <div className="md:col-span-5 flex flex-col justify-center">
            <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-4">The Appexe Advantage</span>
            <h2 className="text-3xl font-bold mb-6">Building the Future with Integrity</h2>
            <p className="text-gray-400 mb-6">
              APPEXE DEVELOPMENTS LTD stands as a beacon of reliability in the construction industry. Our approach integrates rigorous safety protocols with architectural elegance.
            </p>
            <div className="space-y-4">
              <div className="flex gap-4">
                <span className="material-symbols-outlined text-orange-500" style={{ fontVariationSettings: "'FILL' 1" }}>architecture</span>
                <div><h4 className="font-semibold uppercase">Design-Led Thinking</h4><p className="text-sm text-gray-400">Functional spaces optimized for longevity.</p></div>
              </div>
              <div className="flex gap-4">
                <span className="material-symbols-outlined text-orange-500" style={{ fontVariationSettings: "'FILL' 1" }}>engineering</span>
                <div><h4 className="font-semibold uppercase">Certified Excellence</h4><p className="text-sm text-gray-400">Adhering to highest UK standards.</p></div>
              </div>
            </div>
          </div>
          <div className="md:col-span-7 grid grid-cols-2 grid-rows-2 gap-4 h-[500px]">
            <div className="col-span-1 row-span-2 rounded-lg overflow-hidden"><img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdJ_BHkcOU0ktkduVkz-TPCaOdfZAFbDW8RFT0zPtHaN9k1R2hvYJfdLJBwwtqBxgviRljjdxRejVh5SZhfq9K5kIIebuspzroa81UXeMxD3aCQeR-FO6annaqxeeOG1AnSFI1F3ypUn6ASgtgP810mLJUGcabrmuTGNi4aatBBFvBV7CocYtwaqukxaR6ocCjD9306bod6uVFaQp9cZ-QCv4DrYGMTibjPtKOtPtwo7l-QcoY_GU05skZQ48KhLoygLJZzubRX78" className="w-full h-full object-cover" /></div>
            <div className="col-span-1 rounded-lg overflow-hidden"><img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDly1fusZ9zr89KCDoI-uzjppBcQPk-EfQhFKRqUL6j1aaTBaxKgNlxX2zysXORg397GMpyukXTo0qhjOxxgGcYyvLp98bJZ99YuXnfjxMrA3p51Tt5lE1co24fi2RLfu7vlZWBO0hcSkzvWPKSwpxlIL_N3VwYdSCfEw6vq-cQSzjg1AzmROkeSRSTux4RqN4r8rNNnzfEFFcaseDqN3Q6ebbqIfjvbEUFAdreTvCjQ1xP7zv7-Uk-Nt-idgeNjVhqBFTfbU_PRXU" className="w-full h-full object-cover" /></div>
            <div className="bg-orange-700 rounded-lg p-8 flex flex-col justify-end"><span className="material-symbols-outlined text-white text-4xl mb-4">verified</span><p className="text-white font-semibold uppercase">Trusted UK Partner for Premium Infrastructure</p></div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="bg-[#111111] py-20">
        <div className="max-w-7xl mx-auto px-8 text-center mb-16"><h2 className="text-3xl font-bold">Core Competencies</h2><p className="text-gray-400 max-w-2xl mx-auto">Comprehensive development services tailored to commercial and residential needs.</p></div>
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-3 gap-8">
          {[
            { icon: "corporate_fare", title: "Commercial Build", desc: "End-to-end management of office complexes, retail units, and industrial facilities." },
            { icon: "home_work", title: "Residential Dev", desc: "Creating high-quality housing solutions that prioritize sustainability and comfort." },
            { icon: "precision_manufacturing", title: "Civil Engineering", desc: "Complex infrastructural projects requiring deep technical expertise." }
          ].map((s, i) => (
            <div key={i} className="bg-[#1a1a1a] p-8 rounded-xl border border-[#2c2c2c] relative overflow-hidden hover:shadow-xl transition"><div className="absolute top-0 left-0 w-full h-1 bg-orange-600"></div><span className="material-symbols-outlined text-orange-500 text-5xl mb-6">{s.icon}</span><h3 className="text-xl font-semibold mb-4">{s.title}</h3><p className="text-gray-400 mb-6">{s.desc}</p><a href="#" className="inline-flex items-center text-orange-400 font-semibold uppercase gap-1 hover:gap-3 transition">Learn More <span className="material-symbols-outlined text-sm">arrow_forward</span></a></div>
          ))}
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 max-w-7xl mx-auto px-8">
        <div className="text-center mb-12"><h2 className="text-3xl font-bold">Our Proven Process</h2><p className="text-gray-400 mt-2">From concept to completion – we deliver excellence at every stage.</p></div>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { step: "01", title: "Consultation", text: "Understand goals, site survey & feasibility." },
            { step: "02", title: "Design & Planning", text: "Detailed blueprints, permits & material selection." },
            { step: "03", title: "Precision Build", text: "On-site execution with strict safety protocols." },
            { step: "04", title: "Handover & Support", text: "Final inspection, warranty & aftercare." }
          ].map((p, idx) => (
            <div key={idx} className="bg-[#1a1a1a] p-6 rounded-xl border border-[#2c2c2c]"><div className="text-5xl font-black text-orange-600/30 mb-4">{p.step}</div><h3 className="text-xl font-bold mb-2">{p.title}</h3><p className="text-gray-400 text-sm">{p.text}</p></div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#111111] py-20">
        <div className="max-w-7xl mx-auto px-8 text-center mb-12"><h2 className="text-3xl font-bold">What Our Clients Say</h2><p className="text-gray-400">Trusted by industry leaders across the UK</p></div>
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-3 gap-8">
          {[
            { name: "Sarah Mitchell", role: "Project Director, UrbanCore", text: "Appexe delivered our commercial complex ahead of schedule. Their attention to detail is unmatched." },
            { name: "James Harrington", role: "Managing Director, Harrington Group", text: "Professional, transparent, and high-quality results. Highly recommend for any major build." },
            { name: "Linda Okonkwo", role: "Architect, Studio LOK", text: "Collaborating with Appexe was seamless – they turned our design vision into reality." }
          ].map((t, i) => (
            <div key={i} className="bg-[#1a1a1a] p-8 rounded-xl border border-[#2c2c2c]"><span className="material-symbols-outlined text-orange-500 text-4xl">format_quote</span><p className="my-4 text-gray-300 italic">“{t.text}”</p><h4 className="font-bold">{t.name}</h4><p className="text-sm text-orange-400">{t.role}</p></div>
          ))}
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="py-20 max-w-7xl mx-auto px-8"><div className="flex justify-between items-end mb-12"><div><h2 className="text-3xl font-bold">Project Portfolio</h2><p className="text-gray-400 mt-2">A testament to our commitment to excellence.</p></div><button className="text-orange-400 font-semibold uppercase flex items-center gap-2">View All Projects <span className="material-symbols-outlined">grid_view</span></button></div>
      <div className="grid md:grid-cols-3 gap-6">{["Skyline Heights Plaza","The Oakwood Terraces","Apex Logistics Center"].map((name, i) => (<div key={i} className="group relative aspect-square overflow-hidden rounded-lg"><img src={i===0?"https://lh3.googleusercontent.com/aida-public/AB6AXuASUfWa6ba0thrf84KR0wuPOXZXnLaYyX3obaYpk5EaNeLdJ9IoE6McCDdyLUyx0s7vw4i2QSeytNjVRtAWiWq4LViJ4aRoDJyP3mCJSKNmeKciyc8OqownbK53n4awA0IXbBVcuoO6IpDfrY1Ezu62mOVY0kftuf9-ecpF_BxxwU115fooMXJ-5mwPhzPABwSrdkyS5bv1eap_pb6Y4qnmb3exAa2MSxI8mXobG33cupUEiymZ4PzSu4xNcTw5Lb0Ujcxm2TxVCt0":i===1?"https://lh3.googleusercontent.com/aida-public/AB6AXuD8JjjTpOaJB5h9zy6Mpch5JPFRRdXS3CN9ke2KpuXkO-rf_maNfgmEUpOKq0UT-P8sSLfegwDNlgjRK_nAah1uH3u_Jb4Q1e4EwxLn3eeQsIGV1SRgzq-WaMviOJ6d2fktmSrdIomRWKYtOxbmkqmry-pOsfT5j36CSqq4uwB84owIdKtRGgGCii_AWdgql3jyTEBL54b5bcrWmdXWQNcNjlMQyeLtdFY3AkFw7eS3_Q1l0ueY_Vp2csFt31l4rDiwluNYRbv-xAg":"https://lh3.googleusercontent.com/aida-public/AB6AXuB58eHnnbh9_ym5iKZe2QakcByRvgp3bZBNeDp4ww5bWqXbp7Jzn08fYlP5HNIoh8HUDKfLBm0EmVk362UZU6dHpCBqvKCJ8mWlaNUN1dRqk_tRKK3HimwnQk3xSaQRM5cuCOuxM3hVc5EIjGJyrSz6oh9tGisfyQulTJbFaw1ZRsNt5wdd7n-kEmGtai2R4fYtZsecA3JCYfaonekqHyVxBgewQwf8hyBZk4r2BqHDcobycAO8NhXtsayVcuTBfGaWza1FbFkUpnA"} className="w-full h-full object-cover brightness-75 group-hover:scale-105 transition duration-700"/><div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8"><span className="text-orange-400 text-xs uppercase mb-1">{i===0?"Commercial":i===1?"Residential":"Industrial"}</span><h4 className="text-white text-2xl font-bold">{name}</h4></div></div>))}</div></section>

      {/* Certifications */}
      <section className="py-20 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-8 text-center mb-12"><h2 className="text-3xl font-bold">Accreditations & Partners</h2><p className="text-gray-400">Recognised by leading industry bodies</p></div>
        <div className="max-w-7xl mx-auto px-8 flex flex-wrap justify-center gap-8 items-center">
          {["ISO 9001", "CHAS", "Construction Line", "Safe Contractor", "RIBA Partner", "UKAS"].map((cert, idx) => (
            <div key={idx} className="bg-[#1a1a1a] px-6 py-3 rounded-full border border-orange-500/30 text-orange-400 font-semibold text-sm">{cert}</div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-8 mb-20">
        <div className="bg-orange-700 rounded-xl p-12 md:p-20 text-white flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden">
          <div><h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to build your vision?</h2><p className="text-lg opacity-90">Contact our engineering team today for a comprehensive consultation.</p></div>
          <button className="bg-white text-orange-800 font-bold text-sm px-10 py-5 rounded uppercase shadow-lg hover:bg-gray-100 transition">Start Your Project</button>
        </div>
      </section>

      {/* FAQ Section with Accordion (Real open/close) */}
      <section className="py-20 max-w-7xl mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
          <p className="text-gray-400 mt-2">Everything you need to know about working with Appexe</p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-[#1a1a1a] rounded-xl border border-[#2c2c2c] overflow-hidden">
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full flex justify-between items-center p-6 text-left font-bold text-lg text-white hover:bg-[#252525] transition"
              >
                {faq.q}
                <span className="material-symbols-outlined text-orange-400">
                  {openFaq === idx ? "expand_less" : "expand_more"}
                </span>
              </button>
              <div className={`px-6 pb-6 text-gray-400 transition-all duration-300 ${openFaq === idx ? "block" : "hidden"}`}>
                {faq.a}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}