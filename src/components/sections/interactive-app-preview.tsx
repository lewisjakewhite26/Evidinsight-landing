"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import {
    FileText,
    Search,
    Footprints,
    BookOpen,
    MessageSquare,
    BarChart3,
    Users,
    CalendarCheck
} from "lucide-react";

// The list of tools we know about so far.
const EVIDINSIGHT_TOOLS = [
    { id: "sef", name: "SEF", icon: FileText, color: "bg-blue-500", label: "Self Evaluation" },
    { id: "sampling", name: "Case Sampling", icon: Search, color: "bg-purple-500", label: "Deep Dives" },
    { id: "walks", name: "Learning Walks", icon: Footprints, color: "bg-green-500", label: "Observations" },
    { id: "scrutiny", name: "Work Scrutiny", icon: BookOpen, color: "bg-orange-500", label: "Book Looks" },
    { id: "pupil", name: "Pupil Voice", icon: MessageSquare, color: "bg-pink-500", label: "Surveys" },
    { id: "staff", name: "Staff Voice", icon: Users, color: "bg-indigo-500", label: "Feedback" },
    { id: "appraisal", name: "Appraisals", icon: CalendarCheck, color: "bg-teal-500", label: "Performance" },
    { id: "analytics", name: "Analytics", icon: BarChart3, color: "bg-rose-500", label: "Live Data" },
];

