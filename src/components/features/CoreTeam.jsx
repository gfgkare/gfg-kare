import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { getTeam } from '../../services/dataService';

const CoreTeam = ({
    title = "Our Team",
    subtitle = "Technical Force",
    tenureFilter = "current",
    showViewAll = false
}) => {
    const [team, setTeam] = useState([]);
    const [loading, setLoading] = useState(true);
    const scrollContainerRef = useRef(null);

    useEffect(() => {
        const fetchTeam = async () => {
            const result = await getTeam();
            // Filter members based on the tenureFilter prop
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

    // Use a unique ID for each instance to avoid anchor conflicts
    const sectionId = `team-${tenureFilter.replace(/\s+/g, '-').toLowerCase()}`;

    return (
        <section id={sectionId} className="py-24 bg-bg border-t border-secondary/10">
            <div className="container">
                <div className="text-center mb-16">
                    <motion.h2
                        className="text-4xl md:text-5xl font-serif font-bold mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-accent">{title.split(' ').slice(0, 2).join(' ')}</span> <span className="text-text">{title.split(' ').slice(2).join(' ')}</span>
                    </motion.h2>
                    <p className="text-secondary text-xs font-bold uppercase tracking-[0.2em] mb-4">{subtitle}</p>
                    <motion.div
                        className="w-24 h-1 bg-accent mx-auto"
                        initial={{ width: 0 }}
                        whileInView={{ width: 96 }}
                        viewport={{ once: true }}
                    ></motion.div>
                </div>

                {loading ? (
                    <div className="flex justify-center h-48 items-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent"></div>
                    </div>
                ) : team.length > 0 ? (
                    <div className="relative group/slider">
                        <motion.button
                            onClick={() => scroll('left')}
                            className="hidden md:flex absolute -left-10 lg:-left-14 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full border border-secondary bg-bg/80 backdrop-blur-sm items-center justify-center text-text-muted hover:text-accent hover:border-accent transition-all z-20 opacity-0 group-hover/slider:opacity-100 shadow-lg"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            aria-label="Previous Team Members"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </motion.button>

                        <motion.button
                            onClick={() => scroll('right')}
                            className="hidden md:flex absolute -right-10 lg:-right-14 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full border border-secondary bg-bg/80 backdrop-blur-sm items-center justify-center text-text-muted hover:text-accent hover:border-accent transition-all z-20 opacity-0 group-hover/slider:opacity-100 shadow-lg"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            aria-label="Next Team Members"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </motion.button>

                        <div
                            ref={scrollContainerRef}
                            className="flex overflow-x-auto gap-8 pb-6 scrollbar-hide"
                        >
                        {team.map((member, index) => (
                            <motion.div
                                key={member.id}
                                className="flex-shrink-0 flex flex-col items-center group w-48"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="relative mb-6">
                                    <div className="w-40 h-40 rounded-full border-2 border-secondary p-1 group-hover:border-accent transition-colors duration-500 overflow-hidden">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover rounded-full transition-all duration-500"
                                        />
                                    </div>
                                    <a
                                        href={member.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="absolute bottom-0 right-0 bg-accent p-2 rounded-full text-bg hover:scale-110 transition-transform"
                                    >
                                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                        </svg>
                                    </a>
                                </div>
                                <h3 className="text-xl font-bold text-text underline decoration-accent/0 group-hover:decoration-accent/100 transition-all duration-300 text-center">{member.name}</h3>
                                <p className="text-accent text-sm uppercase tracking-widest text-center">{member.role}</p>
                            </motion.div>
                        ))}
                        </div>
                    </div>
                ) : (
                    <div className="text-center text-text-muted italic opacity-50">No members found for this tenure.</div>
                )}

                {showViewAll && (
                    <div className="text-center mt-20">
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
