"use client";

import { motion } from "framer-motion";
import { Users, UserCheck, PoundSterling, Activity } from "lucide-react";

export function Features() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 },
    };

    return (
        <section id="features" className="py-24 bg-[#080d1a] relative border-t border-slate-800/50">
            <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                        Stop Guessing, <span className="text-purple-400">Start Knowing</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                        Discover actionable insights hiding in your MAT's data. Hover over our core modules to preview what your dashboard could look like.
                    </p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]"
                >
                    {/* Card 1: Attendance - Span 2 cols */}
                    <motion.div
                        variants={itemVariants}
                        className="md:col-span-2 relative group overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 p-8 hover:border-purple-500/50 transition-colors"
                    >
                        <div className="relative z-10 flex flex-col h-full justify-between">
                            <div>
                                <motion.div className="h-12 w-12 rounded-full bg-purple-900/40 border border-purple-500/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <UserCheck className="h-6 w-6 text-purple-400" />
                                </motion.div>
                                <h3 className="text-2xl font-bold text-white mb-2">Live Attendance Tracking</h3>
                                <p className="text-slate-400 max-w-sm">
                                    Identify persistent absence trends before they impact performance. Track every school in your MAT in real-time.
                                </p>
                            </div>
                        </div>

                        {/* Hover Peek Animation */}
                        <motion.div
                            className="absolute right-0 bottom-0 translate-y-[20%] translate-x-[10%] w-[350px] h-[200px] bg-[#0f172a] rounded-tl-xl border-t border-l border-slate-700 shadow-2xl opacity-50 group-hover:opacity-100 group-hover:-translate-y-4 group-hover:-translate-x-4 transition-all duration-500 pt-4 pl-4"
                        >
                            <div className="flex gap-2 mb-4">
                                <div className="h-2 w-16 bg-purple-500 rounded-full" />
                                <div className="h-2 w-8 bg-slate-700 rounded-full" />
                            </div>
                            <div className="space-y-4 pr-4">
                                <div className="w-full h-8 bg-slate-800 rounded-md flex items-center px-4 justify-between">
                                    <span className="text-xs text-slate-400">School A</span>
                                    <span className="text-xs text-emerald-400">96.4%</span>
                                </div>
                                <div className="w-full h-8 bg-slate-800 rounded-md flex items-center px-4 justify-between">
                                    <span className="text-xs text-slate-400">School B</span>
                                    <span className="text-xs text-rose-400">89.1%</span>
                                </div>
                                <div className="w-full h-8 bg-slate-800 rounded-md flex items-center px-4 justify-between">
                                    <span className="text-xs text-slate-400">School C</span>
                                    <span className="text-xs text-emerald-400">94.8%</span>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Card 2: Staffing - Span 1 col */}
                    <motion.div
                        variants={itemVariants}
                        className="relative group overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 p-8 hover:border-blue-500/50 transition-colors"
                    >
                        <div className="relative z-10 flex flex-col h-full justify-between">
                            <div>
                                <motion.div className="h-12 w-12 rounded-full bg-blue-900/40 border border-blue-500/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <Users className="h-6 w-6 text-blue-400" />
                                </motion.div>
                                <h3 className="text-xl font-bold text-white mb-2">Staff Retention Insights</h3>
                                <p className="text-slate-400 text-sm">
                                    Predict staff turnover and optimize your workforce retention strategies.
                                </p>
                            </div>
                        </div>

                        {/* Background flourish */}
                        <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-500" />
                        <motion.div
                            className="absolute bottom-4 right-4 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0"
                        >
                            <Activity className="h-20 w-20 opacity-20" />
                        </motion.div>
                    </motion.div>

                    {/* Card 3: Budget - Span 3 cols */}
                    <motion.div
                        variants={itemVariants}
                        className="md:col-span-3 relative group overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 p-8 hover:border-emerald-500/50 transition-colors bg-gradient-to-br hover:from-slate-900 hover:to-slate-800/80"
                    >
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 h-full relative z-10">
                            <div className="md:w-1/3 text-center md:text-left">
                                <motion.div className="h-12 w-12 mx-auto md:mx-0 rounded-full bg-emerald-900/40 border border-emerald-500/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <PoundSterling className="h-6 w-6 text-emerald-400" />
                                </motion.div>
                                <h3 className="text-2xl font-bold text-white mb-2">Budget Allocation Efficiency</h3>
                                <p className="text-slate-400">
                                    See exactly where every pound goes. Uncover inefficiencies across the MAT and reallocate funds to where they impact pupils most.
                                </p>
                            </div>

                            {/* Simulated Chart Area on Hover */}
                            <div className="md:w-2/3 w-full h-full min-h-[140px] relative rounded-xl border border-slate-800 bg-slate-950/50 overflow-hidden group-hover:bg-slate-950/80 transition-colors">
                                <div className="absolute inset-x-0 bottom-0 h-1/2 flex items-end justify-between px-6 pb-4">
                                    {[40, 70, 45, 90, 65, 85, 50, 100].map((height, i) => (
                                        <motion.div
                                            key={i}
                                            className="w-8 bg-emerald-500/20 group-hover:bg-emerald-400 rounded-t-sm"
                                            initial={{ height: "10%" }}
                                            whileHover={{ height: `${height}%` }}
                                            transition={{ duration: 0.3 }}
                                        />
                                    ))}
                                </div>
                                <div className="absolute inset-0 flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity">
                                    <p className="text-slate-500 font-medium">Hover to load financial preview</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
}
