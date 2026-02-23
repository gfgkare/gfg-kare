import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { getTeam } from '../../services/dataService';
import TeamCard from '../../lib/TeamCard';
import {
    t3Viewport, t3Transition,
    hoverScale, tapScale,
    fadeInitial, fadeWhileInView,
} from '../../lib/motionConfig';

const CoreTeam = ({
    title = "Our Team",
    subtitle = "Technical Force",
    tenureFilter = "current",
    showViewAll = false,
    gridLayout = false,
    compact = false,
}) => {
    const [team, setTeam] = useState([]);
    const [loading, setLoading] = useState(true);
    const scrollContainerRef = useRef(null);

    useEffect(() => {
        const fetchTeam = async () => {
            const result = await getTeam();
            const filteredMembers = result.filter(m => {
                if (tenureFilter === "current") return m.tenure.includes("current");
                return m.tenure.includes(tenureFilter);
            });
            setTeam(filteredMembers);
            setLoading(false);
        };
        fetchTeam();
    }, [tenureFilter]);

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const scrollAmount = 400;
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    const sectionId = `team-${tenureFilter.replace(/\s+/g, '-').toLowerCase()}`;

    // Sizing tokens driven by compact flag
    const imgSize   = compact ? 'w-24 h-24' : 'w-20 h-20';
    const nameSize  = compact ? 'text-base'  : 'text-sm';
    const roleSize  = 'text-xs';
    const cardPad   = '!p-4';
    const linkedInIconSize = compact ? 'w-5 h-5' : 'w-4 h-4';

    return (
        <section
            id={sectionId}
            className={`${compact ? 'py-12' : 'py-8'} bg-bg-surface border-t border-secondary relative overflow-hidden`}
        >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[500px] bg-[radial-gradient(ellipse_at_top,rgba(255,215,0,0.03)_0%,transparent_70%)] pointer-events-none"></div>
            <div className="container relative z-10">
                <div className={`text-center ${compact ? 'mb-10' : 'mb-7'}`}>
                    {/* Fade-only — heading appears calmly; cards carry the directional entrance */}
                    <motion.h2
                        className="text-4xl md:text-5xl font-serif font-bold mb-4"
                        initial={fadeInitial}
                        whileInView={fadeWhileInView}
                        viewport={t3Viewport}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                    >
                        <span className="text-accent">{title.split(' ').slice(0, 2).join(' ')}</span> <span className="text-text">{title.split(' ').slice(2).join(' ')}</span>
                    </motion.h2>
                    <p className="text-secondary text-xs font-bold uppercase tracking-[0.2em] mb-4">{subtitle}</p>
                    {/* Divider — static */}
                    <div className="w-24 h-1 bg-accent mx-auto"></div>
                </div>

                {loading ? (
                    <div className="flex justify-center h-48 items-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent"></div>
                    </div>
                ) : team.length > 0 ? (
                    gridLayout ? (
                        /* ── Grid layout (faculty + core team) ── */
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                            {team.map((member, index) => (
                                <TeamCard
                                    key={member.id}
                                    className={cardPad}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -24 : 24 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={t3Viewport}
                                    transition={{ ...t3Transition, delay: Math.min(index * 0.08, 0.4) }}
                                >
                                    <div className="relative mb-4">
                                        <div className={`${imgSize} rounded-full border-2 border-secondary p-1 group-hover:border-accent transition-colors duration-500 overflow-hidden`}>
                                            <img
                                                src={member.image}
                                                alt={member.name}
                                                className="w-full h-full object-cover rounded-full transition-[transform] duration-500 group-hover:scale-[1.04]"
                                            />
                                        </div>
                                        <a
                                            href={member.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="absolute bottom-0 right-0 bg-accent p-1.5 rounded-full text-bg opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:scale-110"
                                        >
                                            <svg className={`${linkedInIconSize} fill-current`} viewBox="0 0 24 24">
                                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                            </svg>
                                        </a>
                                    </div>
                                    <h3 className={`${nameSize} font-bold text-text underline decoration-accent/0 group-hover:decoration-accent/100 group-hover:-translate-y-[3px] transition-all duration-300 text-center`}>
                                        {member.name}
                                    </h3>
                                    <p className={`text-accent ${roleSize} uppercase tracking-widest text-center mt-1`}>
                                        {member.role}
                                    </p>
                                </TeamCard>
                            ))}
                        </div>
                    ) : (
                        /* ── Horizontal scroll layout (default) ── */
                        <div className="relative group/slider">
                            <motion.button
                                onClick={() => scroll('left')}
                                className="hidden md:flex absolute -left-10 lg:-left-14 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full border border-secondary bg-bg/80 backdrop-blur-sm items-center justify-center text-text-muted hover:text-accent hover:border-accent transition-all z-20 opacity-0 group-hover/slider:opacity-100 shadow-lg"
                                whileHover={hoverScale}
                                whileTap={tapScale}
                                aria-label="Previous Team Members"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </motion.button>

                            <motion.button
                                onClick={() => scroll('right')}
                                className="hidden md:flex absolute -right-10 lg:-right-14 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full border border-secondary bg-bg/80 backdrop-blur-sm items-center justify-center text-text-muted hover:text-accent hover:border-accent transition-all z-20 opacity-0 group-hover/slider:opacity-100 shadow-lg"
                                whileHover={hoverScale}
                                whileTap={tapScale}
                                aria-label="Next Team Members"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </motion.button>

                            <div
                                ref={scrollContainerRef}
                                className="flex overflow-x-auto gap-5 pb-2 scrollbar-hide"
                            >
                            {team.map((member, index) => (
                                <TeamCard
                                    key={member.id}
                                    className="flex-shrink-0 w-36 !p-4"
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -24 : 24 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={t3Viewport}
                                    transition={{ ...t3Transition, delay: Math.min(index * 0.1, 0.4) }}
                                >
                                    <div className="relative mb-3">
                                        <div className="w-24 h-24 rounded-full border-2 border-secondary p-1 group-hover:border-accent transition-colors duration-500 overflow-hidden">
                                            <img
                                                src={member.image}
                                                alt={member.name}
                                                className="w-full h-full object-cover rounded-full transition-[transform] duration-500 group-hover:scale-[1.04]"
                                            />
                                        </div>
                                        <a
                                            href={member.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="absolute bottom-0 right-0 bg-accent p-1.5 rounded-full text-bg opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:scale-110"
                                        >
                                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                            </svg>
                                        </a>
                                    </div>
                                    <h3 className="text-sm font-bold text-text underline decoration-accent/0 group-hover:decoration-accent/100 group-hover:-translate-y-[3px] transition-all duration-300 text-center">{member.name}</h3>
                                    <p className="text-accent text-xs uppercase tracking-widest text-center mt-1">{member.role}</p>
                                </TeamCard>
                            ))}
                            </div>
                        </div>
                    )
                ) : (
                    <div className="text-center text-text-muted italic opacity-50">No members found for this tenure.</div>
                )}

                {showViewAll && (
                    <div className="text-center mt-10">
                        <Link
                            to="/team"
                            className="btn btn-outline border-secondary text-text hover:bg-secondary/20 hover:border-accent hover:text-accent"
                        >
                            View Past Team
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
};

export default CoreTeam;
