"use client";

import { motion } from "framer-motion";
import { Shield } from "lucide-react";

// Hexagon Math (Pointy-Topped)
const getHexPoints = (cx: number, cy: number, r: number) => {
    const w = r * Math.sqrt(3);
    return `
    ${cx},${cy - r} 
    ${cx + w / 2},${cy - r / 2} 
    ${cx + w / 2},${cy + r / 2} 
    ${cx},${cy + r} 
    ${cx - w / 2},${cy + r / 2} 
    ${cx - w / 2},${cy - r / 2}
  `.trim();
};

const Hex = ({ q, r, active = false, title = "", subtitle = "", delay = 0 }: any) => {
    const S_R = 90; // Spacing radius (distance between centers logic)
    const DRAW_R = 88; // Draw radius (leaves a clean 4px gutter between hexes)

    // Convert axial coordinates (q, r) to pixel coordinates (cx, cy)
    const cx = 400 + S_R * Math.sqrt(3) * (q + r / 2);
    const cy = 400 + S_R * 1.5 * r;

    const titleLines = title ? title.split('\n') : [];

    // Distance from center for ripple delay (inactive cells only)
    const dist = (Math.abs(q) + Math.abs(r) + Math.abs(q + r)) / 2;

    if (active) {
        return (
            <motion.g
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false, margin: "-80px" }}
                transition={{ duration: 0.6, delay }}
                className="group cursor-default"
            >
                {/* Background Fill - pulses on scroll */}
                <motion.polygon
                    points={getHexPoints(cx, cy, DRAW_R)}
                    initial={{ fill: "rgba(184,165,255,0)" }}
                    whileInView={{
                        fill: [
                            "rgba(184,165,255,0)",
                            "rgba(184,165,255,0.15)",
                            "rgba(184,165,255,0.06)"
                        ]
                    }}
                    viewport={{ once: false, margin: "-80px" }}
                    transition={{ duration: 1.2, delay: delay + 0.2, ease: "easeOut" }}
                    className="group-hover:!fill-[rgba(184,165,255,0.2)]"
                />

                {/* Border - glows on scroll */}
                <motion.polygon
                    points={getHexPoints(cx, cy, DRAW_R)}
                    fill="none"
                    strokeWidth={1.5}
                    initial={{ opacity: 0.15 }}
                    whileInView={{
                        opacity: [0.15, 1, 0.6],
                        filter: [
                            "drop-shadow(0 0 0px rgba(184,165,255,0))",
                            "drop-shadow(0 0 15px rgba(184,165,255,0.8))",
                            "drop-shadow(0 0 6px rgba(184,165,255,0.3))"
                        ]
                    }}
                    viewport={{ once: false, margin: "-80px" }}
                    transition={{ duration: 1.4, delay, ease: "easeOut" }}
                    className="stroke-primary group-hover:drop-shadow-[0_0_20px_rgba(184,165,255,0.8)] transition-all duration-500"
                />

                {/* Text Overlay */}
                {titleLines.length > 0 && (
                    <motion.g
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, margin: "-80px" }}
                        transition={{ duration: 0.5, delay: delay + 0.3 }}
                    >
                        {titleLines.length === 2 ? (
                            <>
                                <text x={cx} y={cy - 12} textAnchor="middle" dominantBaseline="middle" className="text-[18px] font-medium fill-white/90 tracking-wide group-hover:fill-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all duration-500">
                                    {titleLines[0]}
                                </text>
                                <text x={cx} y={cy + 10} textAnchor="middle" dominantBaseline="middle" className="text-[18px] font-medium fill-white/90 tracking-wide group-hover:fill-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all duration-500">
                                    {titleLines[1]}
                                </text>
                            </>
                        ) : (
                            <text x={cx} y={cy - 2} textAnchor="middle" dominantBaseline="middle" className="text-[20px] font-medium fill-white/90 tracking-wide group-hover:fill-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all duration-500">
                                {title}
                            </text>
                        )}

                        {subtitle && (
                            <text x={cx} y={cy + 34} textAnchor="middle" dominantBaseline="middle" className="text-[10px] sm:text-[11px] font-bold fill-gray-500 tracking-[0.2em] uppercase group-hover:fill-primary/80 transition-colors duration-500">
                                {subtitle}
                            </text>
                        )}
                    </motion.g>
                )}
            </motion.g>
        );
    }

    // Inactive hex - ripple highlight on scroll
    return (
        <motion.g
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8, delay }}
        >
            {/* Background fill pulse */}
            <motion.polygon
                points={getHexPoints(cx, cy, DRAW_R)}
                initial={{ fill: "rgba(184,165,255,0)" }}
                whileInView={{
                    fill: [
                        "rgba(184,165,255,0)",
                        "rgba(184,165,255,0.12)",
                        "rgba(184,165,255,0)"
                    ]
                }}
                viewport={{ once: false, margin: "-50px" }}
                transition={{
                    duration: 1.8,
                    delay: delay + dist * 0.15,
                    ease: "easeInOut"
                }}
            />

            {/* Border */}
            <motion.polygon
                initial={{ opacity: 0, strokeWidth: 1 }}
                whileInView={{
                    opacity: [0, 0.4, 0.08],
                    strokeWidth: [1, 1.5, 1]
                }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 2, delay: delay + dist * 0.15, ease: "easeInOut" }}
                points={getHexPoints(cx, cy, DRAW_R)}
                fill="none"
                strokeWidth={1}
                className="stroke-white"
            />
        </motion.g>
    );
};

