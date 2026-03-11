"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { TiltCard } from "@/components/ui/tilt-card";

export function InteractiveParallax() {
    const containerRef = useRef<HTMLDivElement>(null);

    // Use the container as the scroll tracking target for better precision
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Make the parallax visible and elegant.
    // Negative Y values mean the element moves UP as you scroll down.
    // Positive Y values mean the element moves DOWN as you scroll down.
    const yMidground = useTransform(scrollYProgress, [0, 1], ["0%", "0%"]); // Center piece stays anchored vertically

    // Foreground (Left element) moves up faster than the background
    const yForeground = useTransform(scrollYProgress, [0, 1], ["30%", "-30%"]);

    // Background (Right element) moves down slightly / moves slower
    const yBackground = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

    return (
        <div ref={containerRef} className="relative w-full py-20 md:py-32 flex flex-col items-center justify-center overflow-hidden">

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16 md:mb-24 z-10 max-w-2xl px-4"
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-6">See the <span className="font-serif italic text-primary">impact.</span></h2>
                <p className="text-xl text-gray-400">Instantly transform fragmented paperwork into strategic, actionable insights for your entire trust.</p>
            </motion.div>

            {/* Use CSS Grid to strictly separate the columns horizontally */}
            <div className="relative w-full max-w-7xl px-4 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center perspective-[2000px]">

                {/* Left Card - FOREGROUND */}
                <motion.div
                    style={{ y: yForeground }}
                    className="lg:col-span-3 w-full flex justify-center lg:justify-end z-30 perspective-[1000px] group"
                >
                    <TiltCard tiltAmount={12} glareOpacity={0.15} className="w-full max-w-[320px] bg-black/95 p-6 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-2xl">
                        <div className="font-bold text-lg mb-1 text-white">Year 6 Intervention</div>
                        <div className="text-sm text-primary mb-6">Pupil Analytics</div>

                        <div className="h-32 flex items-end gap-2 mb-6 justify-between px-2 bg-white/5 p-4 rounded-xl border border-white/5">
                            {[40, 65, 45, 80, 55, 90, 75].map((h, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ height: 0 }}
                                    whileInView={{ height: `${h}%` }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    className="w-full max-w-[12px] bg-gradient-to-t from-primary/30 to-primary rounded-t-sm shadow-[0_0_15px_rgba(184,165,255,0.2)]"
                                />
                            ))}
                        </div>

                        <div className="flex items-center gap-4 mt-6 pt-6 border-t border-white/10">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400/20 to-green-600/20 border border-green-500/30 flex items-center justify-center font-bold text-green-400 shrink-0">JS</div>
                            <div className="flex-1 min-w-0">
                                <div className="text-sm font-bold text-white truncate">John Smith</div>
                                <div className="text-xs font-medium text-green-400 mt-1 flex items-center gap-1">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse shrink-0" /> Target Met
                                </div>
                            </div>
                        </div>
                    </TiltCard>
                </motion.div>

                {/* Center Dashboard Mock - MIDGROUND */}
                <motion.div
                    style={{ y: yMidground }}
                    className="lg:col-span-6 w-full z-20 perspective-[1000px] group"
                >
                    <TiltCard tiltAmount={5} glareOpacity={0.08} className="w-full rounded-2xl border border-white/10 bg-[#0a0a0a]/90 shadow-[0_30px_80px_rgba(0,0,0,1)] backdrop-blur-xl overflow-hidden p-6 lg:p-8 relative">
                        {/* Glow behind the dashboard internal */}
                        <div className="absolute inset-x-0 -top-20 h-40 bg-primary/10 blur-[80px] rounded-full pointer-events-none" />

                        {/* Header mock */}
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start lg:items-center gap-4 mb-8 pb-6 border-b border-white/10 relative z-10 transition-transform duration-300 group-hover:translate-z-10">
                            <div className="font-semibold text-xl flex items-center gap-3 text-white">
                                <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary text-sm shrink-0">E</div>
                                Work Scrutiny
                            </div>
                            <div className="text-xs bg-white/5 border border-white/10 text-gray-300 px-3 py-1.5 rounded-full w-max shadow-[0_0_20px_rgba(184,165,255,0.1)]">Term 2 Analytics</div>
                        </div>
                        {/* Content mock */}
                        <div className="space-y-4 relative z-10">
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-primary/20 transition-all duration-300 hover:bg-white/5 hover:translate-z-20">
                                <span className="text-sm text-gray-300 font-medium">Curriculum Intent</span>
                                <div className="w-full sm:w-32 lg:w-48 h-2 bg-black/50 rounded-full overflow-hidden shadow-inner flex shrink-0">
                                    <motion.div initial={{ width: 0 }} whileInView={{ width: "85%" }} transition={{ duration: 1, delay: 0.2 }} className="h-full bg-primary" />
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-blue-500/20 transition-all duration-300 hover:bg-white/5 hover:translate-z-20">
                                <span className="text-sm text-gray-300 font-medium whitespace-nowrap">Quality of Work</span>
                                <div className="w-full sm:w-32 lg:w-48 h-2 bg-black/50 rounded-full overflow-hidden shadow-inner flex shrink-0">
                                    <motion.div initial={{ width: 0 }} whileInView={{ width: "72%" }} transition={{ duration: 1, delay: 0.4 }} className="h-full bg-blue-500" />
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-green-500/20 transition-all duration-300 hover:bg-white/5 hover:translate-z-20">
                                <span className="text-sm text-gray-300 font-medium">Prior Learning</span>
                                <div className="w-full sm:w-32 lg:w-48 h-2 bg-black/50 rounded-full overflow-hidden shadow-inner flex shrink-0">
                                    <motion.div initial={{ width: 0 }} whileInView={{ width: "60%" }} transition={{ duration: 1, delay: 0.6 }} className="h-full bg-green-500" />
                                </div>
                            </div>
                        </div>
                    </TiltCard>
                </motion.div>

                {/* Right Card - BACKGROUND */}
                <motion.div
                    style={{ y: yBackground }}
                    className="lg:col-span-3 w-full flex justify-center lg:justify-start z-10 perspective-[1000px] group"
                >
                    <TiltCard tiltAmount={15} glareOpacity={0.2} className="w-full max-w-[340px] bg-[#050505] p-6 border border-white/5 shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
                        <div className="flex items-center gap-4 mb-6 transition-transform duration-300 group-hover:translate-z-10">
                            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 text-lg shrink-0">★</div>
                            <div className="min-w-0">
                                <div className="text-base font-bold text-white truncate">Learning Walk</div>
                                <div className="text-xs text-blue-400 truncate">Outstanding practice</div>
                            </div>
                        </div>
                        <div className="p-4 bg-white/5 rounded-xl border border-white/5 mb-6 transition-transform duration-300 group-hover:translate-z-20">
                            <p className="text-sm text-gray-400 italic leading-relaxed">"Exceptional scaffolding observed during the mathematics problem-solving task. All pupils heavily engaged."</p>
                        </div>
                        <div className="flex gap-2 flex-wrap transition-transform duration-300 group-hover:translate-z-10">
                            <span className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 font-medium hover:border-primary/50 transition-colors">Maths</span>
                            <span className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 font-medium hover:border-primary/50 transition-colors">KS2</span>
                        </div>
                    </TiltCard>
                </motion.div>

            </div>
        </div>
    );
}
