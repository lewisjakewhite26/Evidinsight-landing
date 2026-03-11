"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

interface TypewriterEffectProps {
    words: {
        text: string;
        className?: string;
    }[];
    className?: string;
    cursorClassName?: string;
}

export const TypewriterEffect = ({
    words,
    className,
    cursorClassName,
}: TypewriterEffectProps) => {
    // Track window scroll
    const { scrollY } = useScroll();

    const wordsArray = words.map((word, wordIdx) => {
        const textArray = word.text.split("");
        // Append a non-breaking space after each word except the last
        // to allow the cursor to naturally travel over spaces between words.
        if (wordIdx < words.length - 1) {
            textArray.push("\u00A0");
        }
        return {
            ...word,
            text: textArray,
        };
    });

    const totalChars = wordsArray.reduce((acc, word) => acc + word.text.length, 0);

    let globalIndex = 0;

    return (
        <div className={cn("inline-flex items-center flex-wrap justify-center", className)}>
            <div className="inline-block">
                {wordsArray.map((word, wordIdx) => {
                    return (
                        <div key={`word-${wordIdx}`} className="inline-block">
                            {word.text.map((char) => {
                                const currentIndex = globalIndex;
                                globalIndex++;
                                return (
                                    <Char
                                        key={`char-${currentIndex}`}
                                        char={char}
                                        index={currentIndex}
                                        totalChars={totalChars}
                                        scrollY={scrollY}
                                        className={word.className}
                                        cursorClassName={cursorClassName}
                                    />
                                );
                            })}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

const Char = ({
    char,
    index,
    totalChars,
    scrollY,
    className,
    cursorClassName,
}: {
    char: string;
    index: number;
    totalChars: number;
    scrollY: MotionValue<number>;
    className?: string;
    cursorClassName?: string;
}) => {
    const scrollOffset = 20;
    const pixelsPerChar = 7;
    const threshold = scrollOffset + index * pixelsPerChar;

    // Snap opacity from 0 to 1 precisely when scrolled past threshold
    // Opacity 0 ensures the character still takes up layout space so words don't shift.
    const opacity = useTransform(scrollY, (y) => (y > threshold ? 1 : 0));

    const isFirstChar = index === 0;
    const isLastChar = index === totalChars - 1;

    // Render the initial cursor BEFORE typing starts
    const initialCursorDisplay = useTransform(scrollY, (y) => {
        const currentTypedIndex = Math.floor((y - scrollOffset) / pixelsPerChar);
        return currentTypedIndex < 0 ? "block" : "none";
    });

    // Render the cursor AFTER this character if it's currently the last one typed
    const cursorDisplay = useTransform(scrollY, (y) => {
        const currentTypedIndex = Math.floor((y - scrollOffset) / pixelsPerChar);
        if (isLastChar && currentTypedIndex >= index) return "block";
        return currentTypedIndex === index ? "block" : "none";
    });

    return (
        <span className="relative inline-block">
            {/* Initial state cursor placed before the very first character */}
            {isFirstChar && (
                <motion.span
                    style={{ display: initialCursorDisplay }}
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }}
                    className={cn(
                        "absolute -left-[4px] bottom-[10%] w-[3px] h-[80%] bg-primary rounded-sm z-10",
                        cursorClassName
                    )}
                />
            )}

            <motion.span
                style={{ opacity }}
                className={cn("inline-block", className)}
            >
                {char}
            </motion.span>

            {/* The trailing cursor that maps directly to the current typed character */}
            <motion.span
                style={{ display: cursorDisplay }}
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }}
                className={cn(
                    "absolute -right-[2px] bottom-[10%] w-[3px] h-[80%] bg-primary rounded-sm z-10",
                    cursorClassName
                )}
            />
        </span>
    );
};