export function InteractiveAppPreview() {
    const [activeTool, setActiveTool] = useState(EVIDINSIGHT_TOOLS[0].id);

    const activeToolData = EVIDINSIGHT_TOOLS.find(t => t.id === activeTool) || EVIDINSIGHT_TOOLS[0];
    const ActiveIcon = activeToolData.icon;

    return (
        <section className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-4">

                <div className="text-center mb-16 relative z-10 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        One platform. <br />
                        <span className="font-serif italic text-primary">Absolute clarity.</span>
                    </h2>
                    <p className="text-gray-400">
                        Select a tool on the left to see how EvidInsight transforms complex, disjointed paperwork into beautiful, actionable dashboards.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-center gap-12 max-w-6xl mx-auto">

                    {/* LEFT: Phone App Controller */}
                    <div className="relative w-[300px] h-[600px] bg-black rounded-[3rem] border-[8px] border-zinc-800 shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden shrink-0">
                        {/* Phone Hardware Details */}
                        <div className="absolute top-0 inset-x-0 h-7 flex justify-center z-20">
                            <div className="w-1/3 h-5 bg-zinc-800 rounded-b-xl"></div>
                        </div>

                        {/* Phone Screen Output */}
                        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 to-black p-6 pt-16 flex flex-col">
                            <div className="text-white text-xl font-bold mb-8 opacity-90">Good morning</div>

                            {/* App Icon Grid */}
                            <div className="grid grid-cols-4 gap-y-6 gap-x-2">
                                {EVIDINSIGHT_TOOLS.map((tool) => {
                                    const Icon = tool.icon;
                                    const isActive = activeTool === tool.id;

                                    return (
                                        <button
                                            key={tool.id}
                                            onClick={() => setActiveTool(tool.id)}
                                            className={cn(
                                                "flex flex-col items-center gap-2 transition-all hover:scale-105 active:scale-95 group",
                                            )}
                                        >
                                            <div className={cn(
                                                "w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-lg transition-all duration-300 relative",
                                                tool.color,
                                                isActive ? "ring-2 ring-white ring-offset-2 ring-offset-black scale-110" : "opacity-80 group-hover:opacity-100"
                                            )}>
                                                <Icon className="w-6 h-6" />
                                                {isActive && (
                                                    <motion.div layoutId="app-selector" className="absolute -inset-1 rounded-2xl border-2 border-white/20 z-0 pointer-events-none" />
                                                )}
                                            </div>
                                            <span className={cn(
                                                "text-[10px] whitespace-nowrap leading-tight transition-colors",
                                                isActive ? "text-white font-medium" : "text-gray-500 group-hover:text-gray-300"
                                            )}>
                                                {tool.name}
                                            </span>
                                        </button>
                                    );
                                })}
                            </div>

                            {/* Bottom Dock Mockup */}
                            <div className="mt-auto mx-auto w-full max-w-[200px] h-16 bg-white/10 backdrop-blur-md rounded-3xl border border-white/5 flex items-center justify-around px-4">
                                <div className="w-8 h-8 rounded-full bg-white/20"></div>
                                <div className="w-8 h-8 rounded-full bg-white/10"></div>
                                <div className="w-8 h-8 rounded-full bg-white/10"></div>
                                <div className="w-8 h-8 rounded-full bg-white/10"></div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: Desktop Preview Window */}
                    <div className="relative w-full max-w-4xl h-[600px] bg-[#0c0c0e] rounded-xl border border-white/10 shadow-2xl overflow-hidden flex flex-col">
                        {/* Window Header (macOS style) */}
                        <div className="h-12 bg-white/5 border-b border-white/5 flex items-center px-4 gap-2 relative">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                            </div>
                            <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 py-1 bg-black/40 rounded-md border border-white/5 text-xs text-gray-400">
                                <Search className="w-3 h-3" />
                                evidinsight.com/app/{activeTool}
                            </div>
                        </div>

                        {/* Window Content (Dynamic) */}
                        <div className="flex-1 relative bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900 via-[#0c0c0e] to-black p-8 overflow-hidden">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeTool}
                                    initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                    exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
                                    transition={{ duration: 0.4 }}
                                    className="w-full h-full flex flex-col"
                                >
                                    {/* Dynamic Header based on tool */}
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center text-white", activeToolData.color)}>
                                            <ActiveIcon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-white">{activeToolData.name}</h3>
                                            <p className="text-gray-400">{activeToolData.label}</p>
                                        </div>
                                    </div>

                                    {/* Mockup UI Content based on tool */}
                                    <div className="flex-1 border border-white/5 bg-black/50 rounded-lg p-6 flex flex-col gap-6">
                                        {/* Skeleton UI elements to simulate data loading */}
                                        <div className="flex gap-4">
                                            <div className="w-1/3 h-24 bg-white/5 rounded-md animate-pulse"></div>
                                            <div className="w-1/3 h-24 bg-white/5 rounded-md animate-pulse" style={{ animationDelay: '100ms' }}></div>
                                            <div className="w-1/3 h-24 bg-white/5 rounded-md animate-pulse" style={{ animationDelay: '200ms' }}></div>
                                        </div>

                                        <div className="flex-1 bg-white/5 rounded-md p-4 space-y-4">
                                            <div className="h-6 w-1/4 bg-white/10 rounded animate-pulse"></div>
                                            <div className="space-y-2">
                                                <div className="h-4 w-full bg-white/5 rounded"></div>
                                                <div className="h-4 w-5/6 bg-white/5 rounded"></div>
                                                <div className="h-4 w-4/6 bg-white/5 rounded"></div>
                                            </div>

                                            {/* Contextual mock data based on selected tool */}
                                            {activeTool === "analytics" && (
                                                <div className="mt-8 flex items-end gap-2 h-32 px-4">
                                                    {[40, 70, 45, 90, 65, 80, 55].map((h, i) => (
                                                        <motion.div
                                                            initial={{ height: 0 }}
                                                            animate={{ height: `${h}%` }}
                                                            transition={{ delay: 0.2 + (i * 0.1), duration: 0.5, type: 'spring' }}
                                                            key={i}
                                                            className="flex-1 bg-rose-500/50 rounded-t-sm"
                                                        />
                                                    ))}
                                                </div>
                                            )}
                                            {activeTool === "sef" && (
                                                <div className="mt-8 space-y-3 px-2">
                                                    {[1, 2, 3].map((_, i) => (
                                                        <div key={i} className="flex items-center gap-3">
                                                            <div className="w-4 h-4 rounded-full border border-blue-500/50 flex-shrink-0"></div>
                                                            <div className="h-3 w-3/4 bg-white/5 rounded"></div>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
