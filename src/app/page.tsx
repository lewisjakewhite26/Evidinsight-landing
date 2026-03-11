"use client";

import { motion } from "framer-motion";
import { GlowEffect } from "@/components/ui/glow-effect";
import { GlassCard } from "@/components/ui/glass-card";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { InteractiveParallax } from "@/components/sections/interactive-parallax";
import { InteractiveAppPreview } from "@/components/sections/interactive-app-preview";
import { SecurityFeatures } from "@/components/sections/security-features";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none -z-20 opacity-30">
        <GlowEffect color="bg-primary" blur="blur-[140px]" size="w-[800px] h-[600px] top-[-200px] left-1/2 -translate-x-1/2" opacity={30} />
      </div>

      <div className="container mx-auto px-4">
        {/* --- HERO SECTION --- */}
        <section className="pt-48 pb-32 md:pt-64 md:pb-48 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 text-center flex flex-col items-center mt-20"
          >
            {/* EvidInsight Logo */}
            <div className="flex justify-center mb-10">
              <div className="flex items-center gap-4">
                <img
                  src="/logo.svg"
                  alt="EvidInsight Logo"
                  className="h-12 md:h-16 w-auto hover:scale-105 transition-transform duration-300"
                />
                <span className="text-3xl md:text-5xl font-bold tracking-tight text-white">EvidInsight</span>
              </div>
            </div>

            {/* Status indicator removed per user request */}

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight max-w-4xl mb-6 flex flex-wrap justify-center items-center gap-x-2 md:gap-x-3 text-center leading-snug">
              We make evidence <TypewriterEffect words={[{ text: "evident.", className: "text-[#b8a5ff] font-serif italic font-medium drop-shadow-[0_0_15px_rgba(184,165,255,0.4)]" }]} />
            </h1>

            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10">
              From administrative burden to instant insight. Secure, frictionless academic evaluation built specifically for UK schools and Multi-Academy Trusts.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-xs sm:max-w-none mx-auto">
              <button className="w-full sm:w-auto h-12 px-8 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(184,165,255,0.3)] hover:shadow-[0_0_30px_rgba(184,165,255,0.5)] flex items-center justify-center gap-2 hover:scale-105 active:scale-95 duration-200">
                Sign up now <ArrowRight className="w-4 h-4" />
              </button>
              <button className="w-full sm:w-auto h-12 px-8 rounded-lg bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-colors hover:scale-105 active:scale-95 duration-200 flex items-center justify-center">
                Get in touch
              </button>
            </div>
          </motion.div>
        </section>

        <InteractiveParallax />

        {/* --- BENTO GRID FEATURE SECTION --- */}
        <section id="features" className="py-32 md:py-40 relative">
          <GlowEffect color="bg-blue-500/20" blur="blur-[100px]" size="w-[500px] h-[500px] top-1/2 left-0 -translate-y-1/2" opacity={20} />

          <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-150px" }} transition={{ duration: 0.8 }} className="text-center mb-16 relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-snug">Every tool you need, <br /><span className="font-serif italic text-primary drop-shadow-[0_0_15px_rgba(184,165,255,0.4)]">beautifully integrated.</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Replace fragmented documents with a single, source-of-truth hub for school improvement.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Large Card 1 */}
            <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-100px" }} transition={{ duration: 0.7 }} className="md:col-span-2">
              <SpotlightCard className="flex flex-col justify-between min-h-[300px] border border-white/10 group bg-black/60">
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-primary transition-colors">Comprehensive Evaluation</h3>
                  <p className="text-gray-400 max-w-md">Complete SEF assessments, track pupil progression, and monitor interventions all in one place. Mapped to Ofsted frameworks.</p>
                </div>
                <div className="flex gap-2 flex-wrap mt-8">
                  {["SEF", "Case Sampling", "Lesson Observation", "Learning Walk", "Work Scrutiny", "Pupil Voice", "IEP", "Behaviour Reflection", "Costed Provision"].map(tool => (
                    <span key={tool} className="px-3 py-1 bg-white/5 text-xs rounded-full border border-white/10 text-gray-300 group-hover:border-primary/50 transition-colors">{tool}</span>
                  ))}
                </div>
              </SpotlightCard>
            </motion.div>

            {/* Small Card 1 */}
            <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-100px" }} transition={{ duration: 0.7, delay: 0.15 }}>
              <SpotlightCard className="flex flex-col justify-between h-full bg-primary/5 border-primary/20 hover:border-primary/50 group">
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-primary transition-colors">Live Pupil Analytics</h3>
                  <p className="text-gray-400 text-sm">Real-time tracking of intervention impacts. Know exactly who needs support, instantly.</p>
                </div>
              </SpotlightCard>
            </motion.div>

            {/* Small Card 2 */}
            <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-100px" }} transition={{ duration: 0.7, delay: 0.25 }}>
              <SpotlightCard className="flex flex-col justify-between h-full hover:border-white/30 group">
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-white transition-colors">No Passwords</h3>
                  <p className="text-gray-400 text-sm">Perfect for shared classroom devices. Log in instantly with a secure 6-digit magic code sent to your email.</p>
                </div>
              </SpotlightCard>
            </motion.div>

            {/* Large Card 2 */}
            <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-100px" }} transition={{ duration: 0.7, delay: 0.35 }} className="md:col-span-2">
              <SpotlightCard className="flex flex-col justify-between items-start h-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-900/40 via-transparent to-transparent hover:border-blue-500/50 group">
                <div className="w-full">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">Multi-Academy Trust Oversight</h3>
                    <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded border border-blue-500/30">MAT Feature</span>
                  </div>
                  <p className="text-gray-400 max-w-md">Aggregate data across your entire trust. Toggle effortlessly between single-school deep dives and high-level strategic views.</p>
                </div>
              </SpotlightCard>
            </motion.div>
          </div>
        </section>

        {/* --- INTERACTIVE APP PREVIEW SHOWCASE --- */}
        <InteractiveAppPreview />
      </div>

      {/* --- SECURITY FEATURES (Edge-to-edge bg) --- */}
      <SecurityFeatures />

      <div className="container mx-auto px-4">
        {/* --- HOW IT WORKS TIMELINE --- */}
        <section id="how-it-works" className="py-32 md:py-40 border-t border-white/5 relative">
          <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-150px" }} transition={{ duration: 0.8 }} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-snug">From complex paperwork to clear <span className="font-serif italic text-primary">insight</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Three simple steps to transform your school's evaluation process.</p>
          </motion.div>

          <div className="max-w-4xl mx-auto relative">
            {/* Vertical Line */}
            <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-white/10 to-transparent -translate-x-1/2" />

            {/* Step 1 */}
            <motion.div initial={{ opacity: 0, x: -80 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, margin: "-100px" }} transition={{ duration: 0.8 }} className="flex flex-col md:flex-row items-start md:items-center gap-8 mb-16 relative">
              <div className="md:w-1/2 md:text-right md:pr-12 pl-16 md:pl-0 order-2 md:order-1">
                <h3 className="text-xl font-bold text-white mb-2">Frictionless Capture</h3>
                <p className="text-gray-400 text-sm">Staff log in via magic links and complete highly-customized forms (Learning Walks, Case Sampling) in seconds, right from their device.</p>
              </div>
              <div className="absolute left-0 md:left-1/2 top-0 md:top-1/2 -translate-y-1/2 -translate-x-0 md:-translate-x-1/2 w-14 h-14 rounded-full bg-black border-2 border-primary shadow-[0_0_15px_rgba(184,165,255,0.4)] flex items-center justify-center text-primary font-bold z-10 order-1 md:order-2 hover:scale-110 transition-transform">
                1
              </div>
              <div className="md:w-1/2 hidden md:block order-3"></div> {/* Empty space for alternating layout */}
            </motion.div>

            {/* Step 2 */}
            <motion.div initial={{ opacity: 0, x: 80 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, margin: "-100px" }} transition={{ duration: 0.8 }} className="flex flex-col md:flex-row items-start md:items-center gap-8 mb-16 relative">
              <div className="md:w-1/2 hidden md:block order-1"></div>
              <div className="absolute left-0 md:left-1/2 top-0 md:top-1/2 -translate-y-1/2 -translate-x-0 md:-translate-x-1/2 w-14 h-14 rounded-full bg-black border-2 border-white/20 flex items-center justify-center font-bold z-10 text-white order-1 md:order-2 hover:scale-110 transition-transform hover:border-white/50">
                2
              </div>
              <div className="md:w-1/2 md:pl-12 pl-16 md:pl-0 order-2 md:order-3">
                <h3 className="text-xl font-bold text-white mb-2">Instant Aggregation</h3>
                <p className="text-gray-400 text-sm">Data flows immediately into EvidInsight Hub. Individual forms are mapped against your school's SEF and Ofsted frameworks automatically.</p>
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div initial={{ opacity: 0, x: -80 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, margin: "-100px" }} transition={{ duration: 0.8 }} className="flex flex-col md:flex-row items-start md:items-center gap-8 relative">
              <div className="md:w-1/2 md:text-right md:pr-12 pl-16 md:pl-0 order-2 md:order-1">
                <h3 className="text-xl font-bold text-white mb-2">Strategic Action</h3>
                <p className="text-gray-400 text-sm">Leaders view real-time analytics dashboards. Spot trends, identify intervention needs, and evidence progress to stakeholders instantly.</p>
              </div>
              <div className="absolute left-0 md:left-1/2 top-0 md:top-1/2 -translate-y-1/2 -translate-x-0 md:-translate-x-1/2 w-14 h-14 rounded-full bg-black border-2 border-green-500/50 flex items-center justify-center font-bold z-10 text-green-400 order-1 md:order-2 shadow-[0_0_15px_rgba(34,197,94,0.2)] hover:scale-110 transition-transform hover:shadow-[0_0_25px_rgba(34,197,94,0.4)]">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div className="md:w-1/2 hidden md:block order-3"></div>
            </motion.div>
          </div>
        </section>

        {/* --- FINAL CTA --- */}
        <section className="py-40 md:py-48 relative">
          <GlowEffect color="bg-primary" blur="blur-[120px]" size="w-[800px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" opacity={20} />

          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: false, margin: "-100px" }} transition={{ duration: 0.8, type: "spring" }}>
            <SpotlightCard className="max-w-4xl mx-auto text-center border-primary/20 bg-primary/10 relative z-10 shadow-[0_0_80px_rgba(184,165,255,0.15)] backdrop-blur-3xl">
              <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white text-glow leading-snug">
                Ready to <span className="font-serif italic text-primary">elevate</span> your evaluation?
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10">
                Join the schools upgrading from fragmented paperwork to confident, data-driven excellence.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="h-14 px-10 rounded-lg bg-primary text-primary-foreground font-bold text-lg hover:bg-primary/90 transition-all shadow-[0_0_30px_rgba(184,165,255,0.4)] flex items-center gap-2 hover:scale-105 active:scale-95">
                  Sign up now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <p className="mt-6 text-xs text-gray-400 font-medium tracking-wide uppercase">
                Secure UK Hosting
              </p>
            </SpotlightCard>
          </motion.div>
        </section>

      </div>
    </div>
  );
}
