"use client";

import { useEffect, useRef, useState } from "react";

export default function ContactPage() {
  // Animated counters for stats
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
          const targets = { years: 15, projects: 200, safety: 100 };
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
      <header className="mb-20 text-center max-w-3xl mx-auto pt-32 px-4">
        <div className="inline-block px-4 py-1 mb-4 border border-orange-500 text-orange-500 font-semibold text-sm rounded-full uppercase tracking-widest">
          Direct Communication
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Get in Touch
        </h1>
        <p className="text-lg text-gray-400">
          Whether you're starting a new development project or need expert engineering consultation, our team is ready to assist you. Reach out through our official channels below.
        </p>
      </header>

      {/* Main Content Canvas */}
      <div className="pb-20 px-4 max-w-7xl mx-auto">
        {/* Bento Grid Layout for Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Address Card */}
          <div className="md:col-span-7 bg-[#1a1a1a] border border-[#2c2c2c] rounded-xl p-8 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1 h-full bg-orange-500"></div>
            <div className="flex flex-col h-full justify-between">
              <div>
                <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-8">
                  <span className="material-symbols-outlined text-orange-500">location_on</span>
                </div>
                <h2 className="text-3xl font-bold mb-4 text-white">Our Office</h2>
                <p className="text-lg text-gray-400 max-w-sm">
                  FLAT 1, 118 GREENGATES STREET, STOKE-ON-TRENT, ST6 6DE
                </p>
              </div>
              <div className="mt-12 flex items-center gap-4 text-orange-400 font-semibold text-sm">
                <span>ESTABLISHED HEADQUARTERS</span>
                <div className="h-px flex-1 bg-[#2c2c2c]"></div>
              </div>
            </div>
          </div>

          {/* Email Card */}
          <div className="md:col-span-5 bg-[#1a1a1a] border border-[#2c2c2c] rounded-xl p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-orange-300"></div>
            <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-8">
              <span className="material-symbols-outlined text-orange-500">mail</span>
            </div>
            <h2 className="text-3xl font-bold mb-4 text-white">Email Us</h2>
            <a
              className="text-xl font-semibold text-orange-400 break-all hover:underline decoration-orange-400 underline-offset-8 transition-all"
              href="mailto:sales@appexedevelopments.co.uk"
            >
              sales@appexedevelopments.co.uk
            </a>
            <p className="text-base text-gray-400 mt-8">
              Our team typically responds to all inquiries within 24 business hours. For urgent project quotes, please use our direct email.
            </p>
          </div>

          {/* Map Integration Section (Visual Anchor) */}
          <div className="md:col-span-12 rounded-xl overflow-hidden border border-[#2c2c2c] h-[450px] relative">
            <img
              className="w-full h-full object-cover grayscale contrast-125 opacity-40"
              alt="Aerial map of Stoke-on-Trent development area"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCeFpOtKfx1XwSA57jh7A7Mm8ZUycAxVcD26oAgK0GsfSpOjVi2UNYAKZUVHmHgjmEH-o6b0DZ8pfgx-q4q3PcjfKHVK7lpaB_Lq4zYvkkhk0LdprODPHbM57DdGmiT7pgKm43Sy9C-3u-kMhCRH4dml8F2TAZ-szhzejS0mNcnNVb5hCQ0owdbmbifX9MK30mc4j3jR6RviDt7XusZxvHDVWjfZDc_CCRkQw0TttyKnOw6X5XFbArCfmyQIkAbseF6LUGG2ULIgCw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
            <div className="absolute bottom-8 left-8 bg-[#1a1a1a] p-6 rounded-xl border border-[#2c2c2c] shadow-sm max-w-xs">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></span>
                <span className="font-semibold text-sm text-gray-400">LOCAL PRESENCE</span>
              </div>
              <p className="text-base font-semibold text-white">Stoke-on-Trent Regional Operations</p>
            </div>
          </div>

          {/* Stats/Counters Module – with animation */}
          <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 md:col-span-12 mt-4">
            <div className="bg-[#111111] rounded-xl p-8 text-center border border-[#2c2c2c]">
              <span className="text-4xl md:text-5xl font-bold text-orange-500 block mb-2">{stats.years}+</span>
              <span className="font-semibold text-xs uppercase text-gray-400 tracking-wider">Years Experience</span>
            </div>
            <div className="bg-[#111111] rounded-xl p-8 text-center border border-[#2c2c2c]">
              <span className="text-4xl md:text-5xl font-bold text-orange-500 block mb-2">{stats.projects}+</span>
              <span className="font-semibold text-xs uppercase text-gray-400 tracking-wider">Projects Completed</span>
            </div>
            <div className="bg-[#111111] rounded-xl p-8 text-center border border-[#2c2c2c]">
              <span className="text-4xl md:text-5xl font-bold text-orange-500 block mb-2">{stats.safety}%</span>
              <span className="font-semibold text-xs uppercase text-gray-400 tracking-wider">Safety Rating</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}