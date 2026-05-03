"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function ServicesPage() {
  // Animated counters
  const [counts, setCounts] = useState({ years: 0, projects: 0, safety: 0, support: 0 });
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2000;
          const startTime = performance.now();
          const targets = { years: 12, projects: 450, safety: 100, support: 24 };

          const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(1, elapsed / duration);
            setCounts({
              years: Math.floor(progress * targets.years),
              projects: Math.floor(progress * targets.projects),
              safety: Math.floor(progress * targets.safety),
              support: Math.floor(progress * targets.support),
            });
            if (progress < 1) requestAnimationFrame(animate);
            else {
              setCounts({
                years: targets.years,
                projects: targets.projects,
                safety: targets.safety,
                support: targets.support,
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
      <section className="relative py-24 bg-[#0a0a0a] overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="z-10">
            <span className="inline-block px-3 py-1 bg-orange-500/20 text-orange-400 font-semibold text-sm rounded-lg mb-6">
              OUR EXPERTISE
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Building the Future with Precision Engineering.
            </h1>
            <p className="text-lg text-gray-400 max-w-xl">
              From residential masterpieces to large-scale commercial developments, APPEXE delivers structural integrity through modern corporate standards.
            </p>
          </div>
          <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
            <img
              alt="Modern Construction"
              className="w-full h-full object-cover brightness-75"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbtjiJrPUPCBrKmhPBor_slyHFhSuXbx41gVW2SOP8ruZPENb4kMKZrNZtHtYq4zM5HgkpWowKwCj5EHZOFj5GrImlAcXJHPKH0Vg11LY6ny5pmqsuX5fW17Kjh6tbmCkzK8JZ9p_R3HSxY_RceIW5oUopXZLwD-m5Q2z5YlunLLFRSw8gkHZfjpEJ7BtA4tTzDyM2LVvvHgEeBQz67JagRCkyIWQgwQ9NL4UmbDZVFpuS3cSK5RtPEJZbu4gbfwKG9ocGbsGUkJY"
            />
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Core Construction Services</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 - Residential */}
            <div className="bg-[#1a1a1a] p-8 rounded-xl border border-[#2c2c2c] border-t-4 border-t-orange-500 flex flex-col justify-between group hover:shadow-lg transition-all duration-300">
              <div>
                <span className="material-symbols-outlined text-orange-500 text-4xl mb-6 block">home_work</span>
                <h3 className="text-2xl font-semibold mb-4 text-white">Residential Excellence</h3>
                <p className="text-gray-400 mb-6">
                  Bespoke living spaces designed with human-centric ergonomics and high-grade materials for enduring quality.
                </p>
              </div>
              <Link
                href="/contact?service=residential"
                className="text-orange-400 font-semibold text-sm flex items-center gap-2 hover:underline underline-offset-4"
              >
                LEARN MORE <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
            {/* Service Card 2 - Commercial */}
            <div className="bg-[#1a1a1a] p-8 rounded-xl border border-[#2c2c2c] border-t-4 border-t-orange-300 flex flex-col justify-between group hover:shadow-lg transition-all duration-300">
              <div>
                <span className="material-symbols-outlined text-orange-500 text-4xl mb-6 block">apartment</span>
                <h3 className="text-2xl font-semibold mb-4 text-white">Commercial Infrastructure</h3>
                <p className="text-gray-400 mb-6">
                  Scalable office complexes and industrial units built to optimize workflow and corporate efficiency.
                </p>
              </div>
              <Link
                href="/contact?service=commercial"
                className="text-orange-400 font-semibold text-sm flex items-center gap-2 hover:underline underline-offset-4"
              >
                LEARN MORE <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
            {/* Service Card 3 - Renovations */}
            <div className="bg-[#1a1a1a] p-8 rounded-xl border border-[#2c2c2c] border-t-4 border-t-orange-500 flex flex-col justify-between group hover:shadow-lg transition-all duration-300">
              <div>
                <span className="material-symbols-outlined text-orange-500 text-4xl mb-6 block">architecture</span>
                <h3 className="text-2xl font-semibold mb-4 text-white">Precision Renovations</h3>
                <p className="text-gray-400 mb-6">
                  Modernizing legacy structures with advanced engineering solutions and contemporary aesthetics.
                </p>
              </div>
              <Link
                href="/contact?service=renovation"
                className="text-orange-400 font-semibold text-sm flex items-center gap-2 hover:underline underline-offset-4"
              >
                LEARN MORE <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Service Layout (Alternating) – No buttons, only content */}
      <section className="py-20 bg-[#0a0a0a]">
        {/* Residential Section – without quote button */}
        <div className="max-w-7xl mx-auto px-8 mb-32 grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold text-white mb-6">Residential Developments</h2>
            <p className="text-lg text-gray-400 mb-8">
              Our residential portfolio spans from luxury custom homes to multi-family housing complexes. We prioritize energy efficiency and structural longevity in every foundation we pour.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <span className="material-symbols-outlined text-orange-500">check_circle</span>
                <span className="text-gray-300">Sustainable Building Materials &amp; EPC focus</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="material-symbols-outlined text-orange-500">check_circle</span>
                <span className="text-gray-300">Project Management from Concept to Key</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="material-symbols-outlined text-orange-500">check_circle</span>
                <span className="text-gray-300">Interior Architecture Integration</span>
              </li>
            </ul>
          </div>
          <div className="order-1 lg:order-2 h-[500px] rounded-xl overflow-hidden shadow-md">
            <img
              alt="Luxury Residential"
              className="w-full h-full object-cover brightness-90"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAby3CaE0draLSCVC6LpQeNceDrpFDBAsj2c14QU7UXa3lWoI76XdrSq8w-so9LMNj9zWP3qYD5KZBNxC9FS0EvjE8oCfUjjmKf0Cz4doxFOdO0OXBrOfumCcKypdfqfBxygl7HSrrQlttutl1smYCdoG-LmGa7GhQqEqMRhypR4ctdhCdhXSyt6y0pbYckeHvXwDOpDqhThmMwfRTVpTMK1772fD-n5g2iNJBT0e7MwWRG3HuheNKqdF3Uzn-9DW-m83m1gUIwsTo"
            />
          </div>
        </div>

        {/* Commercial Section – without quote button */}
        <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-20 items-center">
          <div className="h-[500px] rounded-xl overflow-hidden shadow-md">
            <img
              alt="Commercial Development"
              className="w-full h-full object-cover brightness-90"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmV7FotCp2A5DDgBrEZkv_HERmz_2CXXqrC_Ipks9isd7VOPlLsdLydKDp9KxudleMt1I-gI-G-NRCX-ss6Y5hW4Qde70Dk4cMzzyjwEYNeMoEZ66OCs-vS_aRIMInwi1wg3OZiC0oLc4zNwpwAOjRf_U55aySi9qAgEbQpJ63vx00smsxXSWYsl1YQPrTfcGMHxzVRkUDsVpJMLoztjC8suXbxhMBv0Vb6hNW99NCm8sxNEUh62a-9y2VYzvp6w2cVu2BnejefEM"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Commercial &amp; Industrial</h2>
            <p className="text-lg text-gray-400 mb-8">
              Delivering robust infrastructure for the modern business world. Our commercial projects are engineered for scalability, safety, and high-traffic durability.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <span className="material-symbols-outlined text-orange-500">check_circle</span>
                <span className="text-gray-300">Grade-A Office Space Construction</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="material-symbols-outlined text-orange-500">check_circle</span>
                <span className="text-gray-300">Industrial Warehousing &amp; Logistics Hubs</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="material-symbols-outlined text-orange-500">check_circle</span>
                <span className="text-gray-300">Retail Plaza Development</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Project Counters – with animation */}
      <section ref={statsRef} className="py-24 bg-[#111111] border-y border-[#2c2c2c]">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          <div>
            <p className="text-orange-500 text-4xl md:text-5xl font-bold mb-2">{counts.years}+</p>
            <p className="font-semibold text-xs uppercase tracking-wider text-gray-400">Years Active</p>
          </div>
          <div>
            <p className="text-orange-500 text-4xl md:text-5xl font-bold mb-2">{counts.projects}+</p>
            <p className="font-semibold text-xs uppercase tracking-wider text-gray-400">Projects Completed</p>
          </div>
          <div>
            <p className="text-orange-500 text-4xl md:text-5xl font-bold mb-2">{counts.safety}%</p>
            <p className="font-semibold text-xs uppercase tracking-wider text-gray-400">Safety Rating</p>
          </div>
          <div>
            <p className="text-orange-500 text-4xl md:text-5xl font-bold mb-2">{counts.support}/7</p>
            <p className="font-semibold text-xs uppercase tracking-wider text-gray-400">Support Availability</p>
          </div>
        </div>
      </section>

      {/* Call to Action – only these two buttons remain */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-8 text-center bg-orange-700 rounded-xl p-16 shadow-lg">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
          <p className="text-lg text-white/90 mb-10">
            Connect with our engineering experts today to discuss your vision and receive a comprehensive, obligation-free quote.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-orange-800 font-semibold text-sm px-10 py-5 rounded uppercase hover:bg-gray-100 transition-colors"
            >
              Get a Quote Now
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white font-semibold text-sm px-10 py-5 rounded uppercase hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}