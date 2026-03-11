"use client";

import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { motion } from "framer-motion";

export function ROISlider() {
    const [pupils, setPupils] = useState([5000]);

    // Calculations: Example metrics for MAT savings
    const efficiencySavingPerPupil = 120; // £120 saving per pupil
    const hoursSavedPerPupil = 1.5;

    const totalSavings = pupils[0] * efficiencySavingPerPupil;
    const totalHours = pupils[0] * hoursSavedPerPupil;

    return (
        <section id="roi" className="py-24 bg-[#0B1120] relative border-t border-slate-800/50">
            <div className="container mx-auto px-4 md:px-8 max-w-5xl relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                        Calculate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Impact</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                        Drag the slider to match your Trust's pupil count and see the potential efficiency gains.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Interactive Slider Area */}
                    <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-3xl backdrop-blur-sm shadow-xl">
                        <h3 className="text-xl font-semibold text-white mb-8">Trust Size (Total Pupils)</h3>

                        <div className="mb-12">
                            <span className="text-5xl font-bold text-blue-400 mb-4 inline-block">
                                {pupils[0].toLocaleString()}
                            </span>
                            <span className="text-slate-400 ml-2">pupils</span>
                        </div>

                        <Slider
                            defaultValue={[5000]}
                            max={25000}
                            min={500}
                            step={100}
                            value={pupils}
                            onValueChange={setPupils}
                            className="mb-8"
                        />

                        <div className="flex justify-between text-sm text-slate-500 font-medium">
                            <span>500</span>
                            <span>25,000+</span>
                        </div>
                    </div>

                    {/* Results Area */}
                    <div className="space-y-6">
                        <motion.div
                            key={totalSavings}
                            initial={{ scale: 0.95, opacity: 0.8 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.3 }}
                            className="bg-gradient-to-br from-purple-900/40 to-slate-900/80 border border-purple-500/30 p-8 rounded-3xl relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-500/20 transition-all" />
                            <h4 className="text-slate-400 font-medium mb-2">Estimated Budget Efficiency</h4>
                            <div className="text-4xl md:text-5xl font-bold text-white">
                                £{totalSavings.toLocaleString()}
                            </div>
                            <p className="text-sm text-purple-300 mt-2">Recovered funds for reallocation</p>
                        </motion.div>

                        <motion.div
                            key={totalHours}
                            initial={{ scale: 0.95, opacity: 0.8 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                            className="bg-gradient-to-br from-emerald-900/40 to-slate-900/80 border border-emerald-500/30 p-8 rounded-3xl relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-500/20 transition-all" />
                            <h4 className="text-slate-400 font-medium mb-2">Admin Hours Saved</h4>
                            <div className="text-4xl md:text-5xl font-bold text-white">
                                {totalHours.toLocaleString()}
                            </div>
                            <p className="text-sm text-emerald-300 mt-2">Hours back to teaching & leadership</p>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
