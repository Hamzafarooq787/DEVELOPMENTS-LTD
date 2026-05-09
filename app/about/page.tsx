"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function AboutPage() {
  // Animated counters for stats box
  const [stats, setStats] = useState({ years: 0, projects: 0, safety: 0 });
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2000;
          const stepTime = 20;
          const targets = { years: 15, projects: 450, safety: 100 };
          const startTime = performance.now();

          const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(1, elapsed / duration);
            setStats({
              years: Math.floor(progress * targets.years),
              projects: Math.floor(progress * targets.projects),
              safety: Math.floor(progress * targets.safety),
            });
            if (progress < 1) requestAnimationFrame(animate);
            else {
              setStats({
                years: targets.years,
                projects: targets.projects,
                safety: targets.safety,
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

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 px-8 border-b border-[#2c2c2c] bg-gradient-to-br from-orange-500/5 via-transparent to-transparent">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-orange-500 font-semibold text-sm uppercase tracking-widest">Our Legacy</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white">Pioneering Excellence in Structural Engineering.</h1>
            <p className="text-lg text-gray-400 max-w-xl">
              APPEXE DEVELOPMENTS LTD is a leading firm committed to delivering high-precision engineering and architectural solutions. From conception to completion, we build the future of urban infrastructure.
            </p>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden border-4 border-orange-500/20 shadow-sm">
            <img
              alt="Modern Architecture"
              className="w-full h-full object-cover brightness-75"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBo31zMTtFZTojDYgv21P9zSByrArzem6uAVlO9ZvB1iflcVBD6ye2CeSv_7iqY2FFFO9gIuA6C35IVOSyH_9RBVjIhKbT15IEFz_oWRV8WayUhZvMm_o-jlboesSPeVp-Fk2Xom-ZBTz0JTyMq4Fc7QBroWyQFzEdzojE1-ZDWwaZa-LZwqnuXxP1ntTS8fylFvbag4c77td-bwduVnj8CWOiNaFJw2jtNcyIk2c12ILj2TK2j-dz1g_8z9iXGid-LU5uEIW2KHGA"
            />
          </div>
        </div>
      </section>

      {/* Company History & Mission + Stats */}
      <section className="py-20 px-8 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-8">
            <div className="border-l-4 border-orange-500 pl-8 py-2">
              <h2 className="text-3xl font-bold mb-4 text-white">A History of Precision</h2>
              <p className="text-lg text-gray-400 leading-relaxed">
                Founded on the principles of integrity and engineering rigor, APPEXE DEVELOPMENTS LTD has grown from a specialized consultancy into a multi-disciplinary development powerhouse. Our journey is marked by projects that challenge the status quo, utilizing modular construction techniques and advanced material science to create sustainable, long-lasting structures.
              </p>
            </div>
            <div className="border-l-4 border-orange-300 pl-8 py-2">
              <h2 className="text-3xl font-bold mb-4 text-white">Our Mission</h2>
              <p className="text-lg text-gray-400">
                To bridge the gap between complex engineering challenges and human-centric design. We strive to be the trusted partner for government agencies and private developers alike, ensuring every blueprint is executed with absolute fidelity and a commitment to safety.
              </p>
            </div>
          </div>

          {/* Stats Box – with animated counters */}
          <div
            ref={statsRef}
            className="bg-[#111111] p-8 rounded-xl border border-[#2c2c2c] flex flex-col justify-center space-y-8"
          >
            <div className="text-center">
              <div className="text-orange-500 text-4xl md:text-5xl font-bold mb-1">{stats.years}+</div>
              <div className="font-semibold text-xs uppercase text-gray-400">Years in Business</div>
            </div>
            <div className="text-center">
              <div className="text-orange-500 text-4xl md:text-5xl font-bold mb-1">{stats.projects}+</div>
              <div className="font-semibold text-xs uppercase text-gray-400">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-orange-500 text-4xl md:text-5xl font-bold mb-1">{stats.safety}%</div>
              <div className="font-semibold text-xs uppercase text-gray-400">Safety Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us – Bento Grid (Dark version) */}
      <section className="py-20 px-8 bg-[#111111]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">The APPEXE Advantage</h2>
            <p className="text-gray-400">We combine high-level engineering precision with an approachable, human-centric service model.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-auto md:h-[600px]">
            {/* Feature 1 – large */}
            <div className="md:col-span-2 md:row-span-2 bg-[#1a1a1a] p-8 rounded-xl border-t-4 border-orange-500 flex flex-col justify-between border border-[#2c2c2c]">
              <div>
                <span className="material-symbols-outlined text-orange-500 text-4xl mb-6">verified_user</span>
                <h3 className="text-2xl font-semibold mb-4 text-white">Uncompromising Quality</h3>
                <p className="text-gray-400">
                  Our quality control protocols exceed industry standards. Every weld, bolt, and slab is inspected through multi-stage structural audits to ensure the integrity of your investment.
                </p>
              </div>
              <Link href="/services" className="mt-8 flex items-center text-orange-400 font-semibold uppercase text-sm group cursor-pointer">
                READ OUR STANDARDS <span className="material-symbols-outlined ml-2 transition-transform group-hover:translate-x-1">arrow_forward</span>
              </Link>
            </div>

            {/* Feature 2 */}
            <div className="md:col-span-2 bg-[#1a1a1a] p-8 rounded-xl border-t-4 border-orange-300 border border-[#2c2c2c] flex items-start gap-6">
              <span className="material-symbols-outlined text-orange-500 text-4xl">engineering</span>
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-white">Technical Expertise</h3>
                <p className="text-gray-400">Our team consists of Chartered Engineers and RIBA-certified architects who stay at the forefront of Building Information Modeling (BIM) technology.</p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="md:col-span-1 bg-[#1a1a1a] p-8 rounded-xl border-t-4 border-orange-500 border border-[#2c2c2c] flex flex-col justify-center text-center">
              <span className="material-symbols-outlined text-orange-500 text-4xl mb-4 mx-auto">schedule</span>
              <h3 className="font-semibold uppercase text-sm mb-2 text-white">Reliability</h3>
              <p className="text-gray-400 text-sm">On-time delivery is our baseline promise.</p>
            </div>

            {/* Feature 4 */}
            <div className="md:col-span-1 bg-[#1a1a1a] p-8 rounded-xl border-t-4 border-orange-300 border border-[#2c2c2c] flex flex-col justify-center text-center">
              <span className="material-symbols-outlined text-orange-500 text-4xl mb-4 mx-auto">eco</span>
              <h3 className="font-semibold uppercase text-sm mb-2 text-white">Sustainability</h3>
              <p className="text-gray-400 text-sm">Low-impact materials and carbon-conscious workflows.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-8 bg-[#0a0a0a] overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <img
                alt="Engineering team"
                className="rounded-lg h-64 w-full object-cover brightness-90"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDn4HwY8N6NVnbiubuL_AKlsuG31q77SUPErSB7yb9QPcrsiB_f2rZEFHMthbYsUSJMIhTOz5dU_TDtZW5EpI1b_yR9l57MpfBPK_exf4vwY6SYaQV2lUjTlFkAOFck8_DSFCDo0DGuqAVSebasUGqDElbiSDvNaOHbQpbne_nnEo1BxmQ9ZK5czuLB2Gq-wa5US7kkAajLdv6WvAlaJKw6s6Kb7Ekx536LSM3xF4rwi2DPC-fS6gwamUfJcbTXXRmYr83_WUTd40"
              />
              <img
                alt="Close up of plans"
                className="rounded-lg h-64 w-full object-cover mt-8 brightness-90"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDg18h5485KwV2rRDLG5SKEzNQwIRnDpraNoy-N5gdkJ3tOLxXubKK4bHfrbcx0IhQfLxp5vva4KynDUlGLwxZI7Jakdw9k1EEp0X_Wu1K_AP2PZW8Y6VeCWAf_NPgjn3Te-lfKwkBL1nhlFrnW_YibzQlzPJSFqDfKArkmTgkCPt4sdWuiWal33RON6YHnBHks25AEiE9zGyD3TATFaC3qgzieWKKJ3rDAgDm0k_DW9OcpYZD-jV0Yb71O0u3ZReNUWy5ty0j1GMM"
              />
            </div>
          </div>
          <div className="lg:w-1/2 order-1 lg:order-2 space-y-8">
            <h2 className="text-3xl font-bold text-white">Driven by Core Values</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-orange-500/10 p-2 h-fit rounded">
                  <span className="material-symbols-outlined text-orange-500">handshake</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-1 text-white">Radical Transparency</h4>
                  <p className="text-gray-400">We believe in open communication. Our clients have 24/7 access to project milestones and budget reports.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-orange-500/10 p-2 h-fit rounded">
                  <span className="material-symbols-outlined text-orange-500">architecture</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-1 text-white">Modular Innovation</h4>
                  <p className="text-gray-400">We constantly refine our modular processes to reduce waste and accelerate construction timelines without sacrificing beauty.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-orange-500/10 p-2 h-fit rounded">
                  <span className="material-symbols-outlined text-orange-500">safety_check</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-1 text-white">Human-Centric Safety</h4>
                  <p className="text-gray-400">Safety isn't a checkbox; it's our culture. We protect our workers and future residents with rigorous site management.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-8 bg-orange-700">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white">Let's build something exceptional together.</h2>
          <p className="text-lg text-gray-200">Our consultants are ready to discuss your next structural challenge.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="bg-white text-orange-800 px-8 py-4 font-semibold text-sm rounded uppercase hover:bg-gray-100 transition text-center">
              Start Your Project
            </Link>
            <Link href="/services" className="border-2 border-orange-300 text-orange-300 px-8 py-4 font-semibold text-sm rounded uppercase hover:bg-orange-500/10 transition-colors text-center">
              View Case Studies
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}