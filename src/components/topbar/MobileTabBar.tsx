"use client";

import React, { useState } from "react";
import { BellIcon, ChatIcon, SearchIcon, HomeIcon, UserIcon } from "../ProductDetails";

type FanItem = {
    icon: React.ReactNode;
    delay: number;
    pos: { x: number; y: number };
};

export default function MobileTabBar() {
    const [open, setOpen] = useState(false);

    const items: FanItem[] = [
        { icon: <SearchIcon />, delay: 0, pos: { x: 0, y: -72 } },
        { icon: <ChatIcon />, delay: 60, pos: { x: -62, y: -45 } },
        { icon: <BellIcon />, delay: 120, pos: { x: 62, y: -45 } },
    ];

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
            {/* Backdrop */}
            {open && (
                <div
                    className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
                    onClick={() => setOpen(false)}
                />
            )}

            {/* Fan icons */}
            <div className="relative z-50">
                {items.map((item, i) => (
                    <button
                        key={i}
                        onClick={() => setOpen(false)}
                        style={{
                            position: "fixed",
                            bottom: "38px",
                            left: "50%",
                            transform: open
                                ? `translate(calc(-50% + ${item.pos.x}px), ${item.pos.y}px) scale(1)`
                                : `translate(-50%, 0px) scale(0)`,
                            transition: open
                                ? `transform 0.35s cubic-bezier(0.34,1.56,0.64,1) ${item.delay}ms, opacity 0.3s ease ${item.delay}ms`
                                : `transform 0.25s cubic-bezier(0.55,0,1,0.45) ${(2 - i) * 50}ms, opacity 0.2s ease ${(2 - i) * 50}ms`,
                            opacity: open ? 1 : 0,
                            pointerEvents: open ? "auto" : "none",
                            zIndex: 51,
                        }}
                    >
                        <div className="w-12 h-12 rounded-full bg-sky-500 flex items-center justify-center shadow-lg text-white hover:bg-sky-400 active:scale-95 transition-transform">
                            {item.icon}
                        </div>
                    </button>
                ))}
            </div>

            {/* Bar */}
            <div className="relative z-50 bg-white rounded-t-3xl shadow-[0_-4px_24px_rgba(0,0,0,0.12)]">
                <div className="flex items-end justify-around pb-4 pt-1">
                    {/* Home */}
                    <button className="flex flex-col items-center gap-1 pt-3 text-gray-400 hover:text-gray-600">
                        <HomeIcon />
                        <span className="text-xs font-medium">Home</span>
                    </button>

                    {/* Center notch */}
                    <div className="relative -mt-6" style={{ width: 72 }}>
                        <div
                            className="absolute left-1/2 -translate-x-1/2 -top-3 w-20 h-10 bg-white"
                            style={{ borderRadius: "0 0 40px 40px" }}
                        />
                        <button
                            onClick={() => setOpen((v) => !v)}
                            className="relative z-10 w-14 h-14 rounded-full bg-sky-500 text-white flex items-center justify-center shadow-[0_4px_20px_rgba(14,165,233,0.5)] hover:bg-sky-400 active:scale-95 transition-all duration-200 mx-auto"
                            style={{ marginTop: -20 }}
                        >
                            <span
                                className="text-3xl font-light leading-none transition-transform duration-300"
                                style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
                            >
                                +
                            </span>
                        </button>
                    </div>

                    {/* Profile */}
                    <button className="flex flex-col items-center gap-1 pt-3 text-sky-500">
                        <UserIcon />
                        <span className="text-xs font-semibold">Profile</span>
                    </button>
                </div>

                <div className="h-1 bg-white flex justify-center pb-1">
                    <div className="w-32 h-1 bg-gray-300 rounded-full" />
                </div>
                <div className="h-3 bg-white" />
            </div>
        </div>
    );
}
