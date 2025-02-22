// components/CustomCursor.tsx
"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const CustomCursor = () => {
    const cursorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!cursorRef.current) return;

        const moveCursor = (e: MouseEvent) => {
            gsap.to(cursorRef.current, {
                x: e.clientX + 50,
                y: e.clientY + 50,
                duration: 2.5,
                ease: "elastic.out(1,0.75)",
            });
        };

        const navbar = (e: MouseEvent) => {
            gsap.to(cursorRef.current, {
            });
        };

        window.addEventListener("mousemove", moveCursor);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
        };
    }, []);

    return (
        <div
            ref={cursorRef}
            className="fixed top-0 left-0 w-6 h-6 bg-[#04FF3E] opacity-50 rounded-full pointer-events-none z-50 mix-blend-difference"
        />
    );
};

export default CustomCursor;
