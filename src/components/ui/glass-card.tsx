import * as React from "react"
import { cn } from "@/lib/utils"

const GlassCard = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn(
            "relative overflow-hidden rounded-2xl glass-panel group transition-all duration-300 hover:border-primary/30",
            className
        )}
        {...props}
    >
        {/* Subtle inner hover glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        <div className="relative z-10 p-6 md:p-8 h-full">
            {props.children}
        </div>
    </div>
))
GlassCard.displayName = "GlassCard"

export { GlassCard }
