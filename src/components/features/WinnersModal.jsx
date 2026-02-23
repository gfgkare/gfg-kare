import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { getEventWinners } from '../../services/dataService';

// ─── Animation constants ────────────────────────────────────────────────────

// Backdrop: opacity only — builds the dimmed stage first
const backdropVariants = {
    hidden:  { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3, ease: 'easeOut' } },
    exit:    { opacity: 0, transition: { duration: 0.25, ease: 'easeIn', delay: 0.05 } },
};

// Panel: scale 0.96→1 + opacity — premium lift-in feel
const panelVariants = {
    hidden:  { opacity: 0, scale: 0.96 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] }, // custom ease-out expo
    },
    exit:    {
        opacity: 0,
        scale: 0.96,
        transition: { duration: 0.2, ease: 'easeIn' },
    },
};

// ─── Component ──────────────────────────────────────────────────────────────

/**
 * WinnersModal
 *
 * Designed to be a direct child of <AnimatePresence> in the parent
 * (Events.jsx). Do NOT wrap this component in AnimatePresence internally.
 *
 * Animation sequence on open:
 *   0ms  — backdrop fades in (0.3s, easeOut)
 *   0ms  — panel scales 0.96→1 + opacity (0.35s, expo ease-out)
 *
 * Animation sequence on close:
 *   0ms  — panel scales down + fades (0.2s, easeIn)
 *   50ms — backdrop fades (0.25s, easeIn) — lingers slightly to avoid abrupt cut
 *
 * Total unmount delay: ~250ms. No abrupt disappearance.
 */
const WinnersModal = ({ eventId, onClose }) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const result = await getEventWinners(eventId);
            setData(result);
            setLoading(false);
        };
        fetchData();
    }, [eventId]);

    const winners = data?.winners?.length
        ? data.winners
        : (data?.topWinners || []).map((winner, idx) => ({
            rank: winner.rank || (idx === 0 ? '1st' : idx === 1 ? '2nd' : '3rd'),
            title: winner.project || winner.title || winner.name,
            image: winner.image,
        }));

    return (
        <>
            {/* ── Layer 1: Backdrop ─────────────────────────────────────────── */}
            <motion.div
                key="modal-backdrop"
                className="fixed inset-0 z-[199] bg-bg/60 backdrop-blur-md"
                variants={backdropVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={onClose}
                aria-hidden="true"
            />

            {/* ── Layer 2: Panel container ──────────────────────────────────── */}
            <motion.div
                key="modal-panel-wrap"
                className="fixed inset-0 z-[200] flex items-center justify-center p-4 pointer-events-none"
                variants={panelVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <div
                    className="
                        relative bg-bg-surface border border-secondary/40 rounded-2xl
                        w-full max-w-4xl max-h-[90vh] overflow-y-auto overflow-x-hidden
                        pointer-events-auto
                        shadow-[0_24px_80px_rgba(0,0,0,0.55),0_0_0_1px_rgba(0,255,135,0.10),0_8px_32px_rgba(0,0,0,0.35)]
                    "
                    onClick={e => e.stopPropagation()}
                >
                    {/* Close button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-text-muted hover:text-accent transition-colors z-10"
                        aria-label="Close modal"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <div className="p-8 md:p-12">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12 text-accent">
                            Hall of Victory
                        </h2>

                        {loading ? (
                            <div className="flex justify-center items-center h-64">
                                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent" />
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {winners.map((winner, idx) => (
                                    <div
                                        key={`${winner.rank}-${idx}`}
                                        className="group bg-bg/60 border border-secondary/30 rounded-xl overflow-hidden shadow-[0_0_0_1px_rgba(0,255,170,0.08)] hover:shadow-[0_0_24px_rgba(0,255,170,0.15)] transition-shadow"
                                    >
                                        <div className="relative aspect-[4/3] overflow-hidden">
                                            <img
                                                src={winner.image}
                                                alt={`${winner.rank} place group`}
                                                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                                                loading="lazy"
                                            />
                                            <div className="absolute top-3 left-3 bg-accent/90 text-bg text-xs font-bold tracking-widest px-3 py-1 rounded-full shadow-lg">
                                                {winner.rank}
                                            </div>
                                        </div>
                                        <div className="p-5">
                                            <h3 className="text-sm uppercase tracking-widest text-text-muted">Team</h3>
                                            <p className="mt-2 text-lg font-semibold text-text">
                                                {winner.title}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </motion.div>
        </>
    );
};

export default WinnersModal;
