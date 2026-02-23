import React, { useCallback } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { t1Transition } from '../../lib/motionConfig';
import MagneticButton from '../../lib/MagneticButton';

const Hero = () => {
    // ── Parallax motion values ─────────────────────────────────────────────
    // Normalised to -1…1 relative to the section centre
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Radial glow drifts softly — max ±12px
    const glowX = useTransform(mouseX, [-1, 1], [-12, 12]);
    const glowY = useTransform(mouseY, [-1, 1], [-12, 12]);

    // Diagonal stripe drifts slightly further for subtle depth — max ±20px/±10px
    const stripeX = useTransform(mouseX, [-1, 1], [-20, 20]);
    const stripeY = useTransform(mouseY, [-1, 1], [-10, 10]);

    const handleMouseMove = useCallback((e) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        mouseX.set(((e.clientX - left) / width) * 2 - 1);
        mouseY.set(((e.clientY - top) / height) * 2 - 1);
    }, [mouseX, mouseY]);

    // Smoothly return background to centre on mouse-leave
    const handleMouseLeave = useCallback(() => {
        animate(mouseX, 0, { duration: 0.9, ease: 'easeOut' });
        animate(mouseY, 0, { duration: 0.9, ease: 'easeOut' });
    }, [mouseX, mouseY]);

    return (
        <section
            id="home"
            className="relative h-screen flex items-center justify-center overflow-hidden"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {/* ── Stage 0 — Background fades in before any content ──────── */}
            <motion.div
                className="absolute inset-0 bg-bg z-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
            >
                {/* Parallax radial glow */}
                <motion.div
                    className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,135,0.15)_0%,transparent_70%)] opacity-60"
                    style={{ x: glowX, y: glowY }}
                />

                {/* Diagonal Wave Pattern — static texture, no parallax */}
                <div className="absolute inset-0 overflow-hidden opacity-10">
                    <svg className="absolute w-full h-full" preserveAspectRatio="none">
                        <defs>
                            <pattern id="diagonal-waves" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                                <path
                                    d="M0,50 Q25,30 50,50 T100,50"
                                    fill="none"
                                    stroke="rgba(236, 253, 245, 0.3)"
                                    strokeWidth="2"
                                />
                                <path
                                    d="M0,70 Q25,50 50,70 T100,70"
                                    fill="none"
                                    stroke="rgba(236, 253, 245, 0.2)"
                                    strokeWidth="1.5"
                                />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#diagonal-waves)" transform="rotate(-15 960 540)" />
                    </svg>
                </div>

                {/* Parallax diagonal accent stripe — deeper layer */}
                <motion.div
                    className="absolute w-[150%] h-[800px] bg-gradient-to-br from-transparent via-white/5 to-transparent"
                    style={{
                        rotate: -15,
                        top: '20%',
                        right: '-20%',
                        x: stripeX,
                        y: stripeY,
                    }}
                />
            </motion.div>

            <div className="container relative z-10 text-center max-w-4xl px-4">

                {/* ── Stage 1 — Heading: scale 0.92 → 1 + opacity ─────────── */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ ...t1Transition, delay: 0.1 }}
                >
                    <span className="block font-sans text-sm md:text-base lowercase tracking-[0.5em] text-accent/80 mb-6">
                        we
                    </span>
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-black tracking-tighter leading-none mb-12 text-glow">
                        <span className="text-accent uppercase">GFG</span> <span className="text-text uppercase">KARE</span>
                    </h1>
                </motion.div>

                {/* ── Stage 2a — Subtitle (delay 0.4s) ────────────────────── */}
                <motion.p
                    className="text-lg md:text-xl text-text-muted font-light leading-relaxed tracking-wide max-w-2xl mx-auto mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: 'easeOut', delay: 0.4 }}
                >
                    Cultivating technical excellence and leadership in the quiet pursuit of mastery.
                </motion.p>

                {/* ── Stage 2b — CTA (delay 0.6s) + periodic glow pulse ────── */}
                <motion.div
                    className="flex gap-8 justify-center items-center"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: 'easeOut', delay: 0.6 }}
                >
                    {/* Wrapper provides stacking context for the glow layer */}
                    <MagneticButton>
                    <div className="relative inline-flex">
                        {/* Soft glow pulse — fires every ~8s, lasts 2s */}
                        <motion.span
                            className="absolute inset-0 rounded-full pointer-events-none"
                            animate={{
                                boxShadow: [
                                    '0 0 0px 0px rgba(0,255,135,0)',
                                    '0 0 22px 7px rgba(0,255,135,0.28)',
                                    '0 0 0px 0px rgba(0,255,135,0)',
                                ],
                            }}
                            transition={{
                                duration: 2,
                                ease: 'easeInOut',
                                repeat: Infinity,
                                repeatDelay: 6,
                            }}
                        />
                        <button
                            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                            className="group relative px-8 py-3 overflow-hidden rounded-full transition-all duration-300"
                        >
                            <span className="relative z-10 text-xs font-bold uppercase tracking-[0.2em] text-accent group-hover:text-bg transition-colors">
                                Enter
                            </span>
                            <div className="absolute inset-0 border border-accent/30 rounded-full group-hover:bg-accent transition-all duration-500"></div>
                        </button>
                    </div>
                    </MagneticButton>
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;