export function SecurityFeatures() {

    // Define our 4 active core features
    const activeNodes = [
        { q: 0, r: 0, active: true, title: "Magic\nCodes", subtitle: "PASSWORDLESS", delay: 0.2 },
        { q: 1, r: -1, active: true, title: "GDPR\nCompliant", subtitle: "UK STANDARDS", delay: 0.4 },
        { q: 0, r: 1, active: true, title: "Row Level\nSecurity", subtitle: "ENTERPRISE", delay: 0.6 },
        { q: -1, r: 0, active: true, title: "UK Data\nStorage", subtitle: "SOVEREIGNTY", delay: 0.8 },
    ];

    // Generate a mathematically perfect padding ring of inactive hexes
    const gridNodes = [];
    for (let q = -4; q <= 4; q++) {
        for (let r = -4; r <= 4; r++) {
            // Hexagonal distance algorithm
            if ((Math.abs(q) + Math.abs(r) + Math.abs(q + r)) / 2 <= 3.5) {
                if (!activeNodes.find(n => n.q === q && n.r === r)) {
                    gridNodes.push({ q, r, active: false, delay: 0.8 + Math.random() * 0.8 });
                }
            }
        }
    }

    const allNodes = [...gridNodes, ...activeNodes];

    return (
        <section className="py-32 md:py-40 relative overflow-hidden bg-[#050505] border-y border-white/5">

            {/* Center Glow under the honeycomb */}
            <div className="absolute top-1/2 left-3/4 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] pointer-events-none z-0"></div>

            <div className="container mx-auto px-4 relative z-10 flex items-center min-h-[600px]">
                <div className="flex flex-col lg:flex-row w-full items-center gap-16 lg:gap-8">

                    {/* Left Text Content */}
                    <div className="w-full lg:w-5/12 text-left z-20">
                        <motion.h2
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.6 }}
                            className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold mb-6 tracking-tight leading-snug text-white"
                        >
                            Protecting your most <br />
                            <span className="text-primary font-serif italic drop-shadow-[0_0_15px_rgba(184,165,255,0.4)]">secure</span> sensitive data.
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-lg text-gray-400 max-w-xl mb-10 leading-relaxed font-light"
                        >
                            When it comes to school and pupil information, trust is paramount. EvidInsight's architecture was designed to keep your institution's data safe through adherence to industry-best security practices out of the box.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="flex flex-col gap-5"
                        >
                            {[
                                'Data encrypted at rest and in transit.',
                                'Multi-Academy Trust data segregation.',
                                'Built on enterprise-grade cloud infrastructure.'
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4">
                                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 shrink-0">
                                        <Shield className="w-3.5 h-3.5 text-primary" />
                                    </div>
                                    <span className="text-sm md:text-base text-gray-300 font-light">{item}</span>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right SVG Hexagon Matrix */}
                    <div className="w-full lg:w-7/12 relative flex items-center justify-center shrink-0">
                        {/* The viewBox is strictly square 800x800 to perfectly house our 4-radius hex math */}
                        <svg viewBox="0 0 800 800" className="w-full h-full max-w-[800px] drop-shadow-2xl z-10" style={{ overflow: 'visible' }}>
                            {allNodes.map((node, idx) => (
                                <Hex key={`${node.q}-${node.r}`} {...node} />
                            ))}
                        </svg>
                    </div>

                </div>
            </div>
        </section>
    );
}
