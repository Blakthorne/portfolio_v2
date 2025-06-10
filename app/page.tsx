"use client";

import { animate, createScope, Scope } from "animejs";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Home() {
    const root = useRef(null);
    const scope = useRef<Scope | null>(null);

    useEffect(() => {
        scope.current = createScope({ root }).add((self) => {
            // Every anime.js instances declared here are now scopped to <div ref={root}>

            // Created a bounce animation loop
            animate(".span", {
                // Property keyframes
                y: [
                    { to: "-2.75rem", ease: "outExpo", duration: 600 },
                    { to: 0, ease: "outBounce", duration: 800, delay: 100 }
                ],
                // Property specific parameters
                rotate: {
                    from: "-1turn",
                    delay: 0
                },
                delay: (_, i) => i * 50, // Function based value
                ease: "inOutCirc",
                loopDelay: 1000,
                loop: false
            });
        });

        // Properly cleanup all anime.js instances declared inside the scope
        return () => scope.current?.revert();
    }, []);

    return (
        <div
            className="flex h-screen flex-col items-start justify-between"
            ref={root}
        >
            <div className="invisible">
                --this is a hidden element, you aren't supposed to see this--
            </div>
            <div className="mx-56">
                <div className="-mt-24 flex bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text px-56 pl-8 pt-24 text-left font-sans text-8xl font-extrabold text-transparent">
                    <div className="span">H</div>
                    <div className="span">I</div>
                    <div className="span">,</div>
                    <div className="span">&nbsp;</div>
                    <div className="span">I</div>
                    <div className="span">'</div>
                    <div className="span">M</div>
                    <div className="span">&nbsp;</div>
                    <div className="span">D</div>
                    <div className="span">A</div>
                    <div className="span">V</div>
                    <div className="span">I</div>
                    <div className="span">D</div>
                </div>

                <div className="mt-8 pl-8 text-left font-mono text-xl font-extrabold">
                    Thanks for visiting!
                </div>
            </div>
            <div className="mb-4 flex w-screen items-end justify-between">
                <div className="box-content h-4 w-[35vw] border-b-[1px] bg-slate-600 text-white" />
                <div className="box-content h-4 w-[5vw] rounded-br-full border-b-[1px] border-r-[1px] bg-slate-600 text-white" />
                <div className="-ml-[0.6px] mb-4 box-content h-4 w-[5vw] rounded-tl-full border-l-[1px] border-t-[1px] text-white" />
                <div className="box-border h-4 w-[10vw] border-t-[1px] pb-8 text-white">
                    <Link
                        className="mt-4 text-center font-mono text-white"
                        href="#"
                    >
                        read more about me
                    </Link>
                </div>
                <div className="-mr-[0.6px] mb-4 box-content h-4 w-[5vw] rounded-tr-full border-r-[1px] border-t-[1px] text-white" />
                <div className="box-content h-4 w-[5vw] rounded-bl-full border-b-[1px] border-l-[1px] bg-slate-600 text-white" />
                <div className="box-content h-4 w-[35vw] border-b-[1px] bg-slate-600 text-white" />
            </div>
        </div>
    );
}
