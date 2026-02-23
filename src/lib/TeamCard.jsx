import React from 'react';
import TiltCard from './TiltCard';

/**
 * TeamCard
 *
 * Canonical card wrapper for all team member cards across the site.
 * Encapsulates the consistent surface, border, padding, and hover treatment
 * so every team section — Faculty, CoreTeam, Founders, and past rosters —
 * renders from a single visual contract.
 *
 * Props:
 *   variant   — accepted but has no visual effect; all cards use the same
 *               surface specification. Kept for call-site compatibility.
 *   className — additive classes for context-specific layout overrides,
 *               e.g. `flex-shrink-0 w-48` for horizontal-scroll containers.
 *   ...rest   — forwarded directly to TiltCard (initial, whileInView, viewport,
 *               transition, key, etc.)
 */
const TeamCard = ({ children, className = '', variant, ...motionProps }) => (
    <TiltCard
        className={`group relative flex flex-col items-center text-center p-6 rounded-xl transition-all duration-500 bg-accent/5 border border-accent/20 hover:bg-bg-surface/50 hover:border-accent/30 ${className}`}
        {...motionProps}
    >
        {children}
    </TiltCard>
);

export default TeamCard;
