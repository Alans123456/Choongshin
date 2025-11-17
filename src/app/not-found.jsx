"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function NotFound() {
    const router = useRouter();

    return (
        <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 via-white to-sky-50 px-4 sm:px-6 py-8">
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl w-full bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl p-6 sm:p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center"
                aria-labelledby="notfound-title"
            >
                {/* Left: Illustration + big code */}
                <div className="flex flex-col items-start gap-4 sm:gap-6">
                    <div className="flex items-center gap-4">
                        <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-rose-400 to-indigo-500 shadow-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 sm:w-8 sm:h-8 text-white" viewBox="0 0 24 24" fill="none">
                                <path d="M11 2L2 7l9 5 9-5-9-5z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M2 17l9 5 9-5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M2 12l9 5 9-5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div>
                            <h2 id="notfound-title" className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-800">
                                Oops — this page can't be found
                            </h2>
                            <p className="text-sm text-slate-500">But don’t worry — we’ll help you get back on track.</p>
                        </div>
                    </div>

                    <div>
                        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-indigo-600">
                            404
                        </h1>
                        <p className="mt-2 text-slate-600">The page you’re looking for might have been removed or the URL is incorrect.</p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 mt-4 w-full">
                        <button
                            onClick={() => router.push("/")}
                            className="w-full sm:w-auto inline-flex justify-center items-center gap-3 px-5 py-2.5 rounded-lg shadow-md text-sm font-medium bg-indigo-600 text-white hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                        >
                            Take me home
                        </button>

                        <button
                            onClick={() => router.back()}
                            className="w-full sm:w-auto inline-flex justify-center items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border border-slate-200 bg-white hover:bg-slate-50"
                        >
                            Go back
                        </button>
                    </div>

                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            const form = e.currentTarget;
                            const q = (form.search).value.trim();
                            if (!q) return;
                            router.push(`/${encodeURIComponent(q)}`);
                        }}
                        className="mt-4 w-full"
                    >
                        <label htmlFor="search" className="sr-only">
                            Search the site
                        </label>
                        <div className="flex items-center gap-2 w-full">
                            <input
                                id="search"
                                name="search"
                                type="search"
                                placeholder="Search for help, pages or products..."
                                className="flex-1 min-w-0 px-4 py-2 rounded-lg border border-slate-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-200"
                                aria-label="Search the site"
                            />
                            <button type="submit" className="px-4 py-2 rounded-lg bg-slate-100 border border-slate-200 hover:bg-slate-50">
                                Search
                            </button>
                        </div>
                    </form>

                    <p className="mt-4 text-xs text-slate-400">
                        Still stuck?{" "}
                        <button onClick={() => router.push('/contact')} className="underline">
                            Contact us
                        </button>{" "}
                        — we’ll help you find it.
                    </p>
                </div>

                {/* Right: Decorative scene */}
                <div className="flex items-center justify-center">
                    <motion.div
                        initial={{ rotate: -8, scale: 0.95 }}
                        animate={{ rotate: 0, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-full max-w-md p-4 sm:p-6 rounded-xl bg-gradient-to-b from-white to-slate-50 border border-slate-100 shadow-xl"
                    >
                        <div className="flex items-center justify-center mb-4">
                            {/* Stylized compass */}
                            <svg viewBox="0 0 120 120" className="w-36 h-36 sm:w-48 sm:h-48">
                                <defs>
                                    <linearGradient id="g1" x1="0" x2="1">
                                        <stop offset="0" stopColor="#7c3aed" />
                                        <stop offset="1" stopColor="#06b6d4" />
                                    </linearGradient>
                                </defs>
                                <circle cx="60" cy="60" r="56" fill="url(#g1)" opacity="0.12" />
                                <g transform="translate(60,60)">
                                    <circle r="36" fill="#fff" stroke="#e6e9ef" strokeWidth="1.5" />
                                    <path d="M0-28 L6 -4 L28 0 L6 4 L0 28 L-6 4 L-28 0 L-6 -4 Z" fill="url(#g1)" opacity="0.95" />
                                    <circle r="5" fill="#0f172a" />
                                </g>
                            </svg>
                        </div>

                        <div className="text-center">
                            <p className="text-sm md:text-base text-slate-500">Take a different direction — try these quick links</p>

                            <ul className="mt-4 grid grid-cols-1 gap-2 text-left">
                                <li>
                                    <a onClick={() => router.push('/')} className="block p-3 rounded-lg hover:bg-slate-50 cursor-pointer">
                                        • Home
                                    </a>
                                </li>
                                <li>
                                    <a onClick={() => router.push('/blog')} className="block p-3 rounded-lg hover:bg-slate-50 cursor-pointer">
                                        • Product
                                    </a>
                                </li>
                                <li>
                                    <a onClick={() => router.push('/contact')} className="block p-3 rounded-lg hover:bg-slate-50 cursor-pointer">
                                        • Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </motion.section>
        </main>
    );
}
