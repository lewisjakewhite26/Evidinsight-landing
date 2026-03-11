import React from "react"
import { cn } from "@/lib/utils"

interface GlowEffectProps extends React.HTMLAttributes<HTMLDivElement> {
    color?: string
    blur?: string
    opacity?: number
    size?: string
}

export function GlowEffect({
    className,
    color = "bg-primary",
    blur = "blur-[120px]",
    opacity = 15,
    size = "w-[600px] h-[600px]",
    ...props
}: GlowEffectProps) {
    return (
        <div
            className={cn(
                "absolute rounded-full pointer-events-none -z-10 mix-blend-screen",
                color,
                blur,
                size,
                `opacity-${opacity}`,
                className
            )}
            aria-hidden="true"
            {...props}
        />
    )
}
