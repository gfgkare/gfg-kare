import React from 'react';
import { motion } from 'framer-motion';
import {
    fadeInitial, fadeWhileInView, t3Viewport,
} from '../../lib/motionConfig';

const PILLARS = ['Precision', 'Collaboration', 'Impact'];

/**
 * Manifesto — calm, typography-dominant strip.
 *
 * Animation contract:
 *   - Pure opacity fade only (no y / scale displacement).
 *   - Each element staggers at 0.15s — pacing is deliberate, not urgent.
 *   - No parallax, no tilt, no pulse. The words carry the rhythm.
 */
const Manifesto = () => (
    <section className="py-24 bg-bg border-t border-b border-secondary/10 overflow-hidden">
        <div className="container text-center">

            {/* Overline — static; no animation so it reads immediately */}
            <p className="text-[10px] uppercase tracking-[0.55em] text-accent/50 mb-10 font-medium">
                — established 2023 —
            </p>

            {/* Core statement — opacity only, 0.8s */}
            <motion.p
                className="text-2xl md:text-4xl lg:text-5xl font-serif font-semibold text-text leading-snug max-w-3xl mx-auto mb-16"
                initial={fadeInitial}
                whileInView={fadeWhileInView}
                viewport={t3Viewport}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                We don&rsquo;t just learn{' '}
                <span className="text-accent">to code</span>.{' '}
                We engineer the future.
            </motion.p>

            {/* Pillar divider rule — static */}
            <div className="w-16 h-[1px] bg-accent/30 mx-auto mb-12" />

            {/* Pillars — each fades in independently, 0.15s stagger, opacity only */}
            <div className="flex justify-center items-center gap-6 md:gap-10 flex-wrap">
                {PILLARS.map((pillar, i) => (
                    <React.Fragment key={pillar}>
                        <motion.span
                            className="text-xs md:text-sm font-bold uppercase tracking-[0.45em] text-text-muted"
                            initial={fadeInitial}
                            whileInView={fadeWhileInView}
                            viewport={t3Viewport}
                            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.25 + i * 0.15 }}
                        >
                            {pillar}
                        </motion.span>
                        {i < PILLARS.length - 1 && (
                            <span className="text-accent/25 text-lg select-none" aria-hidden>·</span>
                        )}
                    </React.Fragment>
                ))}
            </div>

        </div>
    </section>
);

export default Manifesto;
