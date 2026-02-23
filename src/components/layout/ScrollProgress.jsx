import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

/**
 * ScrollProgress — minimalist 3px scroll indicator fixed to the top of the viewport.
 * Uses a spring to soften the reading of scrollYProgress so the bar feels physical,
 * not mechanical.
 */
const ScrollProgress = () => {
    const { scrollYProgress } = useScroll();

    // Spring smoothing: responsive but not laggy
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 180,
        damping: 28,
        restDelta: 0.001,
    });

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 z-[100] origin-left pointer-events-none"
            style={{
                scaleX,
                height: '3px',
                background: 'rgba(0, 255, 135, 0.72)',
            }}
        />
    );
};

export default ScrollProgress;
