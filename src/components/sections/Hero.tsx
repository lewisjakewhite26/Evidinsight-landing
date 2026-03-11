"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart2 } from "lucide-react";

const DataStreamBackground = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
            <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-purple-500 to-transparent">
                <motion.div
                    className="w-full h-32 bg-purple-400 shadow-[0_0_15px_#a855f7]"
                    animate={{ y: ["-100%", "1000%"] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
                />
            </div>
            <div className="absolute top-0 left-2/4 w-px h-full bg-gradient-to-b from-transparent via-blue-500 to-transparent">
                <motion.div
                    className="w-full h-48 bg-blue-400 shadow-[0_0_15px_#60a5fa]"
                    animate={{ y: ["-100%", "1000%"] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "linear", delay: 1 }}
                />
            </div>
            <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-indigo-500 to-transparent">
                <motion.div
                    className="w-full h-24 bg-indigo-400 shadow-[0_0_15px_#818cf8]"
                    animate={{ y: ["-100%", "1000%"] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear", delay: 2.5 }}
                />
            </div>

            {/* Subtle grid pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#33415522_1px,transparent_1px),linear-gradient(to_bottom,#33415522_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        </div>
    );
};

export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center pt-16 pb-32 overflow-hidden bg-[#0B1120]">
            <DataStreamBackground />

            <div className="container relative z-10 mx-auto px-4 md:px-8 text-center max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 text-sm text-purple-300 bg-purple-900/30 border border-purple-500/30 rounded-full">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                        </span>
                        Insights for Headteachers & MAT Leaders
                    </div>

                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-8 leading-tight">
                        Turn School Data into
                        <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 drop-shadow-lg">
                            {" "}Strategic Action
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed">
                        EvidInsight transforms scattered operational metrics into a single source of truth. Maximize budget efficiency, improve staff retention, and boost pupil attendance across your entire MAT.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button size="lg" className="w-full sm:w-auto bg-purple-700 hover:bg-purple-600 text-white shadow-[0_0_20px_rgba(76,29,149,0.5)] border border-purple-500/50 rounded-full px-8 h-14 text-base font-medium transition-all hover:scale-105">
                            Sign up now
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                        <Button size="lg" variant="outline" className="w-full sm:w-auto bg-slate-900/50 hover:bg-slate-800 text-slate-200 border-slate-700 rounded-full px-8 h-14 text-base font-medium transition-all backdrop-blur-sm">
                            <BarChart2 className="mr-2 h-5 w-5 text-blue-400" />
                            View Dashboard
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
