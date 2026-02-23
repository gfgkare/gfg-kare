import React, { useCallback } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

/**
 * TiltCard — drop-in replacement for motion.div on any card element.
 *
 * Provides cursor-relative 3D tilt (default max ±8°), a dynamic box-shadow
 * that shifts opposite to the tilt direction, and a subtle accent border glow
 * that intensifies as the card tilts. Smoothly returns to rest on mouse-leave.
 *
 * All standard motion.div props (initial, whileInView, viewport, transition,
 * whileHover, whileTap, etc.) are passed straight through.
 */
const TiltCard = ({ children, className, style, maxDeg = 8, ...motionProps }) => {
    // Normalised cursor position: -1 (left/top) … +1 (right/bottom)
    const rawX = useMotionValue(0);
    const rawY = useMotionValue(0);

    // Cursor right  → card tilts right  (+rotateY)
    // Cursor toward top → card tilts up (-rotateX feels natural for "leaning toward viewer")
    const rotateX = useTransform(rawY, [-1, 1], [maxDeg, -maxDeg]);
    const rotateY = useTransform(rawX, [-1, 1], [-maxDeg, maxDeg]);

    // Dynamic shadow: offset moves opposite to cursor (depth illusion)
    // + subtle accent glow ring that fades in with tilt intensity
    const boxShadow = useTransform(
        [rawX, rawY],
        ([x, y]) => {
            const absX = Math.abs(x);
            const absY = Math.abs(y);
            const intensity = (absX + absY) * 0.5; // 0 at rest, 1 at full tilt
            const shadowX = -x * 12; // px
            const shadowY = -y * 12; // px
            const glowAlpha = intensity * 0.18;
            return `${shadowX}px ${shadowY}px 32px rgba(0,0,0,0.28), 0 0 0 1px rgba(0,255,135,${glowAlpha.toFixed(3)})`;
        }
    );

    const onMouseMove = useCallback((e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        rawX.set(((e.clientX - rect.left) / rect.width) * 2 - 1);
        rawY.set(((e.clientY - rect.top) / rect.height) * 2 - 1);
    }, [rawX, rawY]);

    const onMouseLeave = useCallback((e) => {
        animate(rawX, 0, { duration: 0.3, ease: 'easeOut' });
        animate(rawY, 0, { duration: 0.3, ease: 'easeOut' });
        // Forward the event if a parent handler was passed
        motionProps.onMouseLeave?.(e);
    }, [rawX, rawY]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <motion.div
            className={className}
            style={{
                rotateX,
                rotateY,
                transformPerspective: 800,
                boxShadow,
                ...style,
            }}
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
            {...motionProps}
        >
            {children}
        </motion.div>
    );
};

export default TiltCard;
