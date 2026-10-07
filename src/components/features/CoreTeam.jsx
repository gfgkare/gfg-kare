import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { getTeam, getCoreTeam } from '../../services/dataService';
import TeamCard from '../../lib/TeamCard';
import nodp from '../../assets/nodp.png';
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

    const isCurrentCore = tenureFilter === "current";

    useEffect(() => {
        const fetchTeam = async () => {
            if (isCurrentCore) {
                const members = await getCoreTeam();
                setTeam(members);
                setLoading(false);
                return;
            }
            const result = await getTeam();
            const filteredMembers = result.filter(m => m.tenure && m.tenure.includes(tenureFilter));
            setTeam(filteredMembers);
            setLoading(false);
        };
        fetchTeam();
    }, [tenureFilter, isCurrentCore]);

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const scrollAmount = 380;
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    const sectionId = `team-${tenureFilter.replace(/\s+/g, '-').toLowerCase()}`;

    // Sizing tokens driven by compact flag (for faculty/other sections)
    const imgSize = compact ? 'w-24 h-24' : 'w-20 h-20';
    const nameSize = compact ? 'text-base' : 'text-sm';
    const roleSize = 'text-xs';
    const cardPad = '!p-4';
    const linkedInIconSize = compact ? 'w-5 h-5' : 'w-4 h-4';

    return (
        <section
            id={sectionId}
            className={`${compact ? 'py-12' : 'py-12 md:py-16'} bg-bg-surface border-t border-secondary relative overflow-hidden`}
        >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[500px] bg-[radial-gradient(ellipse_at_top,rgba(255,215,0,0.03)_0%,transparent_70%)] pointer-events-none"></div>
            <div className="container relative z-10">
                <div className={`text-center ${compact ? 'mb-10' : 'mb-12'}`}>
                    <motion.h2
                        className="text-4xl md:text-5xl font-serif font-bold mb-4"
                        initial={fadeInitial}
                        whileInView={fadeWhileInView}
                        viewport={t3Viewport}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                    >
                        <span className="text-accent">{title.split(' ').slice(0, 2).join(' ')}</span>{' '}
                        <span className="text-text">{title.split(' ').slice(2).join(' ')}</span>
                    </motion.h2>
                    <p className="text-secondary text-xs font-bold uppercase tracking-[0.2em] mb-4">{subtitle}</p>
                    <div className="w-24 h-1 bg-accent mx-auto"></div>
                </div>

                {loading ? (
                    <div className="flex justify-center h-48 items-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent"></div>
                    </div>
                ) : team.length > 0 ? (
                    gridLayout ? (
                        /* ── Grid layout (e.g. Faculty Coordinators) ── */
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                            {team.map((member, index) => {
                                const isPlaceholderLink = !member.linkedin || member.linkedin === '#' || member.linkedin.trim() === '';
                                return (
                                    <TeamCard
                                        key={member.id || index}
                                        className={cardPad}
                                        initial={{ opacity: 0, x: index % 2 === 0 ? -24 : 24 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={t3Viewport}
                                        transition={{ ...t3Transition, delay: Math.min(index * 0.08, 0.4) }}
                                    >
                                        <div className="relative mb-4">
                                            <div className={`${imgSize} rounded-full border-2 border-secondary p-1 group-hover:border-accent transition-colors duration-500 overflow-hidden`}>
                                                <img
                                                    src={member.image || member.photo || nodp}
                                                    alt={member.name}
                                                    onError={(e) => {
                                                        if (e.currentTarget.src !== nodp) {
                                                            e.currentTarget.src = nodp;
                                                        }
                                                    }}
                                                    className="w-full h-full object-cover rounded-full transition-[transform] duration-500 group-hover:scale-[1.04]"
                                                />
                                            </div>
                                            {!isPlaceholderLink && (
                                                <a
                                                    href={member.linkedin}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="absolute bottom-0 right-0 bg-accent p-1.5 rounded-full text-bg opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 hover:scale-110 shadow-md transition-all duration-300"
                                                    aria-label={`${member.name} LinkedIn`}
                                                    title={`${member.name} LinkedIn`}
                                                >
                                                    <svg className={`${linkedInIconSize} fill-current`} viewBox="0 0 24 24">
                                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                                    </svg>
                                                </a>
                                            )}
                                        </div>
                                        <h3 className={`${nameSize} font-bold text-text underline decoration-accent/0 group-hover:decoration-accent/100 group-hover:-translate-y-[3px] transition-all duration-300 text-center`}>
                                            {member.name}
                                        </h3>
                                        <p className={`text-accent ${roleSize} uppercase tracking-widest text-center mt-1`}>
                                            {member.role || member.position}
                                        </p>
                                    </TeamCard>
                                );
                            })}
                        </div>
                    ) : (
                        /* ── Single Continuous Row Layout (Horizontal Scroll Slider) ── */
                        <div className="relative group/slider">
                            <motion.button
                                onClick={() => scroll('left')}
                                className="hidden md:flex absolute -left-5 lg:-left-7 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full border border-secondary bg-bg/90 backdrop-blur-sm items-center justify-center text-text hover:text-accent hover:border-accent transition-all z-20 opacity-0 group-hover/slider:opacity-100 shadow-xl"
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
                                className="hidden md:flex absolute -right-5 lg:-right-7 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full border border-secondary bg-bg/90 backdrop-blur-sm items-center justify-center text-text hover:text-accent hover:border-accent transition-all z-20 opacity-0 group-hover/slider:opacity-100 shadow-xl"
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
                                className="flex overflow-x-auto gap-5 pb-4 pt-1 scrollbar-hide scroll-smooth"
                            >
                                {team.map((member, index) => {
                                    const isPlaceholderLink = !member.linkedin || member.linkedin === '#' || member.linkedin.trim() === '';
                                    return (
                                        <TeamCard
                                            key={member.id || member.name || index}
                                            className="flex-shrink-0 w-44 sm:w-48 !p-5 flex flex-col items-center text-center justify-between"
                                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={t3Viewport}
                                            transition={{ ...t3Transition, delay: Math.min(index * 0.05, 0.35) }}
                                        >
                                            {/* Profile photo */}
                                            <div className="relative mb-3 flex-shrink-0">
                                                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 border-secondary/50 p-1 group-hover:border-accent transition-colors duration-500 overflow-hidden bg-bg/50">
                                                    <img
                                                        src={member.photo || member.image || nodp}
                                                        alt={member.name}
                                                        onError={(e) => {
                                                            if (e.currentTarget.src !== nodp) {
                                                                e.currentTarget.src = nodp;
                                                            }
                                                        }}
                                                        className="w-full h-full object-cover rounded-full transition-transform duration-500 group-hover:scale-105"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            </div>

                                            {/* Name & Position */}
                                            <div className="w-full mt-1 mb-2">
                                                <h3 className="text-sm font-bold text-text underline decoration-accent/0 group-hover:decoration-accent/100 group-hover:-translate-y-[2px] transition-all duration-300 text-center line-clamp-2">
                                                    {member.name}
                                                </h3>
                                                <p className="text-accent text-xs uppercase tracking-wider text-center mt-1">
                                                    {member.position || member.role}
                                                </p>
                                            </div>

                                            {/* Social links (LinkedIn & GitHub) at the bottom of the card */}
                                            <div className="flex items-center justify-center gap-2 mt-auto pt-2">
                                                {!isPlaceholderLink && (
                                                    <a
                                                        href={member.linkedin}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="bg-secondary/20 hover:bg-accent text-text-muted hover:text-bg p-2 rounded-full transition-all duration-300 hover:scale-110 border border-secondary/30 hover:border-accent shadow-sm"
                                                        aria-label={`${member.name}'s LinkedIn profile`}
                                                        title={`${member.name}'s LinkedIn`}
                                                    >
                                                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                                                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                                        </svg>
                                                    </a>
                                                )}
                                                {member.github && (
                                                    <a
                                                        href={member.github}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="bg-secondary/20 hover:bg-accent text-text-muted hover:text-bg p-2 rounded-full transition-all duration-300 hover:scale-110 border border-secondary/30 hover:border-accent shadow-sm"
                                                        aria-label={`${member.name}'s GitHub profile`}
                                                        title={`${member.name}'s GitHub`}
                                                    >
                                                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                                                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                                                        </svg>
                                                    </a>
                                                )}
                                            </div>
                                        </TeamCard>
                                    );
                                })}
                            </div>
                        </div>
                    )
                ) : (
                    <div className="text-center text-text-muted italic opacity-50">No members found for this tenure.</div>
                )}

                {showViewAll && (
                    <div className="text-center mt-12">
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
