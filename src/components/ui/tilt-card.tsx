"use client";

import React, { useRef, useState, MouseEvent } from "react";
import { motion, useSpring, useMotionValue, useTransform, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface TiltCardProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode;
    tiltAmount?: number;
    glareOpacity?: number;
}

export function TiltCard({
    children,
    className,
    tiltAmount = 15,
    glareOpacity = 0.15,
    ...props
}: TiltCardProps) {
    const ref = useRef<HTMLDivElement>(null);

    // Mouse position values
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Springs for smooth physics
    const springConfig = { damping: 20, stiffness: 200, mass: 0.5 };
    const mouseXSpring = useSpring(x, springConfig);
    const mouseYSpring = useSpring(y, springConfig);

    // Transform mouse values to 3D rotation
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [tiltAmount, -tiltAmount]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-tiltAmount, tiltAmount]);

    // Glare position
    const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]);
    const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"]);

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();

        // Calculate mouse position relative to center of card (-0.5 to 0.5)
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const posX = (e.clientX - centerX) / rect.width;
        const posY = (e.clientY - centerY) / rect.height;

        x.set(posX);
        y.set(posY);
    };

    const handleMouseEnter = () => setIsHovered(true);

    const handleMouseLeave = () => {
        setIsHovered(false);
        // Reset to center smoothly
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX: isHovered ? rotateX : 0,
                rotateY: isHovered ? rotateY : 0,
                transformStyle: "preserve-3d",
            }}
            className={cn(
                "relative rounded-2xl overflow-hidden transition-shadow duration-300",
                isHovered ? "shadow-[0_30px_60px_rgba(0,0,0,0.8)] z-50" : "shadow-[0_10px_30px_rgba(0,0,0,0.5)]",
                className
            )}
            {...props}
        >
            {/* Glare Effect */}
            <motion.div
                className="pointer-events-none absolute inset-0 z-50 transition-opacity duration-300"
                style={{
                    background: `radial-gradient(circle at center, rgba(255,255,255,${glareOpacity}) 0%, transparent 60%)`,
                    left: `calc(${glareX} - 100%)`,
                    top: `calc(${glareY} - 100%)`,
                    width: "200%",
                    height: "200%",
                    opacity: isHovered ? 1 : 0,
                    mixBlendMode: "overlay"
                }}
            />

            {/* Content wrapper with slight z-translation for true 3D depth */}
            <div
                className="w-full h-full transform-style-3d bg-inherit"
                style={{ transform: isHovered ? "translateZ(30px)" : "translateZ(0px)", transition: "transform 0.3s ease-out" }}
            >
                {children}
            </div>
        </motion.div>
    );
}
