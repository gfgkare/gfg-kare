import React, { useRef } from 'react';
import { motion, useMotionValue, animate } from 'framer-motion';

/**
 * MagneticButton
 *
 * Wraps any child element and applies a subtle magnetic pull toward
 * the cursor on hover, snapping back smoothly on mouse leave.
 *
 * Props:
 *   strength  — multiplier for cursor offset (default 0.15 → ~8-10px max at typical button sizes)
 *   maxPx     — hard clamp on max displacement in px (default 9)
 *   className — forwarded to the motion wrapper div
 */
const MagneticButton = ({ children, strength = 0.15, maxPx = 9, className = '' }) => {
    const ref = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const onMouseMove = (e) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const dx = e.clientX - (rect.left + rect.width / 2);
        const dy = e.clientY - (rect.top + rect.height / 2);
        x.set(Math.min(Math.max(dx * strength, -maxPx), maxPx));
        y.set(Math.min(Math.max(dy * strength, -maxPx), maxPx));
    };

    const onMouseLeave = () => {
        animate(x, 0, { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] });
        animate(y, 0, { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] });
    };

    return (
        <motion.div
            ref={ref}
            className={`inline-flex ${className}`}
            style={{ x, y }}
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
        >
            {children}
        </motion.div>
    );
};

export default MagneticButton;
