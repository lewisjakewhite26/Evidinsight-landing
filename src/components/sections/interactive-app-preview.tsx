"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import {
    ClipboardCheck,
    Users,
    Eye,
    Route,
    BookOpen,
    MessageCircle,
    FileText,
    Clock,
    Table2
} from "lucide-react";

// The list of tools matching the real EvidInsight product.
const EVIDINSIGHT_TOOLS = [
    { id: "sef", name: "School Evaluation Form", shortName: "SEF", icon: ClipboardCheck, color: "bg-indigo-500", label: "Self Evaluation" },
    { id: "sampling", name: "Case Sampling", shortName: "Sampling", icon: Users, color: "bg-purple-600", label: "Deep Dives" },
    { id: "observation", name: "Lesson Observation", shortName: "Observe", icon: Eye, color: "bg-rose-600", label: "Observations" },
    { id: "walks", name: "Learning Walk", shortName: "Walks", icon: Route, color: "bg-teal-500", label: "Walkthroughs" },
    { id: "scrutiny", name: "Work Scrutiny", shortName: "Scrutiny", icon: BookOpen, color: "bg-emerald-600", label: "Book Looks" },
    { id: "pupil", name: "Pupil Voice", shortName: "Pupil", icon: MessageCircle, color: "bg-amber-600", label: "Surveys" },
    { id: "iep", name: "Individual Education Plan", shortName: "IEP", icon: FileText, color: "bg-red-500", label: "SEND Support" },
    { id: "behaviour", name: "Behaviour Reflection", shortName: "Behaviour", icon: Clock, color: "bg-teal-700", label: "Incidents" },
    { id: "provision", name: "Costed Provision", shortName: "Provision", icon: Table2, color: "bg-green-800", label: "Interventions" },
];

export function InteractiveAppPreview() {
    const [activeTool, setActiveTool] = useState(EVIDINSIGHT_TOOLS[0].id);

    const activeToolData = EVIDINSIGHT_TOOLS.find(t => t.id === activeTool) || EVIDINSIGHT_TOOLS[0];
    const ActiveIcon = activeToolData.icon;

    return (
        <section className="py-32 md:py-40 relative overflow-hidden">
            <div className="container mx-auto px-4">

                <div className="text-center mb-16 relative z-10 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-snug">
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
                        {/* Dynamic Island */}
                        <div className="absolute top-0 inset-x-0 h-7 flex justify-center z-20">
                            <div className="w-[100px] h-[25px] bg-black rounded-b-2xl"></div>
                        </div>

                        {/* Phone Screen Output */}
                        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 to-black flex flex-col">
                            {/* Status Bar */}
                            <div className="flex items-center justify-between px-8 pt-2 pb-1 text-white text-[11px] font-semibold z-10">
                                <span>10:10</span>
                                <div className="flex items-center gap-1">
                                    {/* Signal bars */}
                                    <svg width="16" height="12" viewBox="0 0 16 12" className="fill-white">
                                        <rect x="0" y="9" width="3" height="3" rx="0.5" opacity="1" />
                                        <rect x="4" y="6" width="3" height="6" rx="0.5" opacity="1" />
                                        <rect x="8" y="3" width="3" height="9" rx="0.5" opacity="1" />
                                        <rect x="12" y="0" width="3" height="12" rx="0.5" opacity="0.3" />
                                    </svg>
                                    {/* WiFi */}
                                    <svg width="14" height="12" viewBox="0 0 24 24" className="fill-white" stroke="none">
                                        <path d="M12 18c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0-4c-1.82 0-3.47.7-4.71 1.84a.996.996 0 1 0 1.41 1.41A4.98 4.98 0 0 1 12 16c1.38 0 2.63.56 3.54 1.47.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41A6.96 6.96 0 0 0 12 14zm0-4c-2.92 0-5.56 1.17-7.48 3.07a.996.996 0 1 0 1.41 1.41A8.94 8.94 0 0 1 12 12c2.48 0 4.73 1.01 6.36 2.64.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41A10.94 10.94 0 0 0 12 10z" />
                                    </svg>
                                    {/* Battery */}
                                    <svg width="22" height="12" viewBox="0 0 25 12" className="fill-white">
                                        <rect x="0" y="0" width="21" height="12" rx="2" stroke="white" strokeWidth="1" fill="none" />
                                        <rect x="21" y="3" width="3" height="6" rx="1" opacity="0.4" />
                                        <rect x="1.5" y="1.5" width="16" height="9" rx="1" fill="white" />
                                    </svg>
                                </div>
                            </div>

                            {/* App Header with E Logo */}
                            <div className="flex items-center gap-3 px-6 pt-4 pb-5">
                                <img
                                    src="/logo.svg"
                                    alt="EvidInsight"
                                    className="h-7 w-auto brightness-0 invert opacity-80"
                                />
                                <span className="text-white/60 text-sm font-medium tracking-wide">EvidInsight</span>
                            </div>

                            {/* App Icon Grid */}
                            <div className="grid grid-cols-3 gap-y-5 gap-x-3 px-5">
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
                                                "text-[9px] text-center leading-tight transition-colors w-full truncate",
                                                isActive ? "text-white font-medium" : "text-gray-500 group-hover:text-gray-300"
                                            )}>
                                                {tool.shortName}
                                            </span>
                                        </button>
                                    );
                                })}
                            </div>

                            {/* Home Indicator */}
                            <div className="mt-auto flex justify-center pb-2">
                                <div className="w-32 h-1 bg-white/20 rounded-full"></div>
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
                                <Eye className="w-3 h-3" />
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
        </section >
    );
}
